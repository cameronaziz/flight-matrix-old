import React, { useState } from 'react';
import { cold } from 'react-hot-loader';

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState(null);

  const select = (e, value) => {
    // e.stopPropagation();
    setSelection(value)
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
      <div
        tabIndex={0}
        role="button"
        className={`option${selection === '1' ? 'active' : ''}`}
        onKeyPress={(e) => { select(e, '1'); }}
        onClick={(e) => { select(e, '1'); }}
      >1
      </div>
      <div
        tabIndex={0}
        role="button"
        className={`option${selection === '2' ? 'active' : ''}`}
        onKeyPress={(e) => { select(e, '2'); }}
        onClick={(e) => { select(e, '2'); }}
      >2
      </div>
      <div
        tabIndex={0}
        role="button"
        className={`option${selection === '3' ? 'active' : ''}`}
        onKeyPress={(e) => { select(e, '3'); }}
        onClick={(e) => { select(e, '3'); }}
      >3
      </div>
      <div
        tabIndex={0}
        role="button"
        className={`option${selection === '4' ? 'active' : ''}`}
        onKeyPress={(e) => { select(e, '4'); }}
        onClick={(e) => { select(e, '4'); }}
      >4
      </div>
      <div
        tabIndex={0}
        role="button"
        className={`option${selection === '5' ? 'active' : ''}`}
        onKeyPress={(e) => { select(e, '5'); }}
        onClick={(e) => { select(e, '5'); }}
      >5
      </div>
    </div>
  );
};
export default cold(Dropdown);
