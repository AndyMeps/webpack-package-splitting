import React from 'react';

import { withMoment } from './hoc';

const DateLabel = (props) => {
  const formattedDate = props.moment(props.value).format(props.format);

  return (
    <span>{formattedDate}</span>
  );
};

export default withMoment(DateLabel);
