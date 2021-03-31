import React from 'react';

function ProductList(props) {
  return (
    <div id='product-list'>
      <header>
        <strong>Product List (0 items)</strong>
      </header>
      {props.products.length > 0 ? (
        <table>
          <thead>
            <tr>
              {props.columns.id ? <th>ID</th> : null}
              {props.columns.name ? <th>Name</th> : null}
              {props.columns.department ? <th>Department</th> : null}
              {props.columns.currency ? <th>Currency</th> : null}
              {props.columns.price ? <th>Price</th> : null}
            </tr>
          </thead>
          <tbody>
            {props.products.map((item, key) => (
              <tr key={key}>
                {props.columns.id ? <td>{item.id}</td> : null}
                {props.columns.name ? <td>{item.name}</td> : null}
                {props.columns.department ? <td>{item.department}</td> : null}
                {props.columns.currency ? <td>{item.currency}</td> : null}
                {props.columns.price ? <td>{item.price}</td> : null}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <>No products found</>
      )}
    </div>
  );
}

export default ProductList;
