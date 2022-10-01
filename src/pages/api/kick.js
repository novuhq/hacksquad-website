import findUserAndTeam from '~/helpers/find.user.and.team';
import prisma from '~/prisma/client';

export default async function handler(req, res) {
  const { user } = await findUserAndTeam(req, res);
  if (!user?.moderator || !req?.query?.id) {
    return;
  }

  const data = await prisma.user.findUnique({
    where: {
      id: req.query.id,
    },
    select: {
      team: true,
    },
  });

  const users = await prisma.user.findMany({
    where: {
      teamId: data.team.id,
    },
  });

  // not only one in the team
  if (users.length > 1) {
    const randomUser = users.find((u) => u.id !== req?.query.id);
    await prisma.team.update({
      where: {
        id: data.team.id,
      },
      data: {
        ownerId: randomUser.id,
      },
    });

    await prisma.user.update({
      where: {
        id: req.query.id,
      },
      data: {
        teamId: null,
      },
    });

    res.json({ finish: true });
    return;
  }

  await prisma.team.delete({
    where: {
      id: data.team.id,
    },
  });

  res.json({ finish: true });
}
