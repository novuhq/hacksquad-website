import { Inter } from 'next/font/google';
import 'styles/global.css';

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// eslint-disable-next-line react/prop-types
const RootLayout = ({ children }) => (
  <html lang="en" className={inter.variable}>
    <head />
    <body>{children}</body>
  </html>
);

export default RootLayout;
