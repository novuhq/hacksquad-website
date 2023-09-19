import clsx from 'clsx';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useMemo } from 'react';

const leadersHeader = ['Place', 'Name', 'Score'];
const tableGridClass = 'grid grid-cols-[114px_540px_1fr] gap-x-5 md:grid-cols-[100px_400px_1fr]';

const Hero = ({ teams }) => {
  const score = useMemo(() => {
    const tea = (teams || [])?.slice(0, 60);
    return tea[tea.length - 1]?.score;
  }, [teams]);

  return (
    <section className="safe-paddings relative pb-12 pt-2 md:py-2">
      <div className="container flex h-full flex-col items-center justify-center">
        <h1 className="max-w-2xl font-titles text-60 font-semibold leading-none md:text-42 xs:max-w-[246px]">
          Leaderboard
        </h1>
        <div className="md:scrollbar-hidden mx-auto mt-[76px] w-[798px] md:w-full md:overflow-x-auto">
          <div className="md:min-w-[700px] md:px-7 sm:px-4">
            <div className={tableGridClass}>
              {leadersHeader.map((header, index) => (
                <span
                  className="text-18 font-medium uppercase leading-normal text-gray-1 md:text-18"
                  key={index}
                >
                  {header}
                </span>
              ))}
            </div>
            <ul className="py-4">
              {teams.map((team, index) => (
                <li
                  className={clsx(
                    'mt-2.5 rounded bg-[rgba(203,178,255,0.05)] text-20 leading-normal outline outline-1 outline-[rgba(203,178,255,0.08)] transition-colors duration-200 first:mt-0 hover:bg-[rgba(203,178,255,0.08)] md:text-18',
                    index < 60 &&
                      'bg-leaderboard-selected outline-transparent hover:bg-leaderboard-selected-hover'
                  )}
                  key={team.slug}
                >
                  <Link className={clsx('py-3', tableGridClass)} href={`/team/${team.slug}`}>
                    <span
                      className={clsx(
                        'ml-5',
                        index < 60 ? 'font-semibold text-[#CBB2FF]' : 'text-gray-1'
                      )}
                    >
                      {index + 1}
                    </span>
                    <p className="truncate">{`${team.name} ${score <= team.score ? '👑' : ''}`}</p>
                    <span className={clsx(index < 60 && 'font-semibold text-[#CBB2FF]')}>
                      {team.score}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  teams: PropTypes.array,
};

Hero.defaultProps = {
  teams: [],
};

export default Hero;
