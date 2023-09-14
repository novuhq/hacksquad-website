// import mailchimp from '@mailchimp/mailchimp_marketing';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { getServerSession } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

import prisma from '../../prisma/client';

if (!process.env.GITHUB_ID || !process.env.GITHUB_SECRET) {
  throw new Error('The GITHUB_ID and GITHUB_SECRET environment variables are required.');
}

// TODO: add mailchimp integration
// mailchimp.setConfig({
//   apiKey: process.env.MAILCHIMP_KEY,
//   server: process.env.MAILCHIMP_SERVER,
// });

export const authOptions = (req) => ({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ user, account, token, profile }) {
      if (req?.query?.colorSchema) {
        token.colorSchema = req.query.colorSchema;
      }

      if (user) {
        token.uid = user.id;
        token.colorSchema = user.colorSchema;
      }

      if (account) {
        token.access_token = account.access_token;
      }
      if (profile) {
        token.githubHandle = profile.login;
      }

      // >>>>>>> main

      return token;
    },

    async session({ session, token }) {
      if (session?.user) {
        session.user.colorSchema = token.colorSchema;
        session.user.userId = token.uid;
        session.user.githubHandle = token.githubHandle;
        // >>>>>>> main
      }

      return session;
    },
  },
  events: {
    async signIn({ user, account }) {
      // Get user email if we don't have it in public emails
      const { login } = await fetch('https://api.github.com/user', {
        headers: {
          Authorization: `Bearer ${account.access_token}`,
        },
      }).then((res) => res.json());

      // TODO: comment out these lines after adding mailchimp integration
      //     const getInvite = req?.cookies?.invite
      //       ? await prisma.user.findUnique({
      //           where: {
      //             email: Buffer.from(req?.cookies?.invite, 'base64').toString(),
      //           },
      //         })
      //       : undefined;

      //     if (user.email) {
      //       const [name, lastName] = user.name.split(' ');
      //       await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST, {
      //         email_address: user.email,
      //         status: 'subscribed',
      //         skip_merge_validation: true,
      //         merge_fields: {
      //           FNAME: name,
      //           LNAME: lastName,
      //         },
      //       });
      //     }
      //   },

      await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          handle: login,
        },
      });
    },
  },
});

// Helper function to get session without passing config every time
// https://next-auth.js.org/configuration/nextjs#getserversession
export function auth(...args) {
  return getServerSession(...args, authOptions());
}
