import { unstable_getServerSession } from 'next-auth/next';

import { authOptions } from '../src/pages/api/auth/[...nextauth]';

import prisma from '~/prisma/client';

export default async function findUserAndTeam(req, res) {
  const partialUser = await unstable_getServerSession(req, res, authOptions);
  if (!partialUser) {
    return { user: null, team: null, admin: false };
  }
  const user = await prisma.user.findUnique({ where: { email: partialUser.user.email } });
  if (!user.teamId) {
    return { user, team: null, admin: false };
  }
  return {
    user,
    team: await prisma.team.findUnique({
      where: { id: user.teamId },
      include: {
        users: true,
      },
    }),
    get admin() {
      return this.team.ownerId === user.id;
    },
  };
}
