import { useState } from 'react';
import Lightbox, { type LightboxMedia } from '../../components/Lightbox';
import GalleryGrid from '../../components/GalleryGrid';
import DownloadList from '../../components/DownloadList';

const CAD_MEDIA: LightboxMedia[] = [
  {
    kind: 'video',
    src: '/videos/marker-holder/marker_holder_cad.mp4',
    alt: 'CAD model in Fusion 360',
    caption: 'CAD model in Fusion 360',
  },
];

const RESULT_IMAGES: LightboxMedia[] = [
  {
    src: '/images/marker-holder/marker_holder_flat.jpg',
    alt: 'Marker holder with markers sliding in at an angle',
  },
  {
    src: '/images/marker-holder/marker_holder_upright.jpg',
    alt: 'Marker holder with markers standing upright',
  },
];

export default function MarkerHolderDetail() {
  const [lightbox, setLightbox] = useState<{ media: LightboxMedia[]; index: number } | null>(null);
  const openGallery = (media: LightboxMedia[]) => (index: number) => setLightbox({ media, index });

  return (
    <>
      <section>
        <div className="subsection">
          <div>
            <div className="label">Motivation</div>
            <p>
              I've recently picked up drawing with alcohol markers, but I have a
              problem: I had no good way to store my new markers inside my desk!
              I could leave the markers as they are inside my desk drawer, but
              that would cause them to rattle around and it would be a pain to take the markers out
              and put back every time I want to draw. My solution is a modular
              holder that can store 5 markers in a row and is infinitely
              stackable using small pegs. The file is free to download below!
              (note that the markers are{' '}
              <a
                className="text-link"
                href="https://www.dickblick.com/products/blick-studio-alcohol-art-markers/"
                target="_blank"
                rel="noopener noreferrer"
              >
                blick studio double-ended alcohol markers
              </a>, which are roughly 15mm in diameter)
            </p>
          </div>
          <GalleryGrid media={CAD_MEDIA} onOpen={openGallery(CAD_MEDIA)} variant="cols-1" />
        </div>

        <div className="label">Downloads</div>
        <DownloadList items={[
          { label: 'Marker holder', href: '/downloadables/marker_holder.stl', sub: ".stl" },
        ]} />
      </section>

      <hr className="divider" />

      <section>
        <div className="label">Results!</div>
        <GalleryGrid media={RESULT_IMAGES} onOpen={openGallery(RESULT_IMAGES)} />
      </section>

      <Lightbox
        media={lightbox?.media ?? []}
        index={lightbox?.index ?? null}
        onClose={() => setLightbox(null)}
        onNavigate={(index) => setLightbox((lb) => (lb ? { ...lb, index } : lb))}
      />
    </>
  );
}
