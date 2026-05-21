import type { ReactNode } from 'react';
import type { Tab } from '../types';
import { useTheme } from '../hooks/useTheme';
import Nav from './Nav';
import Footer from './Footer';

interface LayoutProps {
  tab: Tab;
  setTab: (t: Tab) => void;
  children: ReactNode;
}

/**
 * Outer chrome — owns theme state, renders Nav + page body + Footer.
 * The `.site` div carries the theme modifier and all design tokens
 * cascade from it (see styles.css).
 */
export default function Layout({ tab, setTab, children }: LayoutProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`site${theme === 'light' ? ' light' : ''}`}>
      <Nav tab={tab} setTab={setTab} theme={theme} toggleTheme={toggleTheme} />
      {children}
      <Footer />
    </div>
  );
}
