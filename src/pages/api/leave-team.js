import moment from 'moment';

import findUserAndTeam from '~/helpers/find.user.and.team';
import prisma from '~/prisma/client';

export default async function handler(req, res) {
  if (!req.body.id) {
    res.status(400).send({ success: false, message: 'Invalid parameters!' });
    return;
  }

  const { user, team, admin } = await findUserAndTeam(req, res);

  // Checking if user exists
  if (!user) {
    res.status(200).json({ success: false, message: "User doesn't exists!" });
    return;
  }

  // Checking if userID is matching
  if (user.id !== req.body.id) {
    res.status(200).json({ success: false, message: 'You cannot proceed with this request!' });
    return;
  }

  // Checking if user was registered before 3 days i.e. the time period until when they can leave the team
  if (moment(user.createdAt).isBefore(moment().subtract(3, 'days'))) {
    res.status(200).json({ success: false, message: 'You cannot leave the team anymore!' });
    return;
  }

  if (!team) {
    // Checking if team exists
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
  if (admin) {
    const randomUser = team.users.find((u) => u.id !== user.id);

    await prisma.team.update({
      where: { id: team.id },
      data: { ownerId: randomUser.id },
    });
  }

  res.status(200).json({ success: true, message: 'Successfully left the team!' });
}
