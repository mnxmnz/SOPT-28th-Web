import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ResultCard from './ResultCard';
import { getUserData } from '../lib/api';

function Result() {
  const [userState, setUserState] = useState({
    status: 'idle',
    data: null,
  });

  const { status, data } = userState;

  const onSubmit = async (userId: string) => {
    setUserState({ ...userState, status: 'pending' });
    try {
      const data = await getUserData(userId);
      if (data === null) throw Error;
      setUserState({ status: 'resolved', data: data });
    } catch (e) {
      setUserState({ status: 'rejected', data: null });
    }
  };

  switch (status) {
    case 'pending':
      return (
        <>
          <SearchBar onSubmit={onSubmit} />
          <div style={{ color: 'white', fontSize: '24px' }}>Loading...</div>;
        </>
      );
    case 'resolved':
      return (
        <>
          <SearchBar onSubmit={onSubmit} />
          <ResultCard data={data} />
        </>
      );
    case 'rejected':
      return (
        <>
          <SearchBar onSubmit={onSubmit} />
          <div style={{ color: 'white', fontSize: '24px' }}>User Not Found</div>;
        </>
      );
    case 'idle':
    default:
      return (
        <>
          <SearchBar onSubmit={onSubmit} />
        </>
      );
  }
}

export default Result;
