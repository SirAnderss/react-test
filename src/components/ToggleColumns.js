import React from 'react';

function ToggleColumns(props) {
  const onCheckboxClick = e => {
    props.onCheckboxClick(e.target.name, e.target.checked);
  };

  return (
    <div className='toggle-columns'>
      {/* Bind handlers and props */}
      {Object.keys(props.columns).map((column, index) => {
        return (
          <div key={index}>
            <label>{column}</label>
            <input
              type='checkbox'
              name={column}
              checked={props.columns[column]}
              onChange={onCheckboxClick}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ToggleColumns;
