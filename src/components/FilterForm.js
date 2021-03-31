import React from 'react';

function FilterForm(props) {
  const onPriceInputChange = e => {
    props.onPriceInputChange(e.target.name, e.target.value);
  };

  return (
    <div>
      <label htmlFor='name'>Filter:</label>
      <input
        type='number'
        name='priceFrom'
        placeholder='Price from...'
        value={props.priceFrom}
        onChange={onPriceInputChange}
      />
      <input
        type='number'
        name='priceTo'
        placeholder='Price to...'
        value={props.priceTo}
        onChange={onPriceInputChange}
      />
    </div>
  );
}

export default FilterForm;
