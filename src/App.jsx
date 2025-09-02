import React, { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  const selectGood = good => {
    setSelectedGood(good);
  };

  const removeSelection = () => {
    setSelectedGood(null);
  };

  return (
    <div className="container">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h1 className="title" data-cy="Title">
          {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
        </h1>

        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            onClick={removeSelection}
            aria-label="Remove selection"
            style={{
              marginLeft: '10px',
              cursor: 'pointer',
              background: 'transparent',
              border: 'none',
              fontWeight: 'bold',
              fontSize: '1rem',
            }}
          >
            x
          </button>
        )}
      </div>

      <ul>
        {goods.map(good => (
          <li
            key={good}
            data-cy="Good"
            className={
              selectedGood === good ? 'has-background-success-light' : ''
            }
          >
            <span data-cy="GoodTitle">{good}</span>
            {selectedGood === good ? (
              <button
                data-cy="RemoveButton"
                type="button"
                className="is-info"
                onClick={removeSelection}
              >
                -
              </button>
            ) : (
              <button
                data-cy="AddButton"
                type="button"
                className="is-success"
                onClick={() => selectGood(good)}
              >
                +
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
