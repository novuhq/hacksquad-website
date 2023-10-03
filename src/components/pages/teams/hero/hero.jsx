import Link from 'next/link';
import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';

import GitHubIcon from 'icons/github.inline.svg';

import RepositoryStatus from '~/helpers/repository.status';
import useModerator from '~/helpers/use.moderator';

const Hero = ({ team }) => {
  const { moderator, cleaner } = useModerator();

  const [disqualified, setDisqualified] = useState(team.disqualified);
  const [pullRequests] = useState(JSON.parse(team?.prs || '[]'));
  const changeToRepository = useMemo(
    () =>
      pullRequests
        .map((p) => ({
          ...p,
          url: new URL(p.url).pathname.split('/').slice(0, 3).join('/'),
        }))
        .filter((current, index, all) => {
          const firstIndex = all.findIndex((item) => item.url === current.url);
          return firstIndex === index;
        }),
    [pullRequests]
  );

  const kick = (id, name) => async () => {
    if (confirm(`Are you sure want to kick "${name}" from the team?`)) {
      await fetch(`/api/kick?id=${id}`);
      window.location.reload();
    }
  };

  const changeTeamStatus = async () => {
    await fetch(`/api/disqualified?id=${team.id}`);
    setDisqualified(!disqualified);
  };

  return (
    <section className="safe-paddings relative">
      <div className="container relative z-10 flex h-full flex-col items-center justify-center py-16 sm:px-0">
        <h1 className="font-titles text-60 font-semibold leading-none md:text-42">{team.name}</h1>

        {moderator && (
          <button
            className="cta-btn-animation relative mt-10 flex h-[60px] max-w-full cursor-pointer items-center justify-center leading-none sm:mt-6"
            type="button"
            onClick={changeTeamStatus}
          >
            <svg
              className="cta-btn-animation-border xs:w-full"
              width="268"
              height="59"
              viewBox="0 0 268 59"
              fill="none"
              aria-hidden
            >
              <path d="M1 58V1H251.586L267 16.4142V58H1Z" stroke="white" strokeWidth="2" />
            </svg>

            <div className="absolute inset-0 flex items-center justify-center space-x-2.5">
              <span className="text-lg sm:text-[18px]">
                {!disqualified ? 'Disqualify Team' : 'Bring team back to the game'}
              </span>
            </div>
          </button>
        )}

        <div className="md:scrollbar-hidden mx-auto mt-20 max-w-[1220px] bg-black md:max-w-none md:overflow-x-auto">
          <div className="mt-5 md:min-w-[1080px] md:px-7 sm:px-4">
            <div className="grid grid-cols-[175px_420px_175px_175px_1fr_1fr] gap-x-5 border-b border-gray-2 pb-4 lg:grid-cols-[130px_390px_1fr_1fr_1fr_1fr] md:grid-cols-[130px_485px_230px_1fr_1fr_1fr] sm:grid-cols-[150px_80px_120px_1fr]">
              <span className="text-18 font-medium uppercase leading-normal text-gray-1 md:text-18 sm:hidden">
                Place
              </span>
              <span className="text-18 font-medium uppercase leading-normal text-gray-1 md:text-18">
                Name
              </span>
              <span
                className={`text-18 font-medium uppercase leading-normal text-gray-1 md:text-18 ${
                  moderator && 'sm:hidden'
                }`}
              >
                GitHub
              </span>
              {moderator && (
                <span className="text-18 font-medium uppercase leading-normal text-gray-1 md:text-18">
                  Remove
                </span>
              )}
              {(moderator || cleaner) && (
                <span className="text-18 font-medium uppercase leading-normal text-gray-1 md:text-18">
                  Score
                </span>
              )}
            </div>

            <ul>
              {team.users.map((user, index) => (
                <li
                  key={user.handle}
                  className="grid grid-cols-[175px_420px_175px_175px_1fr_1fr] gap-x-5 border-b border-gray-2 py-4 lg:grid-cols-[130px_390px_1fr_1fr_1fr_1fr] md:grid-cols-[130px_485px_230px_1fr_1fr_1fr] sm:grid-cols-[150px_80px_120px]"
                >
                  <span className="sm:hidden">{index + 1}</span>
                  <p className="truncate font-medium">
                    {!!user.disqualified && (
                      <span className="font-bold" style={{ color: 'red' }}>
                        DISQUALIFY:{' '}
                      </span>
                    )}{' '}
                    {user.name}
                  </p>
                  <p className={`font-medium ${moderator && 'sm:hidden'}`}>
                    <a href={`https://github.com/${user.handle}`} target="_blank" rel="noreferrer">
                      <GitHubIcon className="h-[30px]" />
                    </a>
                  </p>

                  {moderator && (
                    <p
                      className="cursor-pointer truncate font-medium"
                      onClick={kick(user.id, user.name)}
                    >
                      Remove
                    </p>
                  )}

                  {(moderator || cleaner) && (
                    <p className="cursor-pointer truncate text-center font-medium">{user.score}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h2 className="mt-20 font-titles text-48 font-semibold leading-1.125 md:text-42">
          Contributed to repositories (TOTAL PR: {pullRequests.length})
        </h2>

        <div className="md:scrollbar-hidden mx-auto mt-20 max-w-[1220px] bg-black md:max-w-none md:overflow-x-auto">
          <div className="mt-5 md:min-w-[1080px] md:px-7 sm:px-4">
            <div className="grid grid-cols-[230px_485px_230px_1fr] gap-x-5 border-b border-gray-2 pb-4 lg:grid-cols-[130px_390px_1fr_1fr] md:grid-cols-[130px_485px_230px_1fr] sm:grid-cols-[170px_50px_100px]">
              <span className="text-18 font-medium uppercase leading-normal text-gray-1 md:text-18 sm:hidden">
                Place
              </span>
              <span className="text-18 font-medium uppercase leading-normal text-gray-1 md:text-18">
                Name
              </span>
              <span className="text-18 font-medium uppercase leading-normal text-gray-1 md:text-18">
                Repository
              </span>

              {(moderator || cleaner) && (
                <span className="font-medium uppercase">Repository Status</span>
              )}
            </div>

            <ul>
              {changeToRepository.map((pr, index) => (
                <li
                  key={pr.url}
                  className="grid grid-cols-[230px_485px_230px_1fr] gap-x-5 border-b border-gray-2 py-4 lg:grid-cols-[130px_390px_1fr_1fr] md:grid-cols-[130px_485px_230px_1fr] sm:grid-cols-[170px_50px_100px]"
                >
                  <span className="sm:hidden">{index + 1}</span>
                  <p className="truncate font-medium">
                    {pr.status === 'DELETED' && (
                      <span className="font-bold" style={{ color: 'red' }}>
                        DELETED:{' '}
                      </span>
                    )}
                    <a target="_blank" href={`https://github.com${pr.url}`} rel="noreferrer">
                      https://github.com{pr.url}
                    </a>
                  </p>
                  <p className="font-medium">
                    <a
                      href={`https://analyzemyrepo.com/analyze${pr.url}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="rounded-full bg-white p-[6px]"
                        src="https://uploads-ssl.webflow.com/635150609746eee5c60c4aac/635561187e62507156070c88_crowd_dev_icon.svg"
                      />
                    </a>
                  </p>

                  {(moderator || cleaner) && <RepositoryStatus url={pr.url} />}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Link
          className="cta-btn-animation relative mt-10 flex h-[60px] max-w-full items-center justify-center leading-none sm:mt-6"
          href="/leaderboard"
        >
          <svg
            className="cta-btn-animation-border xs:w-full"
            width="268"
            height="59"
            viewBox="0 0 268 59"
            fill="none"
            aria-hidden
          >
            <path d="M1 58V1H251.586L267 16.4142V58H1Z" stroke="white" strokeWidth="2" />
          </svg>

          <div className="absolute inset-0 flex items-center justify-center space-x-2.5">
            <span className="text-lg sm:text-[18px]">Go to Leaderboard</span>
          </div>
        </Link>
      </div>
    </section>
  );
};

Hero.propTypes = {
  team: PropTypes.object,
};

export default Hero;
