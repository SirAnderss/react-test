import React from 'react';
import '../styles/Search.css';
import ToggleColumns from './ToggleColumns';
import ProductList from './ProductList';
import FilterForm from './FilterForm';

function Search(props) {
  const [allProducts, setAllProducts] = React.useState([]);
  const [chunkProducts, setChunkProducts] = React.useState([]);
  const [productManager, setProductManager] = React.useState({
    priceFrom: '',
    priceTo: '',
    columns: {
      id: true,
      name: true,
      department: true,
      currency: true,
      price: true,
    },
  });

  const onPriceInputChange = (name, value) => {
    setProductManager(productManager => ({
      ...productManager,
      [name]: value,
    }));
    // to-do: implement price change handler
  };

  const filterProducts = () => {
    if (!productManager.priceFrom && !productManager.priceTo) {
      setChunkProducts(props.products);
    } else {
      if (productManager.priceFrom === productManager.priceTo) {
        if (
          productManager.priceFrom === 100 &&
          productManager.priceTo === 100
        ) {
          setChunkProducts([]);
        } else {
          setChunkProducts([
            chunkProducts.find(
              item => item.price === parseFloat(productManager.priceFrom)
            ),
          ]);
        }
      } else if (productManager.priceTo > productManager.priceFrom) {
        setChunkProducts(
          chunkProducts.filter(
            item =>
              item.price >= parseFloat(productManager.priceFrom) &&
              item.price <= parseFloat(productManager.priceTo)
          )
        );
      } else if (productManager.priceFrom > productManager.priceTo) {
        setChunkProducts(props.products);
      } else if (
        productManager.priceFrom > 0 &&
        productManager.priceTo === ''
      ) {
        setChunkProducts(
          chunkProducts.filter(
            item => item.price >= parseFloat(productManager.priceFrom)
          )
        );
      } else if (
        productManager.priceFrom === '' &&
        productManager.priceTo > 0
      ) {
        setChunkProducts(
          chunkProducts.filter(
            item => item.price < parseFloat(productManager.priceTo)
          )
        );
      }
    }
    // to-do: implement handler for filtering products by price range
  };

  const onCheckboxClick = (name, checked) => {
    setProductManager(productManager => ({
      ...productManager,
      columns: {
        ...productManager.columns,
        [name]: checked,
      },
    }));
    // to-do: implement checkbox click handler
  };

  React.useEffect(() => {
    filterProducts();
  }, [productManager.priceFrom, productManager.priceTo]);

  return (
    <div className='Products'>
      <FilterForm
        priceFrom={productManager.priceFrom}
        priceTo={productManager.priceTo}
        onPriceInputChange={onPriceInputChange}
      />

      <ToggleColumns
        onCheckboxClick={onCheckboxClick}
        columns={productManager.columns}
      />

      <ProductList products={chunkProducts} columns={productManager.columns} />
    </div>
  );
}

export default Search;
