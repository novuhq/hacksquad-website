import { stringify, parse } from 'querystring';

import Image from 'next/future/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import Autocomplete from 'react-autocomplete';
import { useDebouncedCallback } from 'use-debounce';

import Socials from 'components/shared/socials';

import bgLeftGlitch from './images/bg-left-glitch.png';
import bgRightGlitch from './images/bg-right-glitch.png';
import bgTitleGlitch from './images/bg-title-glitch.png';

const title = '>Logs';
const leadersHeader = ['Pr Title', 'Team', 'User', 'Action', 'Taken By'];

const actionPRs = {
  KICK_USER: 'Removed from a team',
  DELTE_PR: 'PR Deleted',
  RECOVER_PR: 'PR Recovered',
  DISQUALIFY_USER: 'User Disqualified',
  RECOVER_USER: 'User Qualified',
  DISQUALITY_TEAM: 'Team Disqualifie',
  RECOVER_TEAM: 'Team Qualified',
};
const formatAction = (action) => actionPRs[action];

const Hero = () => {
  const router = useRouter();

  const findQueryParam = useCallback((key) => {
    const params = new URLSearchParams(window.location.href.split('?').pop());
    return params.get(key) || undefined;
  }, []);

  const [list, setList] = useState(undefined);
  const [teamList, setTeamList] = useState([]);
  const [page, setPage] = useState(findQueryParam('page') || 1);
  const [admin, setAdmin] = useState(findQueryParam('admin'));
  const [user, setUser] = useState(findQueryParam('user'));
  const [team, setTeam] = useState(findQueryParam('team'));
  const [usersList, setUsersList] = useState([]);
  const [prType, setPrType] = useState(findQueryParam('prType'));
  const [search, setSearch] = useState('');
  const [mods, setMods] = useState([]);
  const [searchUser, setSearchUser] = useState('');

  const loadTeam = async () => {
    const getParams = stringify({
      page: +page || 1,
      admin,
      team,
      user,
      prType,
    });
    setList(undefined);
    setList(await (await fetch(`/api/logs?${getParams}`)).json());
  };

  const allTeams = async () => {
    const { teams } = await (await fetch(`/api/leaderboard`)).json();
    setSearch(teams.find((f) => f.id.indexOf(team) > -1)?.name);
    setTeamList(teams);
  };

  const loadMods = async () => {
    const { users } = await (await fetch(`/api/users?mod=1`)).json();
    setMods(users);
  };

  const loadUsers = useDebouncedCallback(async (name) => {
    const { users } = await (await fetch(`/api/users?name=${name || ''}`)).json();
    setUsersList(users);
  }, 500);

  const nextPage = () => {
    router.push('/logs', {
      query: {
        ...(window.location.href.indexOf('?') > -1
          ? parse(window.location.href.split('?').pop())
          : {}),
        page: +page + 1,
      },
    });
    setPage(+page + 1);
  };

  const previousPage = () => {
    router.push('/logs', {
      query: {
        ...(window.location.href.indexOf('?') > -1
          ? parse(window.location.href.split('?').pop())
          : {}),
        page: +page - 1,
      },
    });
    setPage(+page - 1);
  };

  const setTakenBy = (e) => {
    const findAdmin = mods.find((f) => f.name === e.target.value);
    router.push('/logs', {
      query: {
        ...(window.location.href.indexOf('?') > -1
          ? parse(window.location.href.split('?').pop())
          : {}),
        admin: findAdmin?.id,
      },
    });
    setAdmin(findAdmin?.id);
  };

  const setAction = (e) => {
    router.push('/logs', {
      query: {
        ...(window.location.href.indexOf('?') > -1
          ? parse(window.location.href.split('?').pop())
          : {}),
        prType: e.target.value,
      },
    });
    setPrType(e.target.value);
  };

  const chooseTeam = (team) => {
    const findTeam = !team ? undefined : teamList.find((f) => f.name.indexOf(team) > -1);
    router.push('/logs', {
      query: {
        ...(window.location.href.indexOf('?') > -1
          ? parse(window.location.href.split('?').pop())
          : {}),
        team: findTeam?.id,
      },
    });

    setTeam(findTeam?.id);
  };

  const chooseUser = (userr) => {
    const findUser = !userr ? undefined : usersList.find((f) => f.name.indexOf(userr) > -1);
    router.push('/logs', {
      query: {
        ...(window.location.href.indexOf('?') > -1
          ? parse(window.location.href.split('?').pop())
          : {}),
        user: findUser?.id,
      },
    });

    setUser(findUser?.id);
  };

  useEffect(() => {
    allTeams();
    loadUsers();
    loadMods();
  }, []);
  useEffect(() => {
    loadTeam();
  }, [page, admin, user, prType, team]);

  return (
    <section className="safe-paddings relative min-h-[600px]">
      <div className="container relative flex h-full flex-col items-center justify-center py-16 sm:px-0">
        <h1 className="font-mono text-xl font-bold uppercase leading-tight lg:text-[50px] md:text-[40px] sm:px-4 xs:text-[32px]">
          {title}
        </h1>
        <div className="md:scrollbar-hidden mx-auto mt-20 max-w-full md:overflow-x-auto">
          <div className="mb-5 flex">
            <select
              style={{ height: 30 }}
              className="mr-5 flex-1"
              placeholder="Action"
              onChange={setAction}
            >
              <option value="">Select Action</option>
              {Object.keys(actionPRs).map((key) => (
                <option value={key} selected={key === prType}>
                  {actionPRs[key]}
                </option>
              ))}
            </select>

            <div className="relative mr-5 mb-10 inline-block flex-1">
              <Autocomplete
                getItemValue={(item) => item.name}
                items={teamList
                  .filter((f) => f.name.toLowerCase().indexOf(search?.toLowerCase() || '') > -1)
                  .slice(0, 10)}
                menuStyle={{
                  background: 'black',
                  padding: '2px',
                  fontSize: '90%',
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                }}
                renderItem={(item, isHighlighted) => (
                  <div
                    className="pb-1 pt-1"
                    style={{ background: isHighlighted ? 'darkblue' : 'black' }}
                  >
                    {item.name}
                  </div>
                )}
                inputProps={{
                  style: {
                    padding: 3,
                  },
                  placeholder: 'Team Search',
                }}
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  if (!e.target.value) {
                    chooseTeam(undefined);
                  }
                }}
                onSelect={(val) => {
                  setSearch(val);
                  chooseTeam(val);
                }}
              />
            </div>

            <div className="relative mr-5 inline-block flex-1">
              <Autocomplete
                getItemValue={(item) => item.name}
                items={usersList
                  .filter((f) => f.name.toLowerCase().indexOf(searchUser?.toLowerCase() || '') > -1)
                  .slice(0, 10)}
                menuStyle={{
                  background: 'black',
                  padding: '2px',
                  fontSize: '90%',
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                }}
                renderItem={(item, isHighlighted) => (
                  <div
                    className="pb-1 pt-1"
                    style={{ background: isHighlighted ? 'darkblue' : 'black' }}
                  >
                    {item.name}
                  </div>
                )}
                inputProps={{
                  style: {
                    padding: 3,
                  },
                  placeholder: 'User Search',
                }}
                value={searchUser}
                onChange={(e) => {
                  setSearchUser(e.target.value);
                  loadUsers(e.target.value);
                  if (!e.target.value) {
                    chooseUser(undefined);
                  }
                }}
                onSelect={(val) => {
                  setSearchUser(val);
                  chooseUser(val);
                }}
              />
            </div>

            <select style={{ height: 30 }} className="flex-1" onChange={setTakenBy}>
              <option value="">Select Taken By</option>
              {mods.map((mod) => (
                <option value={mod.name} selected={mod.id === admin}>
                  {mod.name}
                </option>
              ))}
            </select>
          </div>
          <div className="min-w-[716px] md:min-w-[600px] md:px-7 sm:min-w-[300px] sm:px-4">
            <div className="grid grid-cols-[300px_1fr_200px_200px_90px] gap-x-5 border-b border-gray-2 pb-4 sm:grid-cols-[50px_160px_40px]">
              {leadersHeader.map((header, index) => (
                <span className="font-medium uppercase" key={index}>
                  {header}
                </span>
              ))}
            </div>
            <ul>
              {!list && (
                <li className="grid gap-x-5 border-b border-gray-2 py-4 text-center sm:grid-cols-[50px_160px_40px]">
                  <span>Loading</span>
                </li>
              )}
              {list && !list?.length && (
                <li className="grid gap-x-5 border-b border-gray-2 py-4 text-center sm:grid-cols-[50px_160px_40px]">
                  <span>No Results</span>
                </li>
              )}
              {list?.map((p) => (
                <li
                  className="grid grid-cols-[300px_1fr_200px_200px_90px] gap-x-5 border-b border-gray-2 py-4 sm:grid-cols-[50px_160px_40px]"
                  key={p.id}
                >
                  <span
                    style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                  >
                    {p?.prDetails?.title ? (
                      <a href={p?.prDetails?.url}>{p?.prDetails?.title}</a>
                    ) : (
                      'Not a PR'
                    )}
                  </span>
                  <span>
                    {p?.team?.name ? <a href={`/team/${p?.team?.slug}`}>{p?.team?.name}</a> : 'N/A'}
                  </span>
                  <span
                    style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                  >
                    {p?.user?.name ? (
                      <a href={`https://github.com/${p?.user?.handle}`}>{p?.user?.name}</a>
                    ) : (
                      'N/A'
                    )}
                  </span>
                  <span>{formatAction(p?.actionType)}</span>
                  <span
                    style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                  >
                    {p?.admin?.name?.split(' ')[0]}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex">
          {page > 1 && (
            <a
              className="cta-btn-animation relative mr-10 mt-10 flex h-[60px] max-w-full cursor-pointer items-center justify-center leading-none"
              onClick={previousPage}
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
                <span className="text-lg sm:text-[18px]">Previous Page</span>
              </div>
            </a>
          )}
          <a
            className="cta-btn-animation relative mt-10 flex h-[60px] max-w-full cursor-pointer items-center justify-center leading-none"
            onClick={nextPage}
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
              <span className="text-lg sm:text-[18px]">Next Page</span>
            </div>
          </a>
        </div>
        <Link href="/" passHref>
          <a
            className="cta-btn-animation relative mt-10 flex h-[60px] max-w-full items-center justify-center leading-none"
            href="/"
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
              <span className="text-lg sm:text-[18px]">Back to Homepage</span>
            </div>
          </a>
        </Link>
        <Socials className="mt-10" />
      </div>
      <Image
        className="absolute top-[70px] left-0 -z-20 md:top-10 sm:top-12 sm:max-w-[360px] xs:max-w-[240px]"
        src={bgLeftGlitch}
        width={464}
        height={78}
        loading="eager"
        alt="Left Glitch image"
        priority
        aria-hidden
      />
      <Image
        className="absolute left-0 right-0 top-0 -z-10 md:hidden"
        src={bgTitleGlitch}
        width={1920}
        height={219}
        loading="eager"
        alt="Center Glitch image"
        priority
        aria-hidden
      />
      <Image
        className="absolute right-0 top-9 -z-20 md:top-12 sm:top-20 sm:max-w-[360px] xs:max-w-[260px]"
        src={bgRightGlitch}
        width={474}
        height={105}
        loading="eager"
        alt="Right Glitch image"
        priority
        aria-hidden
      />
    </section>
  );
};

export default Hero;
