'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import SignUpButton from 'components/shared/sign-up-button';
import SocialShare from 'components/shared/social-share';
import getShortName from 'lib/get-short-name';
import GithubIcon from 'svgs/github.inline.svg';
import LogoOneColor from 'svgs/logo-one-color.inline.svg';

const colorVariants = [
  {
    id: 1,
    title: 'Color variant 1',
    buttonColorClass: 'before:bg-color-picker-variant-1',
  },
  {
    id: 2,
    title: 'Color variant 2',
    buttonColorClass: 'before:bg-color-picker-variant-2',
  },
  {
    id: 3,
    title: 'Color variant 3',
    buttonColorClass: 'before:bg-color-picker-variant-3',
  },
  {
    id: 4,
    title: 'Color variant 4',
    buttonColorClass: 'before:bg-color-picker-variant-4',
  },
  {
    id: 5,
    title: 'Color variant 5',
    buttonColorClass: 'before:bg-color-picker-variant-5',
  },
  {
    id: 6,
    title: 'Color variant 6',
    buttonColorClass: 'before:bg-color-picker-variant-6',
  },
];

const DynamicTicket = ({
  user: { id: number, name, handle: githubHandle, colorSchema },
  isAuthorized = false,
  isDefault = false,
  isHomeSection = false,
}) => {
  const { data } = useSession();
  const [selectedColorSchema, setSelectedColorSchema] = useState(null);
  const currentColorSchema = selectedColorSchema || colorSchema || '1';
  const isColorPickerShow = !isHomeSection && (isAuthorized || isDefault);

  useEffect(() => {
    if (!selectedColorSchema || isDefault) return;

    const { userId } = data.user;

    const updateUserDataTimer = setTimeout(async () => {
      await fetch(`/api/update-user?id=${userId}&colorSchema=${selectedColorSchema}`);
      await fetch(`/api/auth/session?colorSchema=${selectedColorSchema}`);
    }, 1000);

    // eslint-disable-next-line consistent-return
    return () => clearTimeout(updateUserDataTimer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedColorSchema]);

  const handleColorClick = (e) => {
    setSelectedColorSchema(e.target.id);
  };

  return (
    <div
      className={clsx(
        'flex flex-col justify-center sm:overflow-hidden',
        isHomeSection ? 'pb-8 pt-48' : 'min-h-screen overflow-hidden py-20'
      )}
    >
      <div className="container grid grid-cols-12 gap-10 lg:grid-cols-1 lg:gap-0">
        <div className="col-span-6 self-center pr-16 lg:col-span-full lg:pr-0 lg:text-center">
          <h2 className="max-w-3xl font-titles text-60 font-semibold leading-1.125 lg:mx-auto lg:text-42 md:text-36">
            {/* eslint-disable-next-line no-nested-ternary */}
            {isDefault ? (
              <>
                Share your <br /> Hacksquad spirit
              </>
            ) : isAuthorized ? (
              <>
                You’re In. <br /> Make it Unique.
              </>
            ) : (
              `${name}’s Ticket`
            )}
          </h2>
          <p className="mt-5 max-w-3xl text-20 leading-normal text-grey-1 lg:mx-auto md:text-18">
            {/* eslint-disable-next-line no-nested-ternary */}
            {isDefault
              ? 'Create and share your custom ticket to join our giveaway and win great prizes!'
              : isAuthorized
              ? 'Share your ticket on X, mention HackSquad and the sponsors, and join our giveaway of SWAG!'
              : `Join ${name} at Hacksquad 2023, get your exclusive ticket and win SWAG.`}
          </p>
          <div className="mt-10 flex items-center gap-x-5 lg:justify-center lg:gap-x-3">
            {!isHomeSection && (
              <SignUpButton
                className="shrink-0"
                size="md"
                theme="fill-yellow"
                to={isAuthorized ? '/my-team' : null}
                isSignInButton={!isAuthorized}
              >
                {!isAuthorized ? 'Create your ticket' : 'My Squad'}
              </SignUpButton>
            )}
            {isAuthorized && (
              <SocialShare
                url={`${process.env.NEXT_PUBLIC_DEFAULT_SITE_URL}/ticket/${githubHandle}`}
              />
            )}
          </div>
        </div>
        <div className="col-span-6 -ml-9 self-center lg:col-span-full lg:ml-0">
          <div className="lg:mt-10">
            <section
              className={clsx('ticket', {
                'before:bg-[rgba(63,103,192,0.6)] after:bg-[rgba(63,103,192,0.3)]':
                  currentColorSchema === '1',
                'before:bg-[rgba(119,57,199,0.6)] after:bg-[rgba(94,57,199,0.3)]':
                  currentColorSchema === '2',
                'before:bg-[rgba(174,139,14,0.6)] after:bg-[rgba(192,94,63,0.3)]':
                  currentColorSchema === '3',
                'before:bg-[rgba(21,139,139,0.6)] after:bg-[rgba(18,130,126,0.3)]':
                  currentColorSchema === '4',
                'before:bg-[rgba(192,109,49,0.6)] after:bg-[rgba(0,68,171,0.3)]':
                  currentColorSchema === '5',
                'before:bg-[rgba(57,105,199,0.6)] after:bg-[rgba(179,57,199,0.3)]':
                  currentColorSchema === '6',
              })}
            >
              <div className="absolute inset-0 z-30 flex flex-col">
                <header className="px-8 pt-7 xs:px-4 xs:pt-4">
                  <h2
                    className={clsx(
                      'inline-flex gap-x-2 bg-white bg-clip-text font-titles text-20 font-semibold leading-none text-transparent',
                      {
                        'bg-ticket-heading-variant-1': currentColorSchema === '1',
                        'bg-ticket-heading-variant-2': currentColorSchema === '2',
                        'bg-ticket-heading-variant-3': currentColorSchema === '3',
                        'bg-ticket-heading-variant-4': currentColorSchema === '4',
                        'bg-ticket-heading-variant-5': currentColorSchema === '5',
                        'bg-ticket-heading-variant-6': currentColorSchema === '6',
                      }
                    )}
                  >
                    <LogoOneColor
                      className={clsx({
                        'text-[#3664CB]': currentColorSchema === '1',
                        'text-[#6140DA]': currentColorSchema === '2',
                        'text-[#CF953F]': currentColorSchema === '3',
                        'text-[#1BE2DB]': currentColorSchema === '4',
                        'text-[#9185A1]': currentColorSchema === '5',
                        'text-[#A46CE8]': currentColorSchema === '6',
                      })}
                      aria-hidden
                    />
                    Hacksquad 2023
                  </h2>
                </header>
                <div className="mt-auto px-8 pb-6 xs:px-4 xs:pb-4">
                  <p className="text-36 font-medium leading-none text-white xs:text-24">
                    {getShortName(name)}
                  </p>
                  <p
                    className={clsx('mt-3 flex items-center gap-x-3 text-18 leading-none', {
                      'text-[#5085DC]': currentColorSchema === '1',
                      'text-[#8352DD]': currentColorSchema === '2',
                      'text-[#E5A659]': currentColorSchema === '3',
                      'text-[#37D7AF]': currentColorSchema === '4',
                      'text-[#1E8BE5]': currentColorSchema === '5',
                      'text-[#DF6DFB]': currentColorSchema === '6',
                    })}
                  >
                    <GithubIcon aria-hidden />
                    {githubHandle}
                  </p>
                </div>
                <footer className="ticket-footer">
                  <p
                    className={clsx(
                      'bg-white bg-clip-text font-mono text-36 font-extralight leading-none text-transparent xs:text-24',
                      {
                        'bg-ticket-number-variant-1': currentColorSchema === '1',
                        'bg-ticket-number-variant-2': currentColorSchema === '2',
                        'bg-ticket-number-variant-3': currentColorSchema === '3',
                        'bg-ticket-number-variant-4': currentColorSchema === '4',
                        'bg-ticket-number-variant-5': currentColorSchema === '5',
                        'bg-ticket-number-variant-6': currentColorSchema === '6',
                      }
                    )}
                  >
                    No {`${number}`.slice(0, 10)}
                  </p>
                </footer>
              </div>
              <Image
                className="relative z-20 w-full lg:mx-auto lg:w-auto"
                src={
                  currentColorSchema === '1'
                    ? '/images/ticket-1.png'
                    : currentColorSchema === '2'
                    ? '/images/ticket-2.png'
                    : currentColorSchema === '3'
                    ? '/images/ticket-3.png'
                    : currentColorSchema === '4'
                    ? '/images/ticket-4.png'
                    : currentColorSchema === '5'
                    ? '/images/ticket-5.png'
                    : '/images/ticket-6.png'
                }
                width={624}
                height={353}
                quality={95}
                alt="Ticket background"
                priority={!isHomeSection}
              />
            </section>

            {isColorPickerShow && (
              <div className="mt-8 flex items-center gap-6 lg:my-7 lg:justify-center sm:flex-wrap">
                <p className="text-18 leading-none text-grey-1 lg:text-16 sm:w-full sm:text-center">
                  Pick a color:
                </p>
                <div className="flex gap-5 lg:gap-4">
                  {colorVariants.map((item, i) => {
                    const { id, title, buttonColorClass } = item;
                    const isActive = currentColorSchema === `${id}`;

                    return (
                      <motion.button
                        className={clsx(
                          'relative flex h-9 w-9 items-center justify-center rounded-lg before:h-6 before:w-6 before:shrink-0 before:rounded',
                          buttonColorClass
                        )}
                        key={i}
                        id={`${id}`}
                        disabled={isActive}
                        onClick={handleColorClick}
                      >
                        <span className="sr-only">{title}</span>
                        <motion.span
                          className={clsx(
                            'pointer-events-none absolute inset-0 -z-10 h-full w-full rounded-lg transition-shadow duration-300',
                            {
                              'shadow-[0_0_0_1px_rgba(255,255,255,0.2)]': !isActive,
                            },
                            isActive && {
                              'shadow-[0_0_0_1px_rgba(66,226,254,0.5)]': currentColorSchema === '1',
                              'shadow-[0_0_0_1px_rgba(214,73,150,0.5)]': currentColorSchema === '2',
                              'shadow-[0_0_0_1px_rgba(254,237,170,0.5)]':
                                currentColorSchema === '3',
                              'shadow-[0_0_0_1px_rgba(0,255,255,0.5)]': currentColorSchema === '4',
                              'shadow-[0_0_0_1px_rgba(255,158,117,0.5)]':
                                currentColorSchema === '5',
                              'shadow-[0_0_0_1px_rgba(170,254,249,0.5)]':
                                currentColorSchema === '6',
                            }
                          )}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.5 }}
                          aria-hidden
                        />
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

DynamicTicket.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired,
    colorSchema: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  isAuthorized: PropTypes.bool,
  isDefault: PropTypes.bool,
  isHomeSection: PropTypes.bool,
};

export default DynamicTicket;
