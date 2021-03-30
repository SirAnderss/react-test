import React, { Component } from 'react'

export default class FilterForm extends Component {

  onPriceInputChange = (e) => {
    // to-do: implement handler
  }

  render() {
    return (
      <div>
        {/* Bind handlers and props */}
        <label htmlFor="name">Filter:</label>
        <input
          type="number"
          name="priceFrom"
          placeholder="Price from..." />
        <input
          type="number"
          name="priceTo"
          placeholder="Price to..." />
      </div>
    )
  }
}
