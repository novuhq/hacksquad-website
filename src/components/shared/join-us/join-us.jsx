import Link from 'components/shared/link';
import ArrowUp from 'svgs/arrow-up.inline.svg';
import discordIcon from 'svgs/discord.svg';
import githubIcon from 'svgs/github.svg';
import xIcon from 'svgs/x-com.svg';

const socialList = [
  {
    icon: xIcon,
    name: 'X',
    text: 'We’d love to stay connect with you.',
    link: 'https://twitter.com/HackSquadDev',
    linkText: 'Follow us',
  },
  {
    icon: discordIcon,
    name: 'Discord',
    text: 'Join our community and get help from our team.',
    link: 'https://discord.gg/vcqkXgT3Xr',
    linkText: 'Join us',
  },
  {
    icon: githubIcon,
    name: 'GitHub',
    text: 'Collaborate on open-source projects.',
    link: 'https://github.com/novuhq/hacksquad-website',
    linkText: 'Contribute',
  },
];

const JoinUs = () => (
  <section className="safe-paddings container py-28 text-center sm:py-20">
    <h2 className="mx-auto max-w-2xl font-titles text-48 font-semibold leading-1.125 md:text-42 xs:max-w-[246px]">
      Join to our community
    </h2>
    <p className="mt-3 text-20 leading-normal text-gray-1 md:text-18">
      Check out where you can find us and stay connected!
    </p>
    <ul className="grid-gap mx-auto my-12 grid max-w-[800px] grid-cols-12 lg:mt-12 md:mt-10">
      {socialList.map(({ icon, name, text, link, linkText }, index) => (
        <li className="border-with-gradient col-span-4 sm:col-span-full" key={index}>
          <Link
            className="group flex flex-col items-center justify-center rounded-[5px] bg-join-us px-7 py-7 hover:bg-join-us-hover md:p-6"
            to={link}
          >
            <img src={icon} width={40} height={40} alt="" loading="lazy" />
            <h3 className="mt-6 text-20 font-semibold leading-1.125">{name}</h3>
            <p className="mt-2 text-16 font-light leading-snug text-gray-1">{text}</p>
            <p className="mt-3 flex items-center gap-x-2.5 text-16 font-medium leading-normal text-purple transition-colors duration-200 group-hover:text-white">
              {linkText}
              <ArrowUp aria-hidden />
            </p>
          </Link>
        </li>
      ))}
    </ul>
  </section>
);

export default JoinUs;
