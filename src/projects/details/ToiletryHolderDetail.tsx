import { useState } from 'react';
import Lightbox, { type LightboxMedia } from '../../components/Lightbox';
import GalleryGrid from '../../components/GalleryGrid';
import DownloadList from '../../components/DownloadList';

const CAD_MEDIA: LightboxMedia[] = [
  {
    src: '/images/toiletry-holder/toiletry_holder_lotion_cad.jpg',
    alt: 'CAD render of the lotion holder',
    caption: 'Lotion holder CAD model',
    aspectRatio: '1016 / 704',
  },
  {
    src: '/images/toiletry-holder/toiletry_holder_contacts_cad.jpg',
    alt: 'CAD render of the night contacts holder',
    caption: 'Night contacts holder CAD model',
    aspectRatio: '1532 / 992',
  },
];

const RESULT_MEDIA: LightboxMedia[] = [
  {
    src: '/images/toiletry-holder/toiletry_holder_result.jpg',
    alt: 'Both holders in use on the bathroom counter',
    caption: 'Both holders in use!',
  },
];

export default function ToiletryHolderDetail() {
  const [lightbox, setLightbox] = useState<{ media: LightboxMedia[]; index: number } | null>(null);
  const openGallery = (media: LightboxMedia[]) => (index: number) => setLightbox({ media, index });

  return (
    <>
      <section>
        <div className="subsection">
          <div>
            <div className="label">Description</div>
            <p>
              When cleaning up my bathroom, I realized that many items were cluttered on the table without having any sense of organization!
              I decided to create dedicated holders for my commonly used toiletry items to combat this problem.
            </p>
            <p>
              The first item was a lotion holder. The goal was to create an item that could hold both my moisturizer and prescribed cream while looking subtle, sleek, and intuitive.
            </p>
            <p>
              The second item was a night contact holder that could hold my contact solution bottle, saline solution bottle, night contact case, and contact plunger case, as well as slots for miscellaneous items (in my case, floss picks).
            </p>
            <GalleryGrid media={RESULT_MEDIA} onOpen={openGallery(RESULT_MEDIA)} variant="cols-1 narrow" />
          </div>
          <GalleryGrid media={CAD_MEDIA} onOpen={openGallery(CAD_MEDIA)} variant="cols-1" />
        </div>
      </section>

      <hr className="divider" />

      <section>
        <div className="label">Downloads</div>
        <DownloadList items={[
          { label: 'Lotion holder',          href: '/downloadables/toiletry_holder_lotion.stl',   sub: '.stl' },
          { label: 'Night contacts holder',  href: '/downloadables/toiletry_holder_contacts.stl', sub: '.stl' },
        ]} />
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
