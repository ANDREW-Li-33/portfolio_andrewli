import { useEffect } from 'react';

const SITE_ORIGIN = 'https://andrew.info';

interface DocMeta {
  title: string;
  description: string;
  /** Path of the current page (e.g. "/about"). Used for canonical + og:url. */
  path: string;
  /** Optional override for og:image (absolute URL). Falls back to /og-image.png. */
  ogImage?: string;
}

/**
 * Updates per-page <head> tags (title, meta description, canonical,
 * OpenGraph, Twitter card) on mount and whenever the inputs change.
 *
 * Tags are created lazily the first time they're needed and reused on
 * subsequent updates — so we don't pile up duplicate <meta> nodes as
 * the user navigates between tabs.
 */
export function useDocMeta({ title, description, path, ogImage }: DocMeta) {
  useEffect(() => {
    const fullTitle = title;
    const canonicalUrl = SITE_ORIGIN + path;
    const image = ogImage ?? `${SITE_ORIGIN}/og-image.png`;

    document.title = fullTitle;
    setMeta('name', 'description', description);

    setLink('canonical', canonicalUrl);

    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:image', image);

    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', image);
  }, [title, description, path, ogImage]);
}

function setMeta(attr: 'name' | 'property', key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}
