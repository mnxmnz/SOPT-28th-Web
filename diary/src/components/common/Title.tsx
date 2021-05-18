import React from 'react';
import styled from 'styled-components';

function Title() {
  const title = '오늘의 일기';
  return <TitleWrap>{title}</TitleWrap>;
}

const TitleWrap = styled.div`
  height: 9.2rem;
  font-size: 3.6rem;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

export default Title;
