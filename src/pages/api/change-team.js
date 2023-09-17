import findUserAndTeam from '~/helpers/find.user.and.team';
import prisma from '~/prisma/client';

export default async function handler(req, res) {
  if (!req.body.name || req.body.name.length < 2 || !req.body.hasOwnProperty('allowAutoAssign')) {
    res.status(400).send('Invalid parameters');
    return;
  }
  const { admin, team } = await findUserAndTeam(req, res);
  if (!admin && !team) {
    res.status(400).send('Invalid call');
    return;
  }

  await prisma.team.update({
    where: {
      id: team.id,
    },
    data: {
      name: req.body.name,
      allowAutoAssign: !!req.body.allowAutoAssign,
    },
  });

  res.status(200).send('changed');
}
