import React, { createContext } from 'react';

export const SearchContext = createContext({
  searchQuery: '',
});

export const SearchContextProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const getSearchQuery = (e) => {
    setSearchQuery(e.target.value.toLocaleLowerCase());
  };

  const value = { searchQuery, getSearchQuery };
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
