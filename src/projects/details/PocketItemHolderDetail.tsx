import { useState } from 'react';
import Lightbox, { type LightboxMedia } from '../../components/Lightbox';
import GalleryGrid from '../../components/GalleryGrid';
import DownloadList from '../../components/DownloadList';

const CAD_MEDIA: LightboxMedia[] = [
  {
    kind: 'video',
    src: '/videos/pocket-item-holder/pocket_item_holder_cad.mp4',
    alt: '',
    caption: 'CAD model in Fusion 360',
  },
];

const RESULT_MEDIA: LightboxMedia[] = [
  {
    src: '/images/pocket-item-holder/pocket_item_holder_close.jpg',
    alt: 'Wallet, AirPods, chapstick, and keys sitting in the shelf-mounted holder',
  },
  {
    src: '/images/pocket-item-holder/pocket_item_holder_far.jpg',
    alt: 'The holder mounted on the corner shelf next to the 3D printer',
  },
];

export default function PocketItemHolderDetail() {
  const [lightbox, setLightbox] = useState<{ media: LightboxMedia[]; index: number } | null>(null);
  const openGallery = (media: LightboxMedia[]) => (index: number) => setLightbox({ media, index });

  return (
    <>
      <section>
        <div className="subsection">
          <div>
            <div className="label">Motivation</div>
            <p>
              When I come back into my apartment, I have 4 things in my
              pocket: my wallet, my keys, my chapstick, and my earbuds.
              However, these items usually end up cluttering my desk, my bed,
              or both! I believe that keeping a clean and organized room is
              highly beneficial for one's mind, so I designed a 3D printed
              holder that's secured onto my shelf. For fastening, I found M5
              screws and nuts lying around that fit the holes in my shelf
              perfectly. Hopefully designs like this can inspire more people
              to use 3D printing to fight disorganization in their lives! The
              file is free to download below.
            </p>
          </div>
          <GalleryGrid media={CAD_MEDIA} onOpen={openGallery(CAD_MEDIA)} variant="cols-1" />
        </div>

        <div className="label">Downloads</div>
        <DownloadList items={[
          { label: 'Pocket item holder', href: '/downloadables/pocket_item_holder.stl', sub: '.stl' },
        ]} />
      </section>

      <hr className="divider" />

      <section>
        <div className="label">Results!</div>
        <GalleryGrid media={RESULT_MEDIA} onOpen={openGallery(RESULT_MEDIA)} />
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
