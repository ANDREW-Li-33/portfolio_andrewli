import { useLayoutEffect } from 'react';
import type { Tab } from './types';
import { useRoute } from './hooks/useRoute';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Research from './pages/Research';
import Resume from './pages/Resume';
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
  const { tab, projectId, hash } = route;

  // Nav handler: jumping to "projects" from anywhere always lands on
  // the grid (drop any selected detail). Clears any hash.
  const handleSetTab = (next: Tab) => {
    if (next === 'projects') navigate('projects', null);
    else navigate(next, null);
  };

  const setSelectedId = (id: string | null) => {
    navigate('projects', id);
  };

  // Used by the Resume page to deep-link into a named section on
  // Experience or Research (e.g. ('experience', 'sandia') → scrolls
  // the Experience page to <section id="sandia">).
  const handleNavToSection = (next: Tab, anchor: string | null = null) => {
    navigate(next, null, anchor);
  };

  // Resume → project detail page (e.g. opens /projects/john-stockbot).
  const handleNavToProject = (id: string) => {
    navigate('projects', id);
  };

  // Scroll behavior on navigation:
  //  - If the route has a hash, find <#id> and scroll the .site
  //    container so the section sits at the top.
  //  - Otherwise reset .site scrollTop to 0 (existing behavior — keeps
  //    page changes from inheriting the previous page's scroll).
  // useLayoutEffect runs after the new page's DOM is mounted but before
  // paint, so getElementById finds the just-rendered section.
  useLayoutEffect(() => {
    const root = document.querySelector('.site') as HTMLElement | null;
    if (!root) return;

    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        // The .site container is the actual scroll context, not window.
        // offsetTop is measured against the offsetParent — for our
        // sticky-nav + flex layout, that lines up with the .site
        // scrollable area for elements deep inside the page.
        root.scrollTop = el.offsetTop;
        return;
      }
    }
    root.scrollTop = 0;
  }, [tab, projectId, hash]);

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
      {tab === 'resume'     && (
        <Resume
          onNavToSection={handleNavToSection}
          onNavToProject={handleNavToProject}
        />
      )}
      {tab === 'about'      && <About onNav={handleSetTab} />}
      {tab === 'contact'    && <Contact />}
    </Layout>
  );
}
