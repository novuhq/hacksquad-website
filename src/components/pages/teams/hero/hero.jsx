import Link from 'next/link';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import GitHubIcon from '../../../../icons/github.inline.svg';

import DiscordIcon from './images/discord.inline.svg';
import TwitterIcon from './images/twitter.inline.svg';

import useModerator from '~/helpers/use.moderator';

const Hero = ({ team }) => {
  const moderator = useModerator();
  const [disqualified, setDisqualified] = useState(team.disqualified);
  const kick = (id) => async () => {
    if (confirm('Are you sure?')) {
      await fetch(`/api/kick?id=${id}`);
      window.location.reload();
    }
  };

  const changeTeamStatus = async () => {
    await fetch(`/api/disqualified?id=${team.id}`);
    setDisqualified(!disqualified);
  };

  const removePr = (id) => async () => {
    await fetch(`/api/remove-pr?id=${id}`);
    window.location.reload();
  };

  return (
    <section className="safe-paddings relative min-h-[600px]">
      <div className="container relative z-10 flex h-full flex-col items-center justify-center">
        <h1 className="font-mono text-xl font-bold uppercase leading-tight lg:text-[50px] md:text-[40px] xs:text-[32px]">
          {'>>'}
          {team.name}
        </h1>
        {moderator && (
          <a
            className="cta-btn-animation relative mt-3 flex h-[60px] max-w-full cursor-pointer items-center justify-center leading-none sm:mt-6"
            onClick={changeTeamStatus}
          >
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
              <span className="text-lg sm:text-[18px]">
                {!disqualified ? 'Disqualify Team' : 'Bring team back to the game'}
              </span>
            </div>
          </a>
        )}
        <div className="md:scrollbar-hidden mx-auto mt-20 max-w-[1220px] bg-black md:max-w-none md:overflow-x-auto">
          <div className="mt-5 md:min-w-[1080px] md:px-7 sm:px-4">
            <div className="grid grid-cols-[230px_485px_230px_1fr] gap-x-5 border-b border-gray-2 pb-4 lg:grid-cols-[130px_390px_1fr_1fr] md:grid-cols-[130px_485px_230px_1fr] sm:grid-cols-[70px_150px_230px_1fr]">
              <span className="font-medium uppercase">Place</span>
              <span className="font-medium uppercase">Name</span>
              {moderator && <span className="font-medium uppercase">Remove from team</span>}
            </div>
            {team.users.map((user, index) => (
              <ul>
                <li className="grid grid-cols-[230px_485px_230px_1fr] gap-x-5 border-b border-gray-2 py-4 lg:grid-cols-[130px_390px_1fr_1fr] md:grid-cols-[130px_485px_230px_1fr] sm:grid-cols-[70px_150px_230px_1fr]">
                  <span>{index + 1}</span>
                  <p className="truncate font-medium">{user.name}</p>
                  {moderator && (
                    <p className="truncate font-medium" onClick={kick(user.id)}>
                      Remove
                    </p>
                  )}
                </li>
              </ul>
            ))}
          </div>
        </div>

        <h2 className="mt-20 font-mono text-lg font-bold uppercase leading-tight lg:text-[25px] md:text-[25px] xs:text-[25px]">
          {'>>'}Latest Merged Pull Requests
        </h2>

        <div className="md:scrollbar-hidden mx-auto mt-20 max-w-[1220px] bg-black md:max-w-none md:overflow-x-auto">
          <div className="mt-5 md:min-w-[1080px] md:px-7 sm:px-4">
            <div className="grid grid-cols-[230px_485px_230px_1fr] gap-x-5 border-b border-gray-2 pb-4 lg:grid-cols-[130px_390px_1fr_1fr] md:grid-cols-[130px_485px_230px_1fr] sm:grid-cols-[70px_150px_230px_1fr]">
              <span className="font-medium uppercase">Place</span>
              <span className="font-medium uppercase">Name</span>
              <span className="font-medium uppercase">Pull</span>
              {moderator && <span className="font-medium uppercase">Remove Pull</span>}
            </div>
            {JSON.parse(team.prs || '[]').map((pr, index) => (
              <ul>
                <li className="grid grid-cols-[230px_485px_230px_1fr] gap-x-5 border-b border-gray-2 py-4 lg:grid-cols-[130px_390px_1fr_1fr] md:grid-cols-[130px_485px_230px_1fr] sm:grid-cols-[70px_150px_230px_1fr]">
                  <span>{index + 1}</span>
                  <p className="truncate font-medium">
                    {pr.status === 'DELETED' && (
                      <span className="font-bold" style={{ color: 'red' }}>
                        DELETED:{' '}
                      </span>
                    )}
                    {pr.title}
                  </p>
                  <p className="font-medium">
                    <a href={pr.url} target="_blank" rel="noreferrer">
                      <GitHubIcon className="h-[30px]" />
                    </a>
                  </p>
                  {moderator && (
                    <p className="cursor-pointer truncate font-medium" onClick={removePr(pr.id)}>
                      {pr.status === 'DELETED' ? 'Return' : 'Remove'}
                    </p>
                  )}
                </li>
              </ul>
            ))}
          </div>
        </div>

        <Link href="/leaderboard" passHref>
          <a
            className="cta-btn-animation relative mt-10 flex h-[60px] max-w-full items-center justify-center leading-none sm:mt-6"
            href="/leaderboard"
          >
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
              <span className="text-lg sm:text-[18px]">Go to Leaderboard</span>
            </div>
          </a>
        </Link>

        <div className="mt-20 flex flex-col items-center md:bottom-12">
          <span className="font-mono uppercase">Let’s connect</span>
          <div className="flex items-center space-x-8">
            <a
              className="group mt-5"
              href="https://twitter.com/HackSquadDev"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon className="h-[26px] transition-opacity duration-200 group-hover:opacity-80" />
            </a>

            <a
              className="group mt-5"
              href="https://discord.gg/vcqkXgT3Xr"
              target="_blank"
              rel="noreferrer"
            >
              <DiscordIcon className="h-[26px] transition-opacity duration-200 group-hover:opacity-80" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  team: PropTypes.object,
};

export default Hero;
