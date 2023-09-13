'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const DevToAccountList = () => {
  const [list, setList] = useState([]);
  const connectDevTo = useCallback(async () => {
    setList(
      (
        await (
          await fetch('/api/dev-to-articles', {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            method: 'GET',
          })
        ).json()
      ).list
    );
  }, []);

  const likeArticle = (id) => async () => {
    const { finish } = await (
      await fetch('/api/dev-to-like', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
        method: 'POST',
      })
    ).json();

    if (finish) {
      window.location.reload();
      return;
    }

    toast.error('Please go to the article and click the SAVE button');
  };

  useEffect(() => {
    connectDevTo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {list.map((l, index) => (
        <li className="border-gray-2 grid grid-cols-[20px_485px_230px_1fr] gap-x-5 border-b py-4 lg:grid-cols-[20px_390px_1fr_1fr] md:grid-cols-[20px_485px_230px_1fr] sm:grid-cols-[100px_100px_120px]">
          <span className="sm:hidden">{index + 4}</span>
          <span>
            <a target="_blank" href={l.articleLink} rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                role="img"
                fill="white"
                aria-hidden="true"
                className="crayons-icon inline-block"
              >
                <path d="M5 2h14a1 1 0 011 1v19.143a.5.5 0 01-.766.424L12 18.03l-7.234 4.536A.5.5 0 014 22.143V3a1 1 0 011-1zm13 2H6v15.432l6-3.761 6 3.761V4z" />
              </svg>
              <b>Save a dev.to article</b>: {l.articleTitle}
            </a>
          </span>
          <span>1 point</span>
          <span>
            {l.voted ? (
              'Saved'
            ) : (
              <a
                className="cta-btn-animation relative flex max-w-full cursor-pointer cursor-pointer items-center justify-center leading-none"
                rel="noreferrer"
                onClick={likeArticle(l.id)}
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
                  <span className="text-lg sm:text-[18px]">Check</span>
                </div>
              </a>
            )}
          </span>
        </li>
      ))}
    </>
  );
};

export default DevToAccountList;
