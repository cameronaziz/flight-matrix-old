import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { cold } from 'react-hot-loader';

const Dropdown = ({ choices }) => {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState(null);

  const select = (e, value) => {
    // e.stopPropagation();
    setSelection(value);
  };

  return (
    <div
      tabIndex={0}
      role="button"
      onKeyPress={() => { setOpen(!open); }}
      onClick={() => { setOpen(!open); }}
      className={`bg-grey-lighter text-grey-darker border border-grey-lighter rounded drop${open ? ' visible opacity' : ''}`}
    >
      <div className="option active placeholder text-xs tracking-wide text-grey-darker font-bold" data-value="placeholder">
        {selection ? `${selection} passenger${selection > 1 ? 's' : ''}` : 'No of Passengers'}
      </div>
      {choices.map((choice) => {
        let { value, label } = choice;
        if (typeof choice === 'string') {
          value = choice;
          label = choice;
        }
        return (
          <div
            key={value}
            tabIndex={0}
            role="button"
            className={`option${selection === value ? 'active' : ''}`}
            onKeyPress={(e) => { select(e, value); }}
            onClick={(e) => { select(e, value); }}
          >{label}
          </div>
        );
      })}
    </div>
  );
};

Dropdown.propTypes = {
  choices: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
        PropTypes.number,
      ]),
      label: PropTypes.string,
    }),
  ])).isRequired,
};

export default cold(Dropdown);
