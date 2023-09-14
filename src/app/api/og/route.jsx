import { ImageResponse } from 'next/server';

import getShortName from 'lib/get-short-name';

export const runtime = 'edge';

const colorSchemeMap = {
  1: '/images/social-previews/ticket-1.png',
  2: '/images/social-previews/ticket-2.png',
  3: '/images/social-previews/ticket-3.png',
  4: '/images/social-previews/ticket-4.png',
  5: '/images/social-previews/ticket-5.png',
  6: '/images/social-previews/ticket-6.png',
};

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    const id = searchParams.get('id');
    const handle = searchParams.get('handle');
    const name = searchParams.get('name') !== 'null' ? searchParams.get('name') : handle;
    const shortName = getShortName(name);
    const color = searchParams.get('colorSchema') || '1';
    const textColor =
      color === '1'
        ? '#5085DC'
        : color === '2'
        ? '#975EEA'
        : color === '3'
        ? '#E5A659'
        : color === '4'
        ? '#37D7AF'
        : color === '5'
        ? '#FE9557'
        : '#DF6DFB';

    const imageData = await fetch(
      new URL(process.env.NEXT_PUBLIC_DEFAULT_SITE_URL + colorSchemeMap[color], import.meta.url)
    ).then((res) => res.arrayBuffer());

    const fontData = await fetch(
      new URL(
        `${process.env.NEXT_PUBLIC_DEFAULT_SITE_URL}/fonts/jetbrains-mono/jetbrains-mono-extralight.ttf`,
        import.meta.url
      )
    ).then((res) => res.arrayBuffer());

    return new ImageResponse(
      (
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            padding: '30px',
            backgroundColor: '#0e0e0e',
          }}
        >
          <img
            style={{
              margin: '0 auto',
            }}
            width="1010"
            src={imageData}
            alt="Ticket layout"
          />
          <div
            style={{
              position: 'absolute',
              bottom: '60px',
              left: '150px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <p
                style={{
                  margin: '0',
                  color: '#fff',
                  fontSize: '56px',
                  fontWeight: 500,
                }}
              >
                {shortName}
              </p>
              <p
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: '10px',
                  color: textColor,
                  fontSize: '24px',
                  lineHeight: '1',
                }}
              >
                <svg
                  style={{
                    marginRight: '10px',
                  }}
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 0C5.373 0 0 5.508 0 12.304c0 5.436 3.438 10.048 8.206 11.675.6.114.82-.267.82-.592 0-.293-.01-1.263-.016-2.29-3.338.743-4.043-1.453-4.043-1.453-.546-1.422-1.332-1.8-1.332-1.8-1.089-.763.082-.748.082-.748 1.205.087 1.84 1.268 1.84 1.268 1.07 1.881 2.807 1.337 3.491 1.023.108-.795.42-1.338.762-1.645-2.665-.311-5.467-1.366-5.467-6.08 0-1.344.469-2.442 1.236-3.303-.124-.31-.535-1.562.117-3.256 0 0 1.007-.331 3.3 1.26A11.23 11.23 0 0 1 12 5.95c1.02.005 2.047.141 3.006.414 2.29-1.592 3.297-1.261 3.297-1.261.653 1.694.242 2.946.118 3.256.769.861 1.235 1.959 1.235 3.302 0 4.726-2.808 5.766-5.48 6.071.43.382.814 1.13.814 2.279 0 1.646-.014 2.97-.014 3.376 0 .327.216.711.825.59C20.566 22.35 24 17.738 24 12.304 24 5.508 18.627 0 12 0Z"
                  />
                </svg>
                {handle}
              </p>
            </div>
          </div>
          <div
            style={{
              position: 'absolute',
              top: '0',
              bottom: '0',
              right: '-27%',
              display: 'flex',
              textAlign: 'center',
              transform: 'rotate(270deg)',
            }}
          >
            <p
              style={{
                margin: '0',
                color: textColor,
                fontSize: '44px',
                fontWeight: 300,
                fontFamily: 'JetBrainsMono',
              }}
            >
              No {`${id}`.slice(0, 10)}
            </p>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'JetBrainsMono',
            data: fontData,
            style: 'normal',
          },
        ],
      }
    );
  } catch (e) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
