import React from 'react';
import './App.css';
import ProductListing from './pages/Product-listing';
import { ProductContextProvider } from './contexts/ProductCtx';
import { SearchContextProvider } from './contexts/SearchCtx';

function App() {
  return (
    <ProductContextProvider>
      <SearchContextProvider>
        <ProductListing />
      </SearchContextProvider>
    </ProductContextProvider>
  );
}

export default App;
