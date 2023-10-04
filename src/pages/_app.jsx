import 'old-styles/main.css';
import PlausibleProvider from 'next-plausible';

// eslint-disable-next-line react/prop-types
const MyApp = ({ Component, pageProps }) => (
  <PlausibleProvider domain="hacksquad.dev">
    <Component {...pageProps} />
  </PlausibleProvider>
);

export default MyApp;
