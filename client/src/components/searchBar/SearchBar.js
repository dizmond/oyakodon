import React from 'react';
import styled from 'styled-components';
import SubmitButton from './SubmitButton';

const StyledForm = styled.form`
  display: flex;
  background-color: pink;
  border-radius: 2px;
  `
const StyledInput = styled.input`
  display:flex;
  border-radius: 10px;
    border-color: pink;
    width: 20rem;
    font-family: 'Roboto', sans-serif;

  `
const SearchBar = () => (
  <StyledForm action="/" method="get">
    <StyledInput
      type="text"
      id="header-search"
      placeholder="Enter Pokemon Name"
      name="name"
    />
    <SubmitButton></SubmitButton>
  </StyledForm>
);

export default SearchBar;