import Image from 'next/future/image';
import React from 'react';

import SectionHeading from 'components/shared/section-heading';
import SignUpButton from 'components/shared/sign-up-button';

import bgLeftGlitch from './images/bg-left-glitch.png';
import bgLeft from './images/bg-left.jpg';
import bgRightGlitch from './images/bg-right-glitch.png';
import bgRightLine from './images/bg-right-line.png';
import bgRight from './images/bg-right.jpg';

const title = 'Q&A';
const items = [
  {
    question: "What's in it for me?",
    answer:
      'Meet amazing new people, get more involved with the open-source community and win awesome swag!',
  },
  {
    question: 'When is the event happening?',
    answer: 'Between 1st - 31st October 2022',
  },
  {
    question: 'How does it work?',
    answer: (
      <>
        Register to the HackSquad using your GitHub, Join a squad or get assigned to a random squad,
        contribute code and get Swag! Not sure where to start? Check:{' '}
        <a
          className="inline-block border-b-2 border-transparent text-primary-2 transition-[border-color] duration-200 hover:border-primary-2"
          href="https://goodfirstissue.dev"
          target="_blank"
          rel="noreferrer"
        >
          goodfirstissue.dev
        </a>
      </>
    ),
  },
  {
    question: 'How many members can join a squad?',
    answer: (
      <>
        Each squad can have a maximum of 5 members.
        <br />
        If you can't find all 5, you can always turn on the "Allow random people to join my squad"
        <br />
      </>
    ),
  },
  {
    question: 'How do we calculate the score?',
    answer: (
      <>
        Each day at midnight we will calculate every squad member <strong>MERGED PR</strong> and sum
        them all together. By the end of the event, the top 60 squads will win awesome swag! The
        calculation method can be{' '}
        <a
          className="inline-block border-b-2 border-transparent text-primary-2 transition-[border-color] duration-200 hover:border-primary-2"
          href="https://github.com/novuhq/hacksquad-background/blob/main/src/services/github/github.service.ts"
          target="_blank"
          rel="noreferrer"
        >
          found here
        </a>
      </>
    ),
  },
  {
    question: 'How many people will get swag?',
    answer: <>The top 60 squads will win awesome swag! around ~300 winners!</>,
  },
  {
    question: 'Can I register for both Hacktoberfest and Hacksquad?',
    answer:
      'Yes, and even recommended! Each contribution will be counted for both Hacktoberfest and HackSquad',
  },
  {
    question: 'Do I need other people to help me contribute code?',
    answer: 'You can join a squad and invite friends or we will auto-assign you to another squads',
  },
  {
    question: 'I want support / get more updates / find a squads member',
    answer: (
      <>
        Feel free to follow us on{' '}
        <a
          className="inline-block border-b-2 border-transparent text-primary-2 transition-[border-color] duration-200 hover:border-primary-2"
          href="https://twitter.com/HackSquadDev"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>{' '}
        and join our{' '}
        <a
          className="inline-block border-b-2 border-transparent text-primary-2 transition-[border-color] duration-200 hover:border-primary-2"
          href="https://discord.gg/vcqkXgT3Xr"
          target="_blank"
          rel="noreferrer"
        >
          Discord
        </a>
      </>
    ),
  },
  {
    question: 'Does the swag in the picture is the actual swag?',
    answer: (
      <>
        Most of it is! We will also add more Swag from our sponsors.
        <br />
        We still haven&apos;t finalized everything.
      </>
    ),
  },
  {
    question: 'How long will it take to receive the swag?',
    answer: (
      <>
        We are sending the swag from the US.
        <br />
        We assume that it will reach everybody within 60-90 days.
      </>
    ),
  },
  {
    question: 'Do I need to pay duty for the SWAG?',
    answer: <>No! We are taking care of it!</>,
  },
  {
    question: 'I want to create a workshop for the event during October',
    answer:
      "That's awesome! We would be super happy to give you a stage, please email us at nevo@novu.co",
  },
];

const QuestionAndAnswer = () => (
  <section className="safe-paddings relative py-26 md:py-20 sm:py-16 xs:py-12" id="qa">
    <div className="container relative z-10">
      <SectionHeading className="text-center">{title}</SectionHeading>

      <ul className="mx-auto mt-14 max-w-[968px] sm:mt-6 sm:text-center">
        {items.map(({ question, answer }, index) => (
          <li className="border-b border-gray-2 py-6 last:border-none" key={index}>
            <h3 className="text-[24px] font-medium md:text-lg sm:text-[18px]">{question}</h3>
            <p className="mt-5 text-lg text-gray-1 md:text-base">- {answer}</p>
          </li>
        ))}
      </ul>

      <SignUpButton className="mx-auto mt-14 sm:mt-10" />

      <Image
        className="absolute top-[-394px] right-[-260px] lg:hidden"
        src={bgRightLine}
        alt=""
        width={288}
        height={868}
        aria-hidden
      />
    </div>

    <Image
      className="absolute bottom-0 left-0 xl:left-[-30%]"
      src={bgLeft}
      alt=""
      width={960}
      height={886}
      aria-hidden
    />
    <Image
      className="absolute top-0 right-0 xl:right-[-30%]"
      src={bgRight}
      alt=""
      width={960}
      height={886}
      aria-hidden
    />
    <Image
      className="absolute bottom-[118px] left-0 xl:left-[-12%] lg:left-[-26%] md:hidden"
      src={bgLeftGlitch}
      alt=""
      width={290}
      height={812}
      aria-hidden
    />
    <Image
      className="absolute top-[-66px] right-0 xl:right-[-6%] md:max-w-[46%]"
      src={bgRightGlitch}
      alt=""
      width={476}
      height={832}
      aria-hidden
    />
  </section>
);

export default QuestionAndAnswer;
