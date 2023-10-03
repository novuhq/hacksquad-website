import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';

import Socials from 'components/shared/socials';

import bgLeftGlitch from './images/bg-left-glitch.png';
import bgRightGlitch from './images/bg-right-glitch.png';
import bgTitleGlitch from './images/bg-title-glitch.png';

import RepositoryStatus from '~/helpers/repository.status';

const title = '>_Repositories';
const leadersHeader = ['Name', 'Link', 'Status'];

const Hero = () => {
  const router = useRouter();
  const [list, setList] = useState([]);

  useEffect(() => {
    loadTeams();
  }, [router]);

  const loadTeams = useCallback(async () => {
    setList(
      (await (await fetch(`/api/repositories-list?page=${router.query.page || 1}`)).json())
        .repositories
    );
  }, [router]);

  return (
    <section className="safe-paddings relative min-h-[600px]">
      <div className="container relative flex h-full flex-col items-center justify-center py-16 sm:px-0">
        <h1 className="leading-tight font-mono text-xl font-bold uppercase lg:text-[50px] md:text-[40px] sm:px-4 xs:text-[32px]">
          {title}
        </h1>
        <div className="mt-[100px] flex space-x-[20px]">
          {router.query.page > 1 && (
            <div
              className="cursor-pointer border border-white bg-black p-5 transition-all hover:bg-white hover:text-black"
              onClick={() => router.push(`/repositories?page=${+router.query.page - 1}`)}
            >
              Previous Page
            </div>
          )}
          {list.length === 10 && (
            <div
              className="cursor-pointer border border-white bg-black p-5 transition-all hover:bg-white hover:text-black"
              onClick={() => router.push(`/repositories?page=${+(router.query.page || 1) + 1}`)}
            >
              Next Page
            </div>
          )}
        </div>
        <div className="md:scrollbar-hidden mx-auto mt-20 max-w-full md:overflow-x-auto">
          <div className="min-w-[716px] md:min-w-[600px] md:px-7 sm:min-w-[300px] sm:px-4">
            <div className="grid grid-cols-[50px_1fr_180px] gap-x-5 border-b border-gray-2 pb-4 sm:grid-cols-[50px_160px_40px]">
              {leadersHeader.map((header, index) => (
                <span className="font-medium uppercase" key={index}>
                  {header}
                </span>
              ))}
            </div>
            <ul>
              {list.map((l) => (
                <li
                  key={l.id}
                  className="grid grid-cols-[50px_1fr_180px] gap-x-5 border-b border-gray-2 py-4 sm:grid-cols-[50px_160px_40px]"
                >
                  <span />
                  <p className="truncate font-medium">{l.url}</p>
                  <span>
                    <RepositoryStatus url={l.url.split('.com')[1]} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Link href="/" passHref legacyBehavior>
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
        className="absolute left-0 top-[70px] -z-20 md:top-10 sm:top-12 sm:max-w-[360px] xs:max-w-[240px]"
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
