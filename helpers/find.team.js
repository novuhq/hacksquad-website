import prisma from '~/prisma/client';

export default async function findTeam(id) {
  const team = await prisma.team.findUnique({
    where: { slug: id },
    include: {
      users: true,
    },
  });

  const prIds = JSON.parse(team.prs || '[]').map((p) => p.id);
  const prStatuses = await prisma.report.findMany({
    where: {
      pr: {
        in: prIds,
      },
    },
  });

  team.prs = JSON.stringify(
    JSON.parse(team.prs || '[]').map((p) => ({
      ...p,
      status: prStatuses.find((ps) => ps.pr === p.id)?.status,
    }))
  );

  return team;
}
