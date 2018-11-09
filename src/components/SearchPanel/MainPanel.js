import React, { createRef } from 'react';
import Flatpickr from 'react-flatpickr';
import { cold } from 'react-hot-loader';
import 'flatpickr/dist/themes/material_green.css';
import { AutoComplete } from '../Input';
import { airports } from './data';
import LengthOfStay from './LengthOfStay';
import loop from '../../images/loop.svg';
import arrowRight from '../../images/arrow-right.svg';

const searchKeys = ['name', 'code'];

const MainPanel = ({
  setOrigin, expertMode, toggleRoundTrip, setDestination, roundTrip, monthSearch, setDateRange, dateRange,
}) => {
  const datePickerRef = createRef();
  const renderSuggestion = suggestion => (
    <div>
      {suggestion.name} ({suggestion.code})
    </div>
  );

  const selectDate = (datePick) => {
    if (datePick.length > 1) {
      datePickerRef.current.close();
    }
    setDateRange(datePick);
  };

  let icon = loop;
  if (!roundTrip) {
    icon = arrowRight;
  }

  return (
    <div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-2/5 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            htmlFor="origin"
          >Origin
          </label>
          <AutoComplete
            selectField={(d) => { setOrigin(d); }}
            searchKeys={searchKeys}
            className="text-center appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"
            id="origin"
            placeholder="Airport Name or Code"
            choices={airports}
            renderSuggestion={renderSuggestion}
            suggestionKey="name"
          />
          {expertMode && (
          <input
            placeholder="Outbound Routing Codes"
            className="text-center appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mt-3 leading-tight focus:outline-none focus:bg-white focus:border-grey"
          />
          )}
        </div>
        <div
          role="button"
          tabIndex={0}
          className="w-full md:w-1/5 px-3 self-center no-outline cursor-pointer"
          onKeyDown={toggleRoundTrip}
          onClick={toggleRoundTrip}
        >
          <img alt="arrow" src={icon} style={{ transform: 'scale(4)' }} />
        </div>
        <div className="w-full md:w-2/5">
          <label
            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            htmlFor="destination"
          >Destination
          </label>
          <AutoComplete
            selectField={(d) => { setDestination(d); }}
            searchKeys={searchKeys}
            className="text-center appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"
            id="origin"
            placeholder="Airport Name or Code"
            choices={airports}
            renderSuggestion={renderSuggestion}
            suggestionKey="name"
          />
          {expertMode && roundTrip && (
          <input
            placeholder="Return Routing Codes"
            className="text-center appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mt-3 leading-tight focus:outline-none focus:bg-white focus:border-grey"
          />
          )}
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-3/4 px-3" style={{ margin: '0 auto' }}>
          <label
            className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            Travel Date{roundTrip && !monthSearch && 's'}
          </label>
          <Flatpickr
            ref={datePickerRef}
            className="text-center appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey"
            data-enable-time
            value={dateRange}
            onChange={selectDate}
            placeholder={
              monthSearch
                ? 'or a month later...'
                : `Someday${roundTrip ? ' to Another Day' : ''}`
            }
            options={{
              mode: roundTrip && !monthSearch ? 'range' : undefined,
              minDate: 'today',
              enableTime: false,
              dateFormat: 'F j, Y',
              position: ' center',
            }}
          />
          {monthSearch && roundTrip && <LengthOfStay />}
        </div>
      </div>
    </div>
  );
};

export default cold(MainPanel);