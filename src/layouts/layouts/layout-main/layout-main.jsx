import Seo from 'components/shared/seo';

const LayoutMain = ({ children }) => (
  <>
    <Seo />
    <main>{children}</main>
  </>
);

export default LayoutMain;
