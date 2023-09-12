import Image from 'next/image';

import crowdDev from 'svgs/logos/crowd-dev.svg';
import hanko from 'svgs/logos/hanko.svg';
import toolJet from 'svgs/logos/tool-jet.svg';
import wasp from 'svgs/logos/wasp.svg';

const logos = [
  {
    src: toolJet,
    alt: 'ToolJet',
    width: 119,
    height: 42,
  },
  {
    src: crowdDev,
    alt: 'CrowdDev',
    width: 149,
    height: 44,
  },
  {
    src: hanko,
    alt: 'Hanko',
    width: 126,
    height: 44,
  },
  {
    src: wasp,
    alt: 'Wasp',
    width: 121,
    height: 44,
  },
];

const Sponsors = () => (
  <div className="container mt-28 py-10">
    <ul className="flex flex-wrap justify-center gap-x-[111px] gap-y-10 md:gap-x-16 sm:gap-x-10">
      {logos.map((props, index) => (
        <li className="shrink-0" key={index}>
          <Image className="w-auto sm:h-9" priority {...props} />
        </li>
      ))}
    </ul>
  </div>
);

export default Sponsors;
