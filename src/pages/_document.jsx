import Document, { Head, Html, Main, NextScript } from 'next/document';

const fontsBasePath = '/fonts';

const fontsPaths = [
  '/bugfast/bugfast-regular.woff2',
  '/input-mono/input-mono-regular.woff2',
  '/flood-std/flood-std-italic.woff2',
  '/roboto-mono/roboto-mono-medium.woff2',
];

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {fontsPaths.map((fontPath, index) => (
            <link
              rel="preload"
              href={`${fontsBasePath}${fontPath}`}
              as="font"
              type="font/woff2"
              crossOrigin="anonymous"
              key={index}
            />
          ))}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
