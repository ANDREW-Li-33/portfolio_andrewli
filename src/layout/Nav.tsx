import { useEffect, useState } from 'react';
import type { Tab, Theme } from '../types';
import { SunIcon, MoonIcon, MenuIcon, CloseIcon } from '../components/Icons';

interface NavProps {
  tab: Tab;
  setTab: (t: Tab) => void;
  theme: Theme;
  toggleTheme: () => void;
}

const TABS: { id: Tab; label: string }[] = [
  { id: 'about',      label: 'About' },
  { id: 'projects',   label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'research',   label: 'Research' },
  { id: 'contact',    label: 'Contact' },
];

export default function Nav({ tab, setTab, theme, toggleTheme }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock the .site scroll container while the drawer is open so swiping
  // the drawer doesn't carry the page underneath. .site (not body) is the
  // actual scroll container, so we have to mutate it directly.
  useEffect(() => {
    const site = document.querySelector('.site') as HTMLElement | null;
    if (!site) return;
    site.style.overflow = menuOpen ? 'hidden' : '';
    return () => { site.style.overflow = ''; };
  }, [menuOpen]);

  // ESC closes the drawer.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const goTo = (id: Tab) => {
    setTab(id);
    setMenuOpen(false);
  };

  return (
    <nav className="nav">
      <div className="nav-container">
        <button className="brand" onClick={() => goTo('home')}>
          {/* Andy (one of Snoopy's siblings) — small mark to the left of
              the wordmark. Also used as the site's favicon. */}
          <img className="brand-mark" src="/images/andy.png" alt="" />
          <span className="brand-text">Andrew Li</span>
        </button>

        {/* Desktop / wide-screen nav — hidden under ≤768px via CSS. */}
        <ul className="nav-links nav-desktop">
          {TABS.map((t) => (
            <li key={t.id}>
              <button
                className={`nav-link${tab === t.id ? ' active' : ''}`}
                onClick={() => setTab(t.id)}
              >
                {t.label}
              </button>
            </li>
          ))}
          <li>
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
          </li>
        </ul>

        {/* Mobile hamburger — hidden above 768px via CSS. */}
        <button
          className="nav-mobile-toggle"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-drawer"
        >
          <MenuIcon />
        </button>
      </div>

      {/* Mobile drawer — full-viewport overlay with a slide-in panel on
          the right. Inert when closed (pointer-events: none, aria-hidden). */}
      <div
        id="mobile-nav-drawer"
        className={`nav-drawer${menuOpen ? ' open' : ''}`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
      >
        <div
          className="nav-drawer-backdrop"
          onClick={() => setMenuOpen(false)}
        />
        <div className="nav-drawer-panel">
          <div className="nav-drawer-head">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              className="nav-mobile-close"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <CloseIcon />
            </button>
          </div>
          <ul className="nav-drawer-list">
            {TABS.map((t) => (
              <li key={t.id}>
                <button
                  className={`nav-drawer-link${tab === t.id ? ' active' : ''}`}
                  onClick={() => goTo(t.id)}
                >
                  <span>{t.label}</span>
                  <span className="nav-drawer-arrow">→</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
