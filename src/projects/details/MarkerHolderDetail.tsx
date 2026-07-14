import DownloadList from '../../components/DownloadList';

export default function MarkerHolderDetail() {
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
          <div className="image-grid cols-1">
            <figure>
              <video src="/videos/marker-holder/marker_holder_cad.mp4" autoPlay loop muted playsInline />
              <figcaption>CAD model in Fusion 360</figcaption>
            </figure>
          </div>
        </div>

        <div className="label">Downloads</div>
        <DownloadList items={[
          { label: 'Marker holder', href: '/downloadables/marker_holder.stl', sub: ".stl" },
        ]} />
      </section>

      <hr className="divider" />

      <section>
        <div className="label">Results!</div>
        <div className="image-grid">
          <figure>
            <img src="/images/marker-holder/marker_holder_flat.jpg" alt="Marker holder with markers sliding in at an angle" />
          </figure>
          <figure>
            <img src="/images/marker-holder/marker_holder_upright.jpg" alt="Marker holder with markers standing upright" />
          </figure>
        </div>
      </section>
    </>
  );
}
