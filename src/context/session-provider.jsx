'use client';

import { SessionProvider } from 'next-auth/react';

export default function NextAuthSessionProvider({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}
