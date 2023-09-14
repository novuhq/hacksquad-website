import { findClosestLive } from 'lib/events';
import getMetadata from 'lib/get-metadata';
import { SEO_DATA } from 'lib/seo-data';

async function Live() {
  const display = findClosestLive();

  return (
    <>
      {!display?.iframe ? (
        <div className="relative flex h-screen min-h-[600px] items-center justify-center">
          <span className="coming-soon-animation block py-4 text-center">
            Coming soon <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </div>
      ) : (
        <iframe
          style={{ flex: 1 }}
          src={display.iframe}
          allow="autoplay"
          frameBorder="0"
          allowfullscreen
        />
      )}
    </>
  );
}

export default Live;

export async function generateMetadata() {
  return getMetadata(SEO_DATA.INDEX);
}
