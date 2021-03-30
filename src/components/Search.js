import React, { Component } from 'react'
import '../styles/Search.css';
import ToggleColumns from './ToggleColumns';
import ProductList from './ProductList';
import FilterForm from './FilterForm';

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      priceFrom: '',
      priceTo: '',
      columns: {
        id: true,
        name: true,
        department: true,
        currency: true,
        price: true
      }
    };
  }

  onPriceInputChange = (name, value) => {
    // to-do: implement price change handler
  }

  filterProducts = () => {
    // to-do: implement handler for filtering products by price range
  }

  onCheckboxClick = (name, checked) => {
    // to-do: implement checkbox click handler
  }

  render() {
    let displayedProducts = [];
    return (
      <div className="Products">
        <FilterForm
          priceFrom={''}
          priceTo={''}
          onPriceInputChange={''} />

        <ToggleColumns
          onCheckboxClick={''}
          columns={''} />

        <ProductList
          products={displayedProducts}
          columns={''} />
      </div>
    );
  }
}
