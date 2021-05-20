import React from 'react';
import styled from 'styled-components';
import { IData } from '../types';

function ResultCard({ data }: IData) {
  return (
    <StyledResultCardWrap>
      <StyledPhoto>
        <p>PHOTO</p>
        {data.avatar_url}
      </StyledPhoto>
      <StyledName>
        <p>NAME</p>
        {data.name}
      </StyledName>
      <StyledId>
        <p>ID</p>
        {data.login}
      </StyledId>
      <StyledBio>
        <p>BIO</p>
        {data.bio}
      </StyledBio>
      <StyledUser>
        <StyledFollowers>
          <p>Followers</p>
          {data.followers}
        </StyledFollowers>
        <StyledFollowing>
          <p>Following</p>
          {data.following}
        </StyledFollowing>
      </StyledUser>
    </StyledResultCardWrap>
  );
}

const StyledResultCardWrap = styled.div`
  width: 76rem;
  height: 50rem;
  border-radius: 1rem;
  margin-top: 3rem;
  padding: 1rem;
  font-size: 1.5rem;
  background-color: ${({ theme }) => theme.colors.card};

  p {
    font-weight: bold;
    margin-right: 2rem;
  }
`;

const StyledPhoto = styled.div`
  width: 30rem;
  height: 30rem;
  border: none 0.1rem;
  display: flex;
  align-items: center;
`;

const StyledName = styled.div`
  width: 30rem;
  height: 4rem;
  border: none 0.1rem;
  display: flex;
  align-items: center;
  padding: 0.3rem;
`;

const StyledId = styled.div`
  width: 30rem;
  height: 4rem;
  border: none 0.1rem;
  display: flex;
  align-items: center;
  padding: 0.3rem;
`;

const StyledBio = styled.div`
  width: 30rem;
  height: 7rem;
  border: none 0.1rem;
  display: flex;
  align-items: center;
  padding: 0.3rem;
`;

const StyledUser = styled.div`
  width: 30rem;
  height: 4rem;
  border: none 0.1rem;
  display: flex;
  align-items: center;
  padding: 0.3rem;
`;

const StyledFollowers = styled.div`
  width: 15rem;
  padding: 0.3rem;
`;

const StyledFollowing = styled.div`
  width: 15rem;
  padding: 0.3rem;
`;

export default ResultCard;
