import type { ProjectCard } from '../types';
import { PROJECTS, MINI_PROJECTS, ALL_PROJECTS } from '../data/projects';
import { img } from '../data/media';
import ProjectDetail from '../projects/ProjectDetail';

interface ProjectsProps {
  selectedId: string | null;
  setSelectedId: (id: string | null) => void;
}

/**
 * Projects page. Master view shows the Projects + Mini Projects grids;
 * clicking any card swaps in a full-page ProjectDetail.
 *
 * `selectedId` is owned by <App /> so the nav can clear it when the
 * Projects tab is clicked while a detail page is open.
 */
export default function Projects({ selectedId, setSelectedId }: ProjectsProps) {
  if (selectedId) {
    const project = ALL_PROJECTS.find((p) => p.id === selectedId);
    if (project) {
      // Scroll-to-top on open is handled by App.tsx's useLayoutEffect
      // watching selectedProjectId.
      return <ProjectDetail project={project} onBack={() => setSelectedId(null)} />;
    }
  }

  return (
    <div className="section">
      <div className="container">
        <div className="section-eyebrow">Projects</div>

        <ProjectGrid
          title="Projects"
          items={PROJECTS}
          onSelect={setSelectedId}
        />
        <ProjectGrid
          title="Mini Projects"
          items={MINI_PROJECTS}
          onSelect={setSelectedId}
        />
      </div>
    </div>
  );
}

interface GridProps {
  title: string;
  items: ProjectCard[];
  onSelect: (id: string) => void;
}

function ProjectGrid({ title, items, onSelect }: GridProps) {
  return (
    <div className="project-section">
      <div className="project-section-heading">
        <h2 className="project-title">{title}</h2>
      </div>
      <div className="project-grid">
        {items.map((p) => (
          <button
            key={p.id}
            className="project-card"
            onClick={() => onSelect(p.id)}
          >
            <div className="project-card-title">
              <span>{p.title}</span>
              {p.inProgress && <span className="badge">In progress</span>}
            </div>
            <div className="project-card-date">{p.date}</div>
            <p className="project-card-desc">{p.description}</p>
            {p.image
              ? <img src={img(p.image)} alt={p.title} />
              : <div className="project-card-placeholder">Build in progress</div>
            }
            {p.tags && p.tags.length > 0 && (
              <div className="tags">
                {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
            )}
            <div className="project-card-cta">Read more <span className="arrow">→</span></div>
          </button>
        ))}
      </div>
    </div>
  );
}
