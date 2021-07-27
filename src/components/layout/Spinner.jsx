import React, { Fragment } from 'react';
import SpinnerWrapper from './styles';
import spinner from './spinner.gif';
const Spinner = () => {
  return (
    <Fragment>
      <SpinnerWrapper>
        <img src={spinner} alt='Loading ... ' />
      </SpinnerWrapper>
    </Fragment>
  );
};

export default Spinner;
