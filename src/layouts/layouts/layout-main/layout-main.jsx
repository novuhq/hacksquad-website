import PropTypes from 'prop-types';

import Header from 'components/shared/header';
import Seo from 'components/shared/seo';

const LayoutMain = ({ children }) => (
  <>
    <Seo />
    <Header />
    <main>{children}</main>
  </>
);

export default LayoutMain;

LayoutMain.propTypes = {
  children: PropTypes.node.isRequired,
};
