// List of downloadable assets (STLs, ZIPs, etc.) shown at the bottom of
// project detail pages.
interface DownloadItem {
  label: string;
  href: string;
  sub?: string;
}

export default function DownloadList({ items }: { items: DownloadItem[] }) {
  return (
    <div className="download-list">
      {items.map((i) => (
        <a key={i.href} href={i.href} download className="download">
          <div className="download-icon" aria-hidden>↓</div>
          <div>
            <div className="download-label">{i.label}</div>
            {i.sub && <div className="download-sub">{i.sub}</div>}
          </div>
        </a>
      ))}
    </div>
  );
}
