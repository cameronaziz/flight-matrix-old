import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import { cold } from 'react-hot-loader';
import Fuse from 'fuse.js';

const airports = [
  {
    code: 'LAX',
    name: 'Los Angeles International Airport',
  },
  {
    code: 'JFK',
    name: 'John F. Kennedy International Airport',
  },
  {
    code: 'EWR',
    name: 'Newark Liberty International Airport',
  },
];

const getSuggestions = (value) => {
  const options = {
    shouldSort: true,
    threshold: 0.6,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 2,
    keys: [
      'name',
      'code',
    ],
  };
  const fuse = new Fuse(airports, options); // "list" is the item array
  const result = fuse.search(value);
  return result;
};

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => (
  <div>
    {suggestion.name} ({suggestion.code})
  </div>
);

const renderSuggestionsContainer = ({ containerProps, children }) => (
  <div {... containerProps} className="autosuggest-container">
    {children}
  </div>
);

const AirportField = ({ className, placeholder, selectField }) => {
  const [formValue, setFormValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const onChange = (event, { newValue }) => {
    setFormValue(newValue);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    const data = getSuggestions(value);
    setSuggestions(data);
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onSuggestionSelected = (evemt, data) => {
    if (selectField) {
      selectField(data);
    }
  };

  const inputProps = {
    placeholder,
    className,
    value: formValue,
    onChange,
  };

  return (
    <Autosuggest
      className={className}
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      onSuggestionSelected={onSuggestionSelected}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      renderSuggestionsContainer={renderSuggestionsContainer}
      inputProps={inputProps}
    />
  );
};

AirportField.propTypes = {
  selectField: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

AirportField.defaultProps = {
  selectField: undefined,
  placeholder: undefined,
  className: undefined,
};

export default cold(AirportField);
