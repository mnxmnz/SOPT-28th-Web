import React, { useState } from 'react';
import styled from 'styled-components';

type SearchBarProps = {
  onSubmit: (userId: string) => void;
};

function SearchBar({ onSubmit }: SearchBarProps) {
  const [userId, setUserId] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit(userId);
    setUserId('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="userId" value={userId} onChange={onChange}></input>
      <button type="submit">검색</button>
    </form>
  );
}

export default SearchBar;
