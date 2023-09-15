'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';

import Button from 'components/shared/button';

import Status from './status';

const title = 'Repositories';
const leadersHeader = ['Name', 'Link', 'Status'];

const Hero = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get('page');

  const router = useRouter();
  const [list, setList] = useState([]);

  useEffect(() => {
    loadTeams();
  }, [router]);

  const loadTeams = useCallback(async () => {
    setList((await (await fetch(`/api/repositories-list?page=${page || 1}`)).json()).repositories);
  }, [router]);

  return (
    <section className="safe-paddings relative pt-40">
      <div className="container relative flex h-full flex-col items-center justify-center py-16 sm:px-0">
        <h1 className="leading-tight font-titles text-60 font-bold uppercase lg:text-[50px] md:text-[40px] sm:px-4 xs:text-[32px]">
          {title}
        </h1>
        <div className="mt-[100px] flex space-x-[20px]">
          {page > 1 && (
            <div
              className="cursor-pointer border border-white bg-black p-5 transition-all hover:bg-white hover:text-black"
              onClick={() => router.push(`/repositories?page=${+page - 1}`)}
            >
              Previous Page
            </div>
          )}
          {list.length === 10 && (
            <div
              className="cursor-pointer border border-white bg-black p-5 transition-all hover:bg-white hover:text-black"
              onClick={() => router.push(`/repositories?page=${+(page || 1) + 1}`)}
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
                  <span>1</span>
                  <p className="truncate font-medium">{l.url}</p>
                  <span>
                    <Status url={l.url.split('.com')[1]} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Button className="mt-10" to="/" size="md" theme="fill-white">
          Back to Homepage
        </Button>
      </div>
    </section>
  );
};

export default Hero;
