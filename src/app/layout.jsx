import { Inter } from 'next/font/google';

import Footer from 'components/shared/footer';
import Header from 'components/shared/header';

import 'styles/main.css';

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
    <body>
      <div className="relative flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer className="mt-auto" />
      </div>
    </body>
  </html>
);

export default RootLayout;
