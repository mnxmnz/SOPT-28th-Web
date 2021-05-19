import React, { useState, useEffect } from 'react';
import Card from '../components/main/Card';
import NewCard from '../components/main/NewCard';
import { getCardData } from '../lib/api';

function Main(year: number, month: number) {
  const [userData, setUserData] = useState({
    id: 1,
    date: 20210501,
    title: '다이어리 제목 테스트',
    image: '',
    weather: '맑음',
    tags: ['테스트 태그'],
  });

  useEffect(() => {
    (async () => {
      const data = await getCardData();
      data[year] && setUserData(data[year][month]);
    })();
  }, [year, month]);

  return (
    <>
      {userData &&
        userData.map((data: any, index: number) => {
          return <Card key={index} userData={data} />;
        })}
      <NewCard />
    </>
  );
}

export default Main;
