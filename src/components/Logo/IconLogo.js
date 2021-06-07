import React from 'react';
import PropTypes from 'prop-types';
import logosvg from './logosvg.svg';

const IconLogo = props => {
  const { className, ...rest } = props;

  return (
 
    <img       src={logosvg}   />
    
  );
};

const { string } = PropTypes;

IconLogo.defaultProps = {
  className: null,
};

IconLogo.propTypes = {
  className: string,
};

export default IconLogo;
