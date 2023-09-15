import Image from 'next/image';

import Link from 'components/shared/link';

import User1ContentPhoto from './images/user-1-content.jpg';
import User1Photo from './images/user-1.jpg';
import User2Photo from './images/user-2.jpg';
import User3Photo from './images/user-3.jpg';
import User4ContentPhoto from './images/user-4-content.jpg';
import User4Photo from './images/user-4.jpg';
import User5Photo from './images/user-5.jpg';
import User6Photo from './images/user-6.jpg';
import User7ContentPhoto from './images/user-7-content.jpg';
import User7Photo from './images/user-7.jpg';
import User8Photo from './images/user-8.jpg';

const list = [
  {
    twitterPhoto: User1Photo,
    twitterName: 'Sumit | Javascript + React',
    twitterAccountName: 'sumitsaurabh927',
    twitterUrl: 'https://twitter.com/sumitsaurabh927/status/1689578264145395713',
    text: (
      <>
        I am Proud to be a winner of HackSquad 2022
        <p className="text-with-hashtags">
          <span>@HackSquadDev</span>
          <span>@novuhq</span>
          <span>@dailydotdev</span>
          <span>@amplication</span>
          <span>@ToolJet</span>
        </p>
      </>
    ),
    photo: User1ContentPhoto,
  },
  {
    twitterPhoto: User2Photo,
    twitterName: 'Priyanshu',
    twitterAccountName: 'Kumar_Sons_off',
    twitterUrl: 'https://twitter.com/Kumar_Sons_off/status/1647967956343873537',
    text: (
      <>
        Bit late, but finally the HackSquad22 Swags arrived. 🎉
        <br />
        <br />A great thank to <span>@nevodavid</span> & the team behind for organising such a
        friendly & pleasant competition.
        <br />
        <br />
        Open-Source FTW! 🚀
        <p className="text-with-hashtags">
          <span>@HackSquadDev</span>
          <span>@novuhq</span>
          <span>@dailydotdev</span>
          <span>@amplication</span>
          <span>@ToolJet</span>
        </p>
      </>
    ),
  },
  {
    twitterPhoto: User3Photo,
    twitterName: 'Soham Gupta',
    twitterAccountName: '_soham_gupta',
    twitterUrl: 'https://twitter.com/_soham_gupta/status/1647223927603884036',
    text: (
      <>
        Although the swags are a little bit big 😅, I am nonetheless honoured to have won HackSquad
        2022.
        <br />
        <br />
        Open source with teams is always fun! 🫡
        <br />
        <br />
        Thanks to <span>@nevodavid</span>, the Hacksquad 2022 challenge went really smoothly.
        <p className="text-with-hashtags">
          <span>@HackSquadDev</span>
          <span>@dailydotdev</span>
          <span>@amplication</span>
          <span>@ToolJet</span>
        </p>
      </>
    ),
  },
  {
    twitterPhoto: User4Photo,
    twitterName: 'Srikar',
    twitterAccountName: 'Srikarismad',
    twitterUrl: 'https://twitter.com/Srikarismad/status/1643277099447517184',
    text: (
      <>
        Glad to win these amazing swags from HackSquad 2022 🤩! . These look absolutely amazing and
        the quality is just fab 🙌.
        <br />
        <br />
        Motivates me more to participate in such events and give my best.
        <br />
        <br />
        Open source with teams is always fun 🫡.
        <p className="text-with-hashtags">
          <span>@HackSquadDev</span>
          <span>@novuhq</span>
        </p>
      </>
    ),
    photo: User4ContentPhoto,
  },
  {
    twitterPhoto: User5Photo,
    twitterName: 'Manish Kumar Barnwal #Hack4Bengal #NFTDay',
    twitterAccountName: 'imanishbarnwal',
    twitterUrl: 'https://twitter.com/imanishbarnwal/status/1640948881554014208',
    text: (
      <>
        I am Proud to be a winner of HackSquad 2022 🏆 and here's my awesome winning swags 🫶
        <br />
        <br />
        Thanks for sending <span>@HackSquadDev</span>
        <span>@novuhq</span>
        <span>@dailydotdev</span>
        <span>@amplication</span>
        <span>@ToolJet</span>✨
        <br />
        <br />
        Also, thanks to my teammates <span>@hvbajoria</span>
        <span>@MahantyShatanik</span>
        <span>@ProsenjitSwarn5</span>
        <span>@SayanMu79522282</span>
        <p className="text-with-hashtags">
          <span>@HackSquadDev</span>
          <span>@novuhq</span>
          <span>@dailydotdev</span>
          <span>@amplication</span>
          <span>@ToolJet</span>
        </p>
      </>
    ),
  },
  {
    twitterPhoto: User6Photo,
    twitterName: 'Prosenjit Swarnakar',
    twitterAccountName: 'ProsenjitSwarn5',
    twitterUrl: 'https://twitter.com/ProsenjitSwarn5/status/1642069023847518208',
    text: (
      <>
        I am proud to be a winner of HackSquad 2022🏆and here are my awesome swags 🫶🏽
        <br />
        <br /> Thanks, <span>@HackSquadDev</span>
        <span>@novuhq</span>
        <span>@dailydotdev</span>
        <span>@amplication</span>
        <span>@ToolJet</span> for sending those awesome swags. <br />
        <br />
        Also thanks to all my teammates <span>@MahantyShatanik</span>
        <span>@imanishbarnwal</span>
        <span>@SayanMu79522282</span>
        <span>@hvbajoria</span>
        for this.
      </>
    ),
  },
  {
    twitterPhoto: User7Photo,
    twitterName: 'ANURAG TIWARI',
    twitterAccountName: 'danurag23',
    twitterUrl: 'https://twitter.com/danurag23/status/1646013794693570561',
    text: (
      <>
        Happy to share that I recieved swags from <span>@HackSquadDev</span>
        <br />
        <br />
        <span>#opensource</span> Proud to be winner!!
      </>
    ),
    photo: User7ContentPhoto,
  },
  {
    twitterPhoto: User8Photo,
    twitterName: 'Mouri Roy',
    twitterAccountName: 'Logno_Roy',
    twitterUrl: 'https://twitter.com/Logno_Roy/status/1648053983347642368',
    text: (
      <>
        Finally received my <span>@HackSquadDev</span> swags! Proud to be a winner and Looking
        forward to more such events by <span>@nevodavid</span>
        <p className="text-with-hashtags">
          <span>@HackSquadDev</span>
          <span>@dailydotdev</span>
          <span>@amplication</span>
          <span>@ToolJet</span>
          <span>#opensource</span>
          <span>#hackathon</span>
          <span>#programming</span>
          <span>#Web3</span>
          <span>#webdeveloper</span>
        </p>
      </>
    ),
  },
];

