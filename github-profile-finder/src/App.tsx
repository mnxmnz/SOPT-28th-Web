import React from 'react';
import SearchBar from './components/SearchBar';
import ResultCard from './components/ResultCard';

function App() {
  const onSubmit = (userId: string) => {
    console.log(userId);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      <ResultCard />
    </>
  );
}

export default App;
