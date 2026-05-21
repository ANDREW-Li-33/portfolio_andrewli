import { useState, useLayoutEffect } from 'react';
import type { Tab } from './types';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Research from './pages/Research';
import About from './pages/About';
import Contact from './pages/Contact';

/**
 * Top-level router. Owns the current tab and renders the matching page
 * inside the shared Layout (nav + footer + theme).
 *
 * Also owns `selectedProjectId` (lifted out of <Projects />) so that
 * clicking the Projects nav tab can clear it — returning the user to
 * the grid view from inside a project detail page.
 */
export default function App() {
  const [tab, setTab] = useState<Tab>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  // Wrap setTab so clicking the Projects nav button always returns to
  // the grid view, even when the user is already on the Projects tab
  // inside a detail page.
  const handleSetTab = (next: Tab) => {
    if (next === 'projects') setSelectedProjectId(null);
    setTab(next);
  };

  // Reset the .site scroll container to the top whenever the visible
  // page changes (tab nav OR opening/closing a project detail). Without
  // this, the persistent .site scroll position carries over between
  // pages — e.g. scroll down on the tall John-Stockbot detail, click
  // "About", and the browser shows you the bottom of About because it
  // tried to keep the same scrollTop. useLayoutEffect runs after the
  // DOM swaps but before paint, so there's no visible flash of the
  // old scroll position on the new page.
  useLayoutEffect(() => {
    const root = document.querySelector('.site');
    if (root) root.scrollTop = 0;
  }, [tab, selectedProjectId]);

  return (
    <Layout tab={tab} setTab={handleSetTab}>
      {tab === 'home' && (
        <Home
          onProjects={() => handleSetTab('projects')}
          onAbout={() => handleSetTab('about')}
        />
      )}
      {tab === 'projects'   && (
        <Projects
          selectedId={selectedProjectId}
          setSelectedId={setSelectedProjectId}
        />
      )}
      {tab === 'experience' && <Experience />}
      {tab === 'research'   && <Research />}
      {tab === 'about'      && <About onNav={handleSetTab} />}
      {tab === 'contact'    && <Contact />}
    </Layout>
  );
}
