/* eslint-disable react/prop-types */
import Head from 'next/head';

const title = 'HackSquad 2023 🚀';
const description =
  'Contribute code, meet community members, participate in workshops, and win SWAG!';

const Seo = ({ isRobotsNoindexPage }) => (
  <Head>
    <title>{title}</title>
    <link rel="icon" href="/favicon/favicon.png" type="image/png" />
    {isRobotsNoindexPage && <meta name="robots" content="noindex" />}
    {/* Open Graph */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content="https://www.hacksquad.dev/images/social-previews/main.jpg" />
    <meta property="og:type" content="website" />
    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
  </Head>
);

export default Seo;
