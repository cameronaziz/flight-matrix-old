/* eslint-disable react/no-unused-state */
import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';
import withContext from './withContext';

const initialState = {
  settings: {},
};

const Context = createContext({
  state: initialState,
});

class SettingsProvider extends Component {
  state = initialState;

  printState = () => {
    console.log('Settings Context State:', this.state);
  }

  setSetting = ({ setting, value }) => {
    this.setState((prevState) => {
      prevState.settings[setting] = value;
      return prevState;
    });
  }

  render() {
    const { children } = this.props;
    return (
      <Context.Provider
        value={{
          state: this.state,
          printState: this.printState,
          setSetting: this.setSetting,
        }}
      >
        {children}
      </Context.Provider>
    );
  }
}

SettingsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default {
  Provider: SettingsProvider,
  Context,
  withContext: (component, contextName) => withContext(Context.Consumer, component, contextName),
};
