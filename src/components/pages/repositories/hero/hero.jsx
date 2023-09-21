import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

import RepositoryStatus from '~/helpers/repository.status';

const title = 'Repositories';
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
    <section className="safe-paddings relative">
      <div className="container relative flex h-full flex-col items-center justify-center py-16 sm:px-0">
        <h1 className="text-center font-titles text-60 font-semibold leading-none md:text-42">
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
                <span
                  className="text-18 font-medium uppercase leading-normal text-gray-1 md:text-18"
                  key={index}
                >
                  {header}
                </span>
              ))}
            </div>
            <ul>
              {list.map((l) => (
                <li
                  className="grid grid-cols-[50px_1fr_180px] gap-x-5 border-b border-gray-2 py-4 sm:grid-cols-[50px_160px_40px]"
                  key={l.id}
                >
                  <span>1</span>
                  <p className="truncate font-medium">{l.url}</p>
                  <span>
                    <RepositoryStatus url={l.url.split('.com')[1]} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Link
          className="cta-btn-animation relative mt-10 flex h-[60px] max-w-full items-center justify-center leading-none"
          href="/"
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
            <span className="text-lg sm:text-[18px]">Back to Homepage</span>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
