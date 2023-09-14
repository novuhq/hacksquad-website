import NextAuth from 'next-auth';

import { createOptions } from 'lib/auth';

async function handler(req, res) {
  return await NextAuth(req, res, createOptions(req));
}

export { handler as GET, handler as POST };
