import findUserAndTeam from '~/helpers/find.user.and.team';
import prisma from '~/prisma/client';

export default async function handler(req, res) {
  if (!req.body.name || req.body.name.length < 2) {
    res.status(400).send('You must specify the squad name');
    return;
  }
  const { team, user } = await findUserAndTeam(req, res);
  if (team) {
    res.status(400).send('You are already in a squad');
    return;
  }

  const { id } = await prisma.team.create({
    data: {
      name: req.body.name,
      score: 0,
      ownerId: user.id,
      allowAutoAssign: false,
    },
  });

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      teamId: id,
    },
  });

  res.status(200).json({ success: true });
}
