import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useDebouncedCallback } from 'use-debounce';

import GitHubIcon from '../../../../icons/github.inline.svg';

const Team = ({ info }) => {
  const [teamName, setTeamName] = useState(info.team.name);
  const [randomJoin, setRandomJoin] = useState(info.team.allowAutoAssign);
  const [contact, setContact] = useState('');
  const invite = `${window.location.origin}/invite/${info.team.id}`;
  const sendMessage = useCallback(async () => {
    fetch('/api/send-message', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ contact }),
      method: 'POST',
    });
    alert('Message sent!');
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

  return (
    <>
      {info.team.users.length < 5 && (
        <CopyToClipboard text={invite} onCopy={() => alert('Copied to clipboard')}>
          <a className="cta-btn-animation relative mt-3 flex h-[60px] max-w-full cursor-pointer items-center justify-center leading-none sm:mt-6">
            <svg
              className="cta-btn-animation-border xs:w-full"
              width="268"
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
                  <button type="button" style={{ border: 0, padding: 0 }} onClick={sendMessage}>
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
                <p className="truncate font-medium">{user.name}</p>
                <p className="font-medium">
                  <a href={`https://github.com/${user.handle}`} target="_blank" rel="noreferrer">
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
