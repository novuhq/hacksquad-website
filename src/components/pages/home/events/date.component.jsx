'use client';

import moment from 'moment';
import PropTypes from 'prop-types';

const DateComponent = ({ date }) => (
    <span
      className="text-gray-1"
      dangerouslySetInnerHTML={{ __html: moment.utc(date).local().format('lll') }}
    />
  );

export default DateComponent;

DateComponent.propTypes = {
  date: PropTypes.string,
};
