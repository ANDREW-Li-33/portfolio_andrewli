import type { Tab, Theme } from '../types';
import { SunIcon, MoonIcon } from '../components/Icons';

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
  return (
    <nav className="nav">
      <div className="nav-container">
        <button className="brand" onClick={() => setTab('home')}>
          {/* Andy (one of Snoopy's siblings) — small mark to the left of
              the wordmark. Also used as the site's favicon. */}
          <img className="brand-mark" src="/images/andy.png" alt="" />
          Andrew Li
        </button>
        <ul className="nav-links">
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
      </div>
    </nav>
  );
}
