import Hero from 'components/pages/thank-you/hero';
import LayoutMain from 'layouts/layouts/layout-main';

const ThankYou = () => (
  <LayoutMain
    seo={{
      isRobotsNoindexPage: true,
    }}
    withoutFooter
  >
    <Hero />
  </LayoutMain>
);

export default ThankYou;
