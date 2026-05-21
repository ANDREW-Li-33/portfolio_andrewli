// Responsive iframe wrapper. Used for YouTube embeds on project detail pages.
export default function Embed({ src, title }: { src: string; title: string }) {
  return (
    <div className="embed">
      <iframe
        src={src}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}
