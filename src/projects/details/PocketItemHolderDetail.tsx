import DownloadList from '../../components/DownloadList';

export default function PocketItemHolderDetail() {
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
          <div className="image-grid cols-1">
            <figure>
              <video src="/videos/pocket-item-holder/pocket_item_holder_cad.mp4" autoPlay loop muted playsInline />
              <figcaption>CAD model in Fusion 360</figcaption>
            </figure>
          </div>
        </div>

        <div className="label">Downloads</div>
        <DownloadList items={[
          { label: 'Pocket item holder', href: '/downloadables/pocket_item_holder.stl', sub: '.stl' },
        ]} />
      </section>

      <hr className="divider" />

      <section>
        <div className="label">Results!</div>
        <div className="image-grid">
          <figure>
            <img src="/images/pocket-item-holder/pocket_item_holder_close.jpg" alt="Wallet, AirPods, chapstick, and keys sitting in the shelf-mounted holder" />
          </figure>
          <figure>
            <img src="/images/pocket-item-holder/pocket_item_holder_far.jpg" alt="The holder mounted on the corner shelf next to the 3D printer" />
          </figure>
        </div>
      </section>
    </>
  );
}
