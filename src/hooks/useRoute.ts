import { useEffect, useState } from 'react';
import type { Tab } from '../types';
import { ALL_PROJECTS } from '../data/projects';

/**
 * Tiny URL router built on the History API. The site has six tabs and
 * a per-project detail page; everything else is a SPA that doesn't
 * need react-router-dom's full surface (links, nested routes, loaders).
 *
 * Routes:
 *   /                       → home
 *   /about                  → about
 *   /projects               → projects (grid)
 *   /projects/:id           → projects (detail for known id)
 *   /experience             → experience
 *   /research               → research
 *   /contact                → contact
 *
 * Unknown paths fall through to home (after Netlify's SPA rewrite has
 * already served index.html for them).
 */

export type Route = {
  tab: Tab;
  projectId: string | null;
};

const TAB_PATHS: Record<Exclude<Tab, 'home'>, string> = {
  about:      '/about',
  projects:   '/projects',
  experience: '/experience',
  research:   '/research',
  contact:    '/contact',
};

const PATH_TO_TAB: Record<string, Tab> = {
  '/':           'home',
  '/about':      'about',
  '/projects':   'projects',
  '/experience': 'experience',
  '/research':   'research',
  '/contact':    'contact',
};

const VALID_PROJECT_IDS = new Set(ALL_PROJECTS.map((p) => p.id));

export function parseRoute(pathname: string): Route {
  // Normalize trailing slash (treat /about/ same as /about, except root)
  const path = pathname.length > 1 && pathname.endsWith('/')
    ? pathname.slice(0, -1)
    : pathname;

  // /projects/:id — only resolve when :id matches a known project
  if (path.startsWith('/projects/')) {
    const id = path.slice('/projects/'.length);
    if (VALID_PROJECT_IDS.has(id)) {
      return { tab: 'projects', projectId: id };
    }
    return { tab: 'projects', projectId: null };
  }

  const tab = PATH_TO_TAB[path];
  if (tab) return { tab, projectId: null };

  // Unknown path → home (Netlify rewrites everything to index.html
  // anyway, so this is the in-app 404 fallback).
  return { tab: 'home', projectId: null };
}

export function buildPath(tab: Tab, projectId: string | null = null): string {
  if (tab === 'projects' && projectId) return `/projects/${projectId}`;
  if (tab === 'home') return '/';
  return TAB_PATHS[tab];
}

/**
 * Hook returning the current route plus a `navigate` function that
 * updates the URL via pushState. Subscribes to popstate so the browser
 * back/forward buttons update React state in lockstep.
 */
export function useRoute() {
  const [route, setRoute] = useState<Route>(() =>
    parseRoute(typeof window === 'undefined' ? '/' : window.location.pathname)
  );

  useEffect(() => {
    const onPop = () => setRoute(parseRoute(window.location.pathname));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = (tab: Tab, projectId: string | null = null) => {
    const path = buildPath(tab, projectId);
    if (path !== window.location.pathname) {
      window.history.pushState({}, '', path);
    }
    setRoute({ tab, projectId });
  };

  return { route, navigate };
}
