import moment from 'moment';
import { useSession } from 'next-auth/react';
import PropTypes from 'prop-types';
import React, { useCallback, useMemo, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
import { useDebouncedCallback } from 'use-debounce';

import GitHubIcon from '../../../../icons/github.inline.svg';

const Team = ({ info }) => {
  console.log(info);
  const session = useSession();

  const [contact, setContact] = useState('');
  const [teamName, setTeamName] = useState(info.team.name);
  const [randomJoin, setRandomJoin] = useState(info.team.allowAutoAssign);

  const invite = `${window.location.origin}/invite/${info.team.id}`;

  //
  const currentUser = useMemo(
    () => info.team.users.find((user) => user.email === session?.data?.user?.email),
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
            <a className="cta-btn-animation relative flex max-w-full cursor-pointer items-center justify-center leading-none">
              <svg
                className="cta-btn-animation-border xs:w-full"
                width="200"
                height="59"
                viewBox="0 0 268 59"
                fill="none"
              >
                <path d="M1 58V1H251.586L267 16.4142V58H1Z" stroke="white" strokeWidth="2" />
              </svg>

              <div className="absolute inset-0 flex items-center justify-center space-x-2.5">
                <span className="text-lg sm:text-[18px]">Invite people</span>
              </div>
            </a>
          </CopyToClipboard>
        )}

        {isCurrentUserNew && info.team.users.length > 1 && (
          <div onClick={leaveTeam}>
            <a className="cta-btn-animation relative flex max-w-full cursor-pointer items-center justify-center leading-none">
              <svg
                className="cta-btn-animation-border xs:w-full"
                width="200"
                height="59"
                viewBox="0 0 268 59"
                fill="none"
              >
                <path d="M1 58V1H251.586L267 16.4142V58H1Z" stroke="white" strokeWidth="2" />
              </svg>

              <div className="absolute inset-0 flex items-center justify-center space-x-2.5">
                <span className="text-lg sm:text-[18px]">Leave Team</span>
              </div>
            </a>
          </div>
        )}

        <div>
          <a
            href="/bonuses"
            className="cta-btn-animation relative flex max-w-full cursor-pointer items-center justify-center leading-none"
          >
            <svg
              className="cta-btn-animation-border xs:w-full"
              width="200"
              height="59"
              viewBox="0 0 268 59"
              fill="none"
            >
              <path d="M1 58V1H251.586L267 16.4142V58H1Z" stroke="white" strokeWidth="2" />
            </svg>

            <div className="absolute inset-0 flex items-center justify-center space-x-2.5">
              <span className="text-lg sm:text-[18px]">Bonuses</span>
            </div>
          </a>
        </div>
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
                <div className="ml-3 w-20 border border-gray-1 text-center">
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
                {/* Pass the value for Rank here */}
                Rank: <input type="text" name="rank" value={info.team.rank ?? 0} disabled />
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
          <div className="grid grid-cols-[230px_485px_230px_1fr] gap-x-5 border-b border-gray-2 pb-4 lg:grid-cols-[130px_390px_1fr_1fr] md:grid-cols-[130px_485px_230px_1fr] sm:grid-cols-[70px_150px_230px_1fr]">
            <span className="font-medium uppercase">#</span>
            <span className="font-medium uppercase">Name</span>
            <span className="font-medium uppercase">GitHub</span>
          </div>

          {info.team.users.map((user, index) => (
            <ul>
              <li className="grid grid-cols-[230px_485px_230px_1fr] gap-x-5 border-b border-gray-2 py-4 lg:grid-cols-[130px_390px_1fr_1fr] md:grid-cols-[130px_485px_230px_1fr] sm:grid-cols-[70px_150px_230px_1fr]">
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
                    <GitHubIcon className="h-[30px]" />
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
