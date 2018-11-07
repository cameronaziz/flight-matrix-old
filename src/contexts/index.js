import React from 'react';
import PropTypes from 'prop-types';
import Settings from './Settings';

const Context = ({ children }) => (
  <Settings.Provider>
    {children}
  </Settings.Provider>
);

Context.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Context;
