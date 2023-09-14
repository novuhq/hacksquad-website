import Airtable from 'airtable';
import moment from 'moment';
import { NextResponse } from 'next/server';
import { object, string, array } from 'yup';

import findUserAndTeam from 'lib/find-user-and-team';

import prisma from '../../../../prisma/client';

const validation = object({
  type: array().required(),
  first_name: string().required(),
  last_name: string().required(),
  email: string().required().email(),
  phone_number: string()
    .required()
    .matches(
      /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/,
      'Is not in correct format'
    ),
  shipping_address1: string().required(),
  shipping_city: string().required(),
  shipping_state: string().required(),
  shipping_zip: string().required(),
  shipping_country: string().required(),
  shirt_size: string().required().oneOf(['Small', 'Medium', 'Large', 'X-Large', '2X-Large']),
});

const airTable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY });

export async function POST(request) {
  const body = await request.json();

  if (!validation.validateSync(body)) {
    return NextResponse.json(
      {
        invalid: true,
      },
      { status: 400 }
    );
  }
  const {
    winners,
    user: { handle },
  } = await findUserAndTeam();
  if (!winners || !winners.length) {
    return NextResponse.json(
      {
        invalid: true,
      },
      { status: 400 }
    );
  }

  const selectedWins = body.type.filter((p) => winners.map((w) => w.id).indexOf(p) > -1);
  if (!selectedWins.length || body.type.length !== selectedWins.length) {
    return NextResponse.json(
      {
        invalid: true,
      },
      { status: 400 }
    );
  }

  const winnersMap = selectedWins.map((s) => winners.find((w) => w.id === s));

  await Promise.all(
    winnersMap.map(async (win) => {
      await airTable
        .base(process.env.AIRTABLE_BASE)
        .table('Hacksquad 2022')
        .create({
          first_name: body.first_name,
          last_name: body.last_name,
          email: body.email,
          phone_number: body.phone_number,
          shipping_address1: body.shipping_address1,
          shipping_address2: body.shipping_address2,
          shipping_city: body.shipping_city,
          shipping_state: body.shipping_state,
          shipping_zip: body.shipping_zip,
          shipping_country: body.shipping_country,
          shirt_size: body.shirt_size,
          company_name: win.type === 'NOVU' ? 'Novu' : 'HackSquad',
          variation: win.type,
          'github-handle': handle,
        });

      await prisma.winners.update({
        where: {
          id: win.id,
        },
        data: {
          claimed: moment().toDate(),
        },
      });
    })
  );

  NextResponse.json(
    {
      invalid: false,
    },
    { status: 400 }
  );
}
