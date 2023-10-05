import prisma from '~/prisma/client';

export default async function handler(req, res) {
  const teams = await prisma.team.findMany({
    orderBy: {
      score: 'desc',
    },
    where: {
      disqualified: false,
    },
    select: {
      id: true,
      name: true,
      score: true,
      bonus: true,
      slug: true,
    },
  });

  const newTeams = teams.reduce(
    (all, current) => {
      if ((current.score || 0) - (current.bonus || 0) <= 0) {
        all.withoutPRS.push(current);
      } else {
        all.withPRS.push(current);
      }

      return all;
    },
    { withoutPRS: [], withPRS: [] }
  );

  res.status(200).json({ teams: [...newTeams.withPRS, ...newTeams.withoutPRS] });
}
