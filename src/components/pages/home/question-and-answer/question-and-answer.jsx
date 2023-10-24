import Image from 'next/future/image';
import React from 'react';

import SectionHeading from 'components/shared/section-heading';
import SignUpButton from 'components/shared/sign-up-button';

// Importing images
import bgLeftGlitch from './images/bg-left-glitch.png';
import bgLeft from './images/bg-left.jpg';
import bgRightGlitch from './images/bg-right-glitch.png';
import bgRightLine from './images/bg-right-line.png';
import bgRight from './images/bg-right.jpg';

// Define section title and Q&A items
const title = 'Q&A';
const items = [
  {
    question: "What's the benefit of participating?",
    answer:
      'Participate to meet amazing new people, become more involved with the open-source community, and have a chance to win awesome swag!',
  },
  {
    question: 'When is the event taking place?',
    answer: 'The event runs from October 1st to October 31st, 2022.',
  },
  {
    question: 'How does it work?',
    answer: (
      <>
        To participate in HackSquad, register using your GitHub account, join a squad or get assigned to a random squad, contribute code, and earn Swag! If you're unsure where to start, you can check out{' '}
        <a
          className="inline-block border-b-2 border-transparent text-primary-2 transition-[border-color] duration-200 hover:border-primary-2"
          href="https://goodfirstissue.dev"
          target="_blank"
          rel="noreferrer"
        >
          goodfirstissue.dev
        </a>
        .
      </>
    ),
  },
  {
    question: 'How many members can join a squad?',
    answer: (
      <>
        Each squad can have a maximum of 5 members.
        <br />
        If you can't find all 5 members, you can choose to allow random people to join your squad.
        <br />
      </>
    ),
  },
  {
    question: 'How is the score calculated?',
    answer: (
      <>
        Every hour, we calculate the number of <strong>MERGED PRs</strong> for each squad member and sum them up. Each PR is worth 1 point. At the end of the event, the top 60 squads will receive awesome swag! You can find the calculation method{' '}
        <a
          className="inline-block border-b-2 border-transparent text-primary-2 transition-[border-color] duration-200 hover:border-primary-2"
          href="https://github.com/novuhq/hacksquad-background/blob/main/src/services/github/github.service.ts"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        .
      </>
    ),
  },
  {
    question: 'How many people will receive swag?',
    answer: <>The top 60 squads, comprising approximately 300 individuals, will win awesome swag!</>,
  },
  {
    question: 'Can I register for both Hacktoberfest and Hacksquad?',
    answer:
      'Yes, and it's even recommended! Each contribution will count for both Hacktoberfest and HackSquad.',
  },
  {
    question: 'Do I need assistance to contribute code?',
    answer: 'You can join a squad and invite friends, or we will automatically assign you to other squads.',
  },
  {
    question: 'To which repositories can I contribute?',
    answer: 'You can contribute to any public repository you prefer. Please ensure not to spam, as we do monitor contributions!',
  },
  {
    question: 'If my team wins, will I get SWAG?',
    answer: 'To win swag, even if your team wins, you would need to have at least 1 MERGED PR.',
  },
  {
    question: 'How can I get support, updates, or find squad members?',
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
        .
      </>
    ),
  },
  {
    question: 'Is the swag in the picture the actual swag?',
    answer: (
      <>
        Most of it is! We will also add more Swag from our sponsors.
        <br />
        We haven't finalized everything yet.
      </>
    ),
  },
  {
    question: 'How long will it take to receive the swag?',
    answer: (
      <>
        We are sending the swag from the US.
        <br />
        We expect it to reach everyone within 60-90 days.
      </>
    ),
  },
  {
    question: 'Do I need to pay duty for the SWAG?',
    answer: <>No, we are taking care of it!</>,
  },
  {
    question: 'I want to host a workshop during the event in October.',
    answer:
      "That's great! We would be delighted to give you a platform. Please email us at nevo@novu.co.",
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
