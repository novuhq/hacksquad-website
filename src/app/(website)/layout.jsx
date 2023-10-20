import { Inter } from 'next/font/google';
import PlausibleProvider from 'next-plausible';

import Footer from 'components/shared/footer';
import Header from 'components/shared/header';
import NextAuthSessionProvider from 'context/session-provider';
import 'styles/main.css';
import { auth } from 'lib/auth';

// import Banner from '../../components/shared/banner';

const inter = Inter({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// eslint-disable-next-line react/prop-types
export default async function RootLayout({ children }) {
  const session = await auth();

  return (
    <html lang="en" className={inter.variable}>
      <head />
      <body>
        <NextAuthSessionProvider>
          <PlausibleProvider domain="hacksquad.dev">
            <div className="relative flex min-h-screen flex-col">
              {/* <Banner /> */}
              <Header
                isAuthorized={!!session}
                subscriberId={session?.user?.githubHandle || undefined}
              />
              <main className="flex-1">{children}</main>
              <Footer isAuthorized={!!session} />
            </div>
          </PlausibleProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
