import { useState } from 'react';
import Lightbox, { type LightboxMedia } from '../../components/Lightbox';
import GalleryGrid from '../../components/GalleryGrid';
import { img } from '../../data/media';

interface Upgrade {
  title: string;
  body: string;
  img: string;
  link: string;
  linkLabel: string;
}

const UPGRADES: Upgrade[] = [
  {
    title: 'Magnetic bed',
    body: 'A $12 upgrade that saved me a ton of time scraping prints off a rigid bed. By bending the flexible plate, the print pops right off. Adhesion is noticeably better than the stock bed I was using before.',
    img: 'bed_h8k1it',
    link: 'https://www.amazon.com/dp/B07X3WBNPX',
    linkLabel: 'Magnetic bed',
  },
  {
    title: 'Metal extruder',
    body: 'My stock plastic extruder snapped, and I had to leave for college before I could fix it. The new metal extruder clamps with much more pressure on the filament and provides a more consistent feed rate. And now I never have to worry about it snapping again.',
    img: 'metal_extruder_installed_wlpgiu',
    link: 'https://www.amazon.com/dp/B07WHYBVJ5',
    linkLabel: 'Metal extruder module',
  },
  {
    title: 'New hotend',
    body: 'Bigger rectangular heating block with a silicone insulation cover for quicker heating and cooling times and better efficiency.',
    img: 'hotend_replacement_1_gcbbtp',
    link: 'https://www.amazon.com/dp/B082XXRT78',
    linkLabel: 'Hotend with silicone cover',
  },
  {
    title: 'Auto bed-leveling',
    body: 'I bought a CR-Touch first, then learned the 2018 Ender 3 mainboard didn\'t support it. Even after a new mainboard, finding firmware that worked with the original board + CR-Touch combination was a pain, but the bed leveling was worth it.',
    img: 'CRTouch_1_yjuawo',
    link: 'https://www.amazon.com/dp/B0995H2X92',
    linkLabel: 'Auto bed-leveling kit',
  },
  {
    title: 'New mainboard',
    body: 'Mapped wires from the old board to the new SKR Mini, fought a lack of JST tools and missing pins along the way. However, after these changes to the board and firmware, the stepper motors are now silent instead of constantly beeping!',
    img: 'SKR_mini_installed_kguolw',
    link: 'https://www.amazon.com/dp/B09LC34SCK',
    linkLabel: 'SKR Mini mainboard',
  },
];

// One thumbnail per upgrade — derived from UPGRADES so src/alt stay in
// sync with the data above. Each upgrade's grid only ever shows its own
// single image, so the click-to-expand lightbox is opened with a
// one-item slice of this array (matching the original single-image,
// non-gallery behavior of each row).
const UPGRADE_MEDIA: LightboxMedia[] = UPGRADES.map((u) => ({
  src: img(u.img),
  alt: u.title,
}));

const FINAL_RESULTS_MEDIA: LightboxMedia[] = [
  {
    src: img('final_cat_vbixl1'),
    alt: '3D-printed cat benchmark',
    caption: 'Cat benchmark print',
  },
  {
    kind: 'video',
    src: '/videos/printer/final_results.mp4',
    alt: '',
    caption: 'Printing with the new setup!',
  },
  {
    kind: 'video',
    src: '/videos/printer/metal extruder.mp4',
    alt: '',
    caption: 'Metal extruder installation',
  },
];

export default function PrinterUpgradesDetail() {
  const [lightbox, setLightbox] = useState<{ media: LightboxMedia[]; index: number } | null>(null);
  const openGallery = (media: LightboxMedia[]) => (index: number) => setLightbox({ media, index });

  return (
    <>
      <section className="subsection">
        <div>
          <div className="label">Introduction</div>
          <p>
            After more than six years on my Ender 3 (since it released in 2018),
            the printer was pushed to its limits. Coming home for winter break,
            I decided it was time to give it the upgrades it deserved.
          </p>
          <p>
            What was meant to be a quick hotend fix cascaded into a
            multi-day rebuild of the printer.
          </p>
        </div>
      </section>

      <hr className="divider" />

      <section>
        <h2 className="detail-h2">Upgrades</h2>
        {UPGRADES.map((u, i) => (
          <div key={u.title}>
            <div className={`subsection${i % 2 === 1 ? ' reverse' : ''}`}>
              <div>
                <div className="label">Upgrade {String(i + 1).padStart(2, '0')}</div>
                <h3 className="detail-h3">{u.title}</h3>
                <p>{u.body}</p>
                <a className="link" href={u.link} target="_blank" rel="noopener noreferrer">
                  {u.linkLabel} →
                </a>
              </div>
              <GalleryGrid
                media={[UPGRADE_MEDIA[i]]}
                onOpen={openGallery([UPGRADE_MEDIA[i]])}
                variant="cols-1"
              />
            </div>
            {i < UPGRADES.length - 1 && <hr className="divider divider-tight" />}
          </div>
        ))}
      </section>

      <hr className="divider" />

      <section>
        <h2 className="detail-h2 tight">Final results</h2>
        <p className="detail-lede">
          There's room for improvement, but I'm really happy with how it turned out!
        </p>
        <GalleryGrid media={FINAL_RESULTS_MEDIA} onOpen={openGallery(FINAL_RESULTS_MEDIA)} variant="cols-3" />
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
