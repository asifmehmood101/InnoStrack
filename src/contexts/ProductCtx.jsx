import React, { createContext } from 'react';
import { listOfProducts } from '../utility/dummy-data';

export const ProductContext = createContext({
  products: [],
});

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = React.useState(() => {
    const storedData = localStorage.getItem('products');
    return storedData ? JSON.parse(storedData) : listOfProducts;
  });

  React.useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const addNewProduct = (product) => {
    const updateProducts = [...products, product];
    setProducts(updateProducts);
  };

  const value = { products, addNewProduct };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