const TwitterTimeline = () => (
  <section className="safe-paddings relative py-[100px] md:py-20 sm:py-16 xs:py-12" id="swag">
    <div className="container text-center">
      <h2 className="mx-auto max-w-3xl font-titles text-60 font-semibold leading-1.125 lg:text-42 md:text-36 xxs:max-w-[246px]">
        Join the party
      </h2>
      <p className="mx-auto mt-5 max-w-3xl text-20 leading-normal text-gray-1 md:text-18">
        Dive into last year's SWAG of Hacksquad with tweets! Relive the excitement, innovation, and
        highlights that made it unforgettable.
      </p>
      <Link
        className="mt-7 inline-flex items-center gap-x-2.5 text-20 font-medium leading-normal text-purple"
        to="https://twitter.com/HackSquadDev"
      >
        Explore more on X
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
          <path
            d="M13.498 2.5L2.49805 13.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M6.16406 2.5H13.4974V9.83333"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="square"
          />
        </svg>
      </Link>
    </div>
    <div className="container mt-[74px] md:mt-16 sm:mt-10">
      <ul className="columns-4 gap-x-8 space-y-8 lg:columns-3 sm:columns-2 sm:gap-x-4 sm:space-y-4 xs:columns-1">
        {list.map(
          ({ twitterPhoto, twitterName, twitterAccountName, twitterUrl, text, photo }, index) => (
            <li className="" key={index}>
              <Link
                className="inline-block rounded-md bg-[rgba(255,255,255,0.08)] px-5 py-6 transition-colors duration-200 hover:bg-[rgba(255,255,255,0.10)] sm:p-4"
                to={twitterUrl}
                target="_blank"
              >
                <div className="flex flex-wrap gap-x-1 text-16 leading-snug md:text-14 [&>*]:text-purple">
                  {text}
                </div>
                {photo && <Image className="mt-3 xs:w-full" src={photo} width={240} alt="" />}
                <div className="mt-10 flex gap-x-3">
                  <Image
                    className="h-9 w-9 shrink-0 rounded-full"
                    src={twitterPhoto}
                    alt=""
                    width={36}
                    height={36}
                  />
                  <div className="flex flex-col gap-y-1 text-14 leading-1.125 sm:break-all">
                    <h3 className="font-medium">{twitterName}</h3>
                    <p className="opacity-40">@{twitterAccountName}</p>
                  </div>
                </div>
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  </section>
);

export default TwitterTimeline;
