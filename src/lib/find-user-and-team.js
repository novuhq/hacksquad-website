import prisma from '../../prisma/client';

import { auth } from './auth';

export default async function findUserAndTeam(sessionUser) {
  const partialUser = (await auth()) || sessionUser;

  if (!partialUser) {
    return { user: null, team: null, admin: false };
  }
  const { social, winners, ...user } = await prisma.user.findUnique({
    where: { email: partialUser.user.email },
    include: {
      social: true,
      winners: {
        where: {
          claimed: null,
          lastDateClaim: {
            gte: new Date(),
          },
        },
      },
    },
  });

  const twitter = !!social.find((p) => p.type === 'TWITTER');
  const devto = !!social.find((p) => p.type === 'DEVTO');
  if (!user.teamId) {
    return { user, twitter, winners, devto, team: null, admin: false };
  }

  const team = await prisma.team.findUnique({
    where: { id: user.teamId },
    include: {
      users: true,
    },
  });

  team.users = team?.users?.map(({ email, ...all }) => ({
    ...all,
    email: user.id === all.id ? email : undefined,
  }));

  return {
    twitter,
    devto,
    user,
    winners,
    team,
    get admin() {
      return this.team.ownerId === user.id;
    },
  };
}
