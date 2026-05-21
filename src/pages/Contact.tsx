import { useState } from 'react';
import { CONTACTS } from '../data/contacts';
import { useDocMeta } from '../hooks/useDocMeta';

export default function Contact() {
  useDocMeta({
    title: 'Contact — Andrew Li',
    description: 'Get in touch with Andrew Li — GitHub, LinkedIn, YouTube, email.',
    path: '/contact',
  });

  // Tracks which non-link contact's handle was last copied, so we can show
  // a transient "Copied!" label on the matching button.
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (platform: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(platform);
      window.setTimeout(() => {
        // Only clear if this is still the active "Copied!" state — avoids
        // a stale timeout wiping a more recent copy.
        setCopied((current) => (current === platform ? null : current));
      }, 1500);
    } catch {
      /* clipboard unavailable; silently fail (user can still select the text) */
    }
  };

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 760 }}>
        <div className="section-eyebrow">Contact</div>
        <h1 className="section-title">Get in touch!</h1>

        <div className="contact-list">
          {CONTACTS.map((c) =>
            c.link ? (
              <a
                key={c.platform}
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-row"
              >
                <span className="contact-platform">{c.platform}</span>
                <span className="contact-handle">{c.handle}</span>
                <span className="contact-arrow">→</span>
              </a>
            ) : (
              <div key={c.platform} className="contact-row no-link">
                <span className="contact-platform">{c.platform}</span>
                <span className="contact-handle">{c.handle}</span>
                <button
                  className={`contact-copy-btn${copied === c.platform ? ' copied' : ''}`}
                  onClick={() => handleCopy(c.platform, c.handle)}
                  aria-label={`Copy ${c.handle} to clipboard`}
                >
                  {copied === c.platform ? 'Copied!' : 'Copy'}
                </button>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
