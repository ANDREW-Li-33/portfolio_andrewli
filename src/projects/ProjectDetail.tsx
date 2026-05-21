import type { ProjectCard } from '../types';
import JohnStockbotDetail from './details/JohnStockbotDetail';
import StairBotDetail from './details/StairBotDetail';
import PrinterUpgradesDetail from './details/PrinterUpgradesDetail';
import BedframeHolderDetail from './details/BedframeHolderDetail';
import VexGuiDetail from './details/VexGuiDetail';

/**
 * Full-page project detail view that takes over the Projects tab when
 * a card is selected. The header (eyebrow + title + tags + divider) is
 * shared chrome; the body is dispatched to a per-project detail
 * component by id.
 */

interface Props {
  project: ProjectCard;
  onBack: () => void;
}

// Map of project id → detail body component. Add new project writeups here.
const DETAILS: Record<string, () => JSX.Element> = {
  'john-stockbot':     JohnStockbotDetail,
  'stair-bot':         StairBotDetail,
  'printer-upgrades':  PrinterUpgradesDetail,
  'bedframe-holder':   BedframeHolderDetail,
  'vex-gui':           VexGuiDetail,
};

export default function ProjectDetail({ project, onBack }: Props) {
  const Body = DETAILS[project.id];

  return (
    <div className="section project-detail">
      <div className="container">
        <button className="back-link" onClick={onBack}>
          <span className="arrow">←</span> All projects
        </button>

        <div className="detail-header">
          <div className="section-eyebrow">Project · {project.date}</div>
          <h1 className="section-title">{project.title}</h1>
          {project.tags && project.tags.length > 0 && (
            <div className="tags" style={{ marginTop: 'var(--space-3)' }}>
              {project.tags.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
          )}
        </div>

        <hr className="divider" />

        {Body && <Body />}
      </div>
    </div>
  );
}
