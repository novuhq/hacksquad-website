'use client';

import moment from 'moment';
import { useSession } from 'next-auth/react';
import PropTypes from 'prop-types';
import React, { useCallback, useMemo, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
import { useDebouncedCallback } from 'use-debounce';

import Button from 'components/shared/button';
import githubIcon from 'svgs/github.svg';

const Team = ({ info }) => {
  const session = useSession();
  const [contact, setContact] = useState('');
  const [teamName, setTeamName] = useState(info.team.name);
  const [randomJoin, setRandomJoin] = useState(info.team.allowAutoAssign);

  const invite = `${window.location.origin}/invite/${info.team.id}`;

  const currentUser = useMemo(
    () => info.team.users.find((user) => user?.email === session?.data?.user?.email),
    [info.team.users, session?.data?.user?.email]
  );
  const isCurrentUserNew = moment(currentUser.createdAt).isAfter(moment().subtract(3, 'days'));

  const sendMessage = useCallback(async () => {
    fetch('/api/send-message', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ contact }),
      method: 'POST',
    });
    toast.success('Message sent!');
    setContact('');
  }, [contact]);

  const debounce = useDebouncedCallback(async (name, allowAutoAssign) => {
    await fetch('/api/change-team', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        name,
        allowAutoAssign,
      }),
    });
  }, 500);

  const leaveTeam = async () => {
    if (!currentUser) return;

    if (confirm('Are you sure want to leave the team?')) {
      try {
        const response = await fetch('/api/leave-team', {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify({
            id: currentUser.id,
          }),
        }).then((res) => res.json());

        if (response.success === true) {
          window.location.reload();
        } else {
          toast.error(response.message);
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <>
      <div className="gapy-y-1 mt-6 flex flex-wrap justify-center gap-x-5">
        {info.team.users.length < 5 && (
          <CopyToClipboard text={invite} onCopy={() => toast.success('Copied to Clipboard')}>
            <Button theme="fill-white" size="md">
              Invite people
            </Button>
          </CopyToClipboard>
        )}

        {isCurrentUserNew && info.team.users.length > 1 && (
          <Button theme="fill-white" size="md" onClick={leaveTeam}>
            Leave Team
          </Button>
        )}

        <Button to="/bonuses" theme="fill-white" size="md">
          Bonuses
        </Button>

        {!!info?.winners?.length && (
          <Button to="/winner" theme="fill-white" size="md">
            Claim Prizes 🎉
          </Button>
        )}
      </div>

      <div className="md:scrollbar-hidden mx-auto mt-20 max-w-[1220px] bg-black md:max-w-none md:overflow-x-auto">
        <div className="mt-5 md:min-w-[1080px] md:px-7 sm:px-4">
          <div className="mb-10">
            {info.team.users.length > 1 && (
              <div className="mb-5 flex">
                <div>Send a message to your squad: </div>
                <div className="ml-3 flex-1">
                  <input
                    type="text"
                    name="score"
                    className="w-full"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                  />
                </div>
                <div className="border-gray-1 ml-3 w-20 border text-center">
                  <button
                    disabled={contact.length <= 2}
                    type="button"
                    style={{ border: 0, padding: 0 }}
                    onClick={sendMessage}
                  >
                    Send
                  </button>
                </div>
              </div>
            )}
            <div className="mb-5">
              <label>
                Squad name:{' '}
                <input
                  className="bg-black"
                  disabled={!info.admin}
                  type="text"
                  name="name"
                  value={teamName}
                  onChange={(e) => {
                    setTeamName(e.target.value);
                    debounce(e.target.value, randomJoin);
                  }}
                />
              </label>
            </div>
            <div className="mb-5">
              <label>
                Score: <input type="text" name="score" value={info.team.score} disabled />
              </label>
            </div>
            <div>
              <label>
                Allow random people to join my team:{' '}
                <input
                  disabled={!info.admin}
                  type="checkbox"
                  name="random"
                  checked={randomJoin}
                  onClick={() => {
                    setRandomJoin(!randomJoin);
                    debounce(teamName, !randomJoin);
                  }}
                />
              </label>
            </div>
          </div>
          <div className="border-gray-2 grid grid-cols-[230px_485px_230px_1fr] gap-x-5 border-b pb-4 lg:grid-cols-[130px_390px_1fr_1fr] md:grid-cols-[130px_485px_230px_1fr] sm:grid-cols-[70px_150px_230px_1fr]">
            <span className="font-medium uppercase">#</span>
            <span className="font-medium uppercase">Name</span>
            <span className="font-medium uppercase">GitHub</span>
          </div>

          {info.team.users.map((user, index) => (
            <ul>
              <li className="border-gray-2 grid grid-cols-[230px_485px_230px_1fr] gap-x-5 border-b py-4 lg:grid-cols-[130px_390px_1fr_1fr] md:grid-cols-[130px_485px_230px_1fr] sm:grid-cols-[70px_150px_230px_1fr]">
                <span>{index + 1}</span>
                <p className="truncate font-medium">
                  {!!user.disqualified && (
                    <span className="font-bold" style={{ color: 'red' }}>
                      DISQUALIFIED:{' '}
                    </span>
                  )}
                  {user.name}
                </p>
                <p className="font-medium">
                  <a
                    href={`https://github.com/${user.handle}`}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${user.name}'s Github (opens in new link)`}
                  >
                    <img src={githubIcon} width={30} height={30} alt="" loading="lazy" />
                  </a>
                </p>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};

Team.propTypes = {
  info: PropTypes.object,
};

export default Team;
