import findUserAndTeam from '~/helpers/find.user.and.team';
import prisma from '~/prisma/client';

export default async function handler(req, res) {
  const { team, user } = await findUserAndTeam(req, res);
  if (team) {
    res.status(400).send('You are already in a squad');
    return;
  }

  const findTeam = await prisma.$queryRaw`
SELECT "Team"."id" FROM "Team"
LEFT JOIN "User" ON ("Team"."id" = "User"."teamId")
WHERE "Team"."allowAutoAssign" = true
GROUP BY "Team"."id"
HAVING count("User"."id") < 5
ORDER BY count("User"."id")
LIMIT 1
`;

  if (findTeam.length) {
    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        teamId: findTeam[0].id,
      },
    });

    res.status(200).json({ success: true });
    return;
  }

  const { id } = await prisma.team.create({
    data: {
      name: `${user.name}'s Team`,
      score: 0,
      ownerId: user.id,
      allowAutoAssign: true,
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
