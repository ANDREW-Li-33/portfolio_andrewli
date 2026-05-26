import { lazy, Suspense, type ComponentType } from 'react';
import type { ProjectCard } from '../types';
import { useDocMeta } from '../hooks/useDocMeta';

// Per-project detail bodies are large enough (image grids, embeds,
// long prose) to be worth splitting out of the main bundle — the user
// only sees them after clicking a card, and the parent header / back
// link / title render immediately while the body chunk streams in.
const JohnStockbotDetail    = lazy(() => import('./details/JohnStockbotDetail'));
const StairBotDetail        = lazy(() => import('./details/StairBotDetail'));
const PrinterUpgradesDetail = lazy(() => import('./details/PrinterUpgradesDetail'));
const BedframeHolderDetail  = lazy(() => import('./details/BedframeHolderDetail'));
const VexGuiDetail          = lazy(() => import('./details/VexGuiDetail'));

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

// Map of project id → detail body component. Add new project writeups
// here. The type accepts both eager components and lazy(() => import())
// results so individual detail bodies can be split out of the main
// bundle.
const DETAILS: Record<string, ComponentType> = {
  'john-stockbot':     JohnStockbotDetail,
  'stair-bot':         StairBotDetail,
  'printer-upgrades':  PrinterUpgradesDetail,
  'bedframe-holder':   BedframeHolderDetail,
  'vex-gui':           VexGuiDetail,
};

export default function ProjectDetail({ project, onBack }: Props) {
  const Body = DETAILS[project.id];

  useDocMeta({
    title: `${project.title} — Andrew Li`,
    description: project.description,
    path: `/projects/${project.id}`,
  });

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

        {/* Suspense fallback is null — the header above is already
            visible so the page is never blank; the body fades in once
            its chunk arrives (sub-100ms on a warm connection). */}
        <Suspense fallback={null}>
          {Body && <Body />}
        </Suspense>
      </div>
    </div>
  );
}
