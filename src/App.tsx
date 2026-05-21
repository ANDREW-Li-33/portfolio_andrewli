import { useLayoutEffect } from 'react';
import type { Tab } from './types';
import { useRoute } from './hooks/useRoute';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Research from './pages/Research';
import About from './pages/About';
import Contact from './pages/Contact';

/**
 * Top-level router. The current tab + selected project both live in
 * the URL (see useRoute), so deep links like /about and
 * /projects/john-stockbot resolve correctly on first paint and the
 * browser back/forward buttons just work.
 */
export default function App() {
  const { route, navigate } = useRoute();
  const { tab, projectId } = route;

  // Nav handler: jumping to "projects" from anywhere always lands on
  // the grid (drop any selected detail).
  const handleSetTab = (next: Tab) => {
    if (next === 'projects') navigate('projects', null);
    else navigate(next, null);
  };

  const setSelectedId = (id: string | null) => {
    navigate('projects', id);
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
  }, [tab, projectId]);

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
          selectedId={projectId}
          setSelectedId={setSelectedId}
        />
      )}
      {tab === 'experience' && <Experience />}
      {tab === 'research'   && <Research />}
      {tab === 'about'      && <About onNav={handleSetTab} />}
      {tab === 'contact'    && <Contact />}
    </Layout>
  );
}
