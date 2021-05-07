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
    <StyledSearchBarWrap>
      <StyledTitle>GitHub Profile Finder</StyledTitle>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput name="userId" value={userId} onChange={onChange} placeholder="GitHub 아이디를 입력하세요." />
        <StyledButton type="submit">검색</StyledButton>
      </StyledForm>
    </StyledSearchBarWrap>
  );
}

const StyledSearchBarWrap = styled.div`
  display: flex;
`;

const StyledTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.border};
`;

const StyledForm = styled.form`
  display: flex;
  padding-left: 50px;
  font-size: 15px;
`;

const StyledInput = styled.input`
  width: 330px;
  border-radius: 10px;
  border-color: ${({ theme }) => theme.colors.border};
  background-color: none;

  &:focus {
    outline: none;
  }
`;

const StyledButton = styled.button`
  width: 65px;
  margin-left: 10px;
  border-radius: 10px;
  border-color: ${({ theme }) => theme.colors.text};
  background-color: none;
`;

export default SearchBar;
