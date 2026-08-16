import { useState } from 'react';
import Lightbox, { type LightboxMedia } from '../../components/Lightbox';
import GalleryGrid from '../../components/GalleryGrid';
import DownloadList from '../../components/DownloadList';

const CAD_MEDIA: LightboxMedia[] = [
  {
    src: '/images/anki-controller-charging-stand/anki_controller_charging_stand_cad.jpg',
    alt: 'CAD render of the case, engraved with MAGGIE',
    caption: 'CAD model in Fusion 360',
  },
  {
    kind: 'video',
    src: '/videos/anki-controller-charging-stand/anki_controller_charging_stand_cad.mp4',
    alt: '',
    caption: 'CAD presentation',
  },
];

const RESULTS_MEDIA: LightboxMedia[] = [
  {
    kind: 'video',
    src: '/videos/anki-controller-charging-stand/anki_controller_charging_stand_demo.mp4',
    alt: '',
    caption: 'Feature walkthrough',
  },
  {
    kind: 'video',
    src: '/videos/anki-controller-charging-stand/anki_controller_charging_stand_pan.mp4',
    alt: '',
    caption: '360 view',
  },
];

export default function AnkiControllerChargingStandDetail() {
  const [lightbox, setLightbox] = useState<{ media: LightboxMedia[]; index: number } | null>(null);
  const openGallery = (media: LightboxMedia[]) => (index: number) => setLightbox({ media, index });

  return (
    <>
      <section className="subsection">
        <div>
          <div className="label">Motivation</div>
          <p>
            My sister is going to medical school soon, and I wanted to make her a birthday gift that will be useful during her studies!
            I ended up creating a charging stand for her Anki controller, since it's something that she'll use a lot while studying for exams.
          </p>

          <div className="label">Features</div>
          <p>
            I wanted the stand to be highly functional while looking unobstrusive enough to sit on my sister's desk, which proved to be a challenge!
          </p>
          <p>
            The stand features a small recessed area that the controller can sit in while not being charged. When my sister decides that she wants to charge the controller, she simply slides the controller up into the USB C cable.
            The cable head is tightly secured using a bracket that clamps down from the top using M4 screws. For convenience, there is a hole in the back of the stand that stores the allen key used to screw the M4 screws.
          </p>
          <p>
          There is also a drawer in the back that can be used for both the allen key and a small charging brick, so my sister doesn't have to always look around for a dedicated charger. As always, stl files are included at the bottom of the page.
          For future versions, I will include a recessed area in the stand that can be used to store the cable so one can wrap the cable in that area rather than around the drawer knob.
          </p>
        </div>
        <GalleryGrid media={CAD_MEDIA} onOpen={openGallery(CAD_MEDIA)} variant="cols-1" />
      </section>

      <hr className="divider" />

      <section>
        <div className="label">Results!</div>
        <GalleryGrid media={RESULTS_MEDIA} onOpen={openGallery(RESULTS_MEDIA)} />
      </section>

      <hr className="divider" />

      <section>
        <div className="label">Downloads</div>
        <DownloadList items={[
          { label: 'Frame',  href: '/downloadables/anki_controller_charging_stand_frame.stl',  sub: '.stl' },
          { label: 'Drawer', href: '/downloadables/anki_controller_charging_stand_drawer.stl', sub: '.stl' },
          { label: 'Top',    href: '/downloadables/anki_controller_charging_stand_top.stl',    sub: '.stl' },
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
