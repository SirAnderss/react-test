import React, { Component } from 'react'

export default class ProductList extends Component {

  render() {
    return (
      <div id="product-list">
        <header>
          <strong>Product List (0 items)</strong>
        </header>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
          {/* Display products here in new table rows */}
          </tbody>
        </table>
      </div>
    )
  }
}
