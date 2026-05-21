import DownloadList from '../../components/DownloadList';
import Embed from '../../components/Embed';

export default function BedframeHolderDetail() {
  return (
    <>
      <section className="subsection">
        <div>
          <div className="label">Why</div>
          <p>
            In my freshman dorm, with heightened beds, 
            there was no convenient place to put my phone before sleeping unless I wanted to sleep directly on my phone.
            To fix this, I made a 3D printable holder that slides onto the bedframe and holds both my phone and AirPods.
    
          </p>
        </div>
        <div>
          <Embed src="https://www.youtube.com/embed/qXanApQC_pk?si=ikqRSGXULKCtzrXx" title="Bedframe phone holder demo" />
        </div>
      </section>

      <hr className="divider" />

      <section>
        <div className="label">Downloads</div>
        <DownloadList items={[
          { label: 'Phone holder',  href: '/downloadables/bedframe_phone_holder_only.stl',    sub: 'Just the phone holder (STL)' },
          { label: 'Example mount', href: '/downloadables/bedframe_phone_holder_example.stl', sub: 'Example bedframe mount (STL)' },
          { label: 'Both files',    href: '/downloadables/bedframe_phone_holder.zip',         sub: 'Bundle (ZIP)' },
        ]} />
      </section>
    </>
  );
}
