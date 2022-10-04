import findUser from '~/helpers/find.user';
import prisma from '~/prisma/client';

export default async function handler(req, res) {
  if (!req.body.id) {
    res.status(400).send({ success: false, message: 'Invalid parameters!' });
    return;
  }

  // Finding user and team
  const user = await findUser(req.body.id);
  if (!user) {
    res.status(200).json({ success: false, message: "User doesn't exists!" });
    return;
  }

  const team = await prisma.team.findUnique({
    where: { id: user.teamId },
    include: { users: true },
  });
  if (!team) {
    res.status(200).json({ success: false, message: "Team doesn't exists!" });
    return;
  }

  // Exiting if team has only 1 members
  if (team.users.length === 1) {
    res.status(200).json({ success: false, message: 'Cannot leave the team!' });
    return;
  }

  // Updating user i.e. removing from team
  await prisma.user.update({
    where: { id: user.id },
    data: { teamId: null },
  });

  // If user is admin, make someone else admin after current user leaves the team
  if (team.ownerId === user.id) {
    const randomUser = team.users.find((u) => u.id !== user.id);

    await prisma.team.update({
      where: { id: team.id },
      data: { ownerId: randomUser.id },
    });
  }

  res.status(200).json({ success: true, message: 'Successfully left the team!' });
}
