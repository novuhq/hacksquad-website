import moment from 'moment';
import { NextResponse } from 'next/server';

import findUserAndTeam from 'lib/find-user-and-team';

import prisma from '../../../../prisma/client';

export async function POST(request) {
  const body = await request.json();

  if (!body.id) {
    return NextResponse.json(
      {
        success: false,
        message: 'Invalid parameters!',
      },
      { status: 400 }
    );
  }

  const { user, team, admin } = await findUserAndTeam();

  // Checking if user exists
  if (!user) {
    return NextResponse.json(
      {
        success: false,
        message: "User doesn't exists!",
      },
      { status: 200 }
    );
  }

  // Checking if userID is matching
  if (user.id !== body.id) {
    return NextResponse.json(
      {
        success: false,
        message: 'You cannot proceed with this request!',
      },
      { status: 200 }
    );
  }

  // Checking if user was registered before 3 days i.e. the time period until when they can leave the team
  if (moment(user.createdAt).isBefore(moment().subtract(3, 'days'))) {
    return NextResponse.json(
      {
        success: false,
        message: 'You cannot leave the team anymore!',
      },
      { status: 200 }
    );
  }

  if (!team) {
    // Checking if team exists

    return NextResponse.json(
      {
        success: false,
        message: "Team doesn't exists!",
      },
      { status: 200 }
    );
  }

  // Exiting if team has only 1 members
  if (team.users.length === 1) {
    return NextResponse.json(
      {
        success: false,
        message: 'Cannot leave the team!',
      },
      { status: 200 }
    );
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

  return NextResponse.json(
    {
      success: true,
      message: 'Successfully left the team!',
    },
    { status: 200 }
  );
}
