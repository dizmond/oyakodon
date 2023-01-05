import React from 'react';
import styled from 'styled-components';
import SubmitButton from '../buttons/SubmitButton';

const StyledForm = styled.form`
  display: flex;
  background-color: #444444;
  border-radius: 2px;
  `
const StyledInput = styled.input`
  display:flex;
  border-radius: 10px;
    border-color: #444444;
    width: 35rem;
    font-size: 2.25rem;
  `

export default function PokemonSearch(props) {

  return (
    <StyledForm
      onSubmit={props.onSubmit}>
      <StyledInput
        type="text"
        id="header-search"
        placeholder="howdy parder"
        name="name"
        onChange={props.onChange}

      ></StyledInput>
      <SubmitButton></SubmitButton>
    </StyledForm>
  );
}
