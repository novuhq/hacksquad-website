/* eslint-disable react/prop-types */
import Head from 'next/head';

const title = 'Hacksquad 2022 - Join Hacktoberfest with your squad';
const description =
  'Hacktoberfest: a month-long celebration of open-source projects, their maintainers, and the entire community of contributors.';

const Seo = ({ isRobotsNoindexPage }) => (
  <Head>
    <title>{title}</title>
    <link rel="icon" href="/favicon.png" type="image/png" />
    {isRobotsNoindexPage && <meta name="robots" content="noindex" />}
    {/* Open Graph */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content="/social-preview.jpg" />
    <meta property="og:type" content="website" />
    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
  </Head>
);

export default Seo;
