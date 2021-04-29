import React from 'react';
import SearchBar from './components/SearchBar';

function App() {
  const onSubmit = (userId: string) => {
    console.log(userId);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
    </>
  );
}

export default App;
