import React, { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductCtx';
import { Product } from '../product/product.component';
import { SearchContext } from '../../contexts/SearchCtx';

export const ProductList = () => {
  const { products } = useContext(ProductContext);
  const { searchQuery } = useContext(SearchContext);
  const [filterProducts, setFilteredProducts] = React.useState(products);

  React.useEffect(() => {
    const searchProducts = products.filter((filterProduct) => {
      return filterProduct.name.toLocaleLowerCase().includes(searchQuery);
    });

    setFilteredProducts(searchProducts);
  }, [products, searchQuery]);

  if (filterProducts.length === 0) {
    return (
      <p className='text-center mb-2 first:text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
        Sorry! No product found
      </p>
    );
  }

  return (
    <div className='grid grid-cols-4 gap-4 overflow-auto h-[50vh] items-start'>
      {filterProducts.map(({ id, ...rest }) => {
        return <Product key={id} {...rest} />;
      })}
    </div>
  );
};
