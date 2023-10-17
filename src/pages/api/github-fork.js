import findGitHubToken from '~/helpers/find.github.token';
import findUserAndTeam from '~/helpers/find.user.and.team';
import prisma from '~/prisma/client';

const list = [
  'novuhq/novu',
  'tooljet/tooljet',
  'wasp-lang/wasp',
  'teamhanko/hanko',
  'CrowdDotDev/crowd.dev',
  'clickvote/clickvote',
];
export default async function handler(req, res) {
  const { user } = await findUserAndTeam(req, res);
  if (!req?.body?.library || !list.includes(req?.body?.library) || !user) {
    res.json({ finish: false });
    return;
  }

  const exists = await prisma.forkGiven.findFirst({
    where: {
      userId: user.id,
      library: req.body.library,
    },
  });

  if (exists) {
    res.json({ finish: false });
    return;
  }

  const accessToken = await findGitHubToken(user.id);
  const load = await (
    await fetch(`https://api.github.com/repos/${req?.body?.library}/forks`, {
      method: 'GET',
      headers: {
        Authorization: `token ${accessToken}`,
        Accept: 'application/vnd.github.v3+json',
      },
    })
  ).json();

  if (!load.find((p) => p.full_name.indexOf(user.handle) > -1)) {
    res.json({ finish: false });
    return;
  }

  await prisma.forkGiven.create({
    data: {
      userId: user.id,
      library: req.body.library,
    },
  });

  res.json({ finish: true });
}
