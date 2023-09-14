import NextAuth from 'next-auth';

import { authOptions } from 'lib/auth';

export default async (req, res) => NextAuth(req, res, authOptions(req));
