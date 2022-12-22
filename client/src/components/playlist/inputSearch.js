import React from 'react';
import styled from 'styled-components';
import ZSubmitButton from './ZSubmitButton';

const StyledForm = styled.form`
  display: flex;
  background-color: green;
  border-radius: 2px;
  `
const StyledInput = styled.input`
  display:flex;
  border-radius: 10px;
    border-color: green;
    width: 20rem;
  `

export default function InputSearch(props) {

    // let dontdo = (event) => {
    //     event.preventDefault();
    //     console.log("onchange")
    //   }

 return (
    //<StyledForm action={props} method="get">
    <StyledForm
    onSubmit={props.onSubmit}>
        <StyledInput
            type="text"
            id="header-search"
            placeholder="howdy parder"
            name="name"
            onChange={props.onChange}
            
        ></StyledInput>
        <ZSubmitButton></ZSubmitButton>
    </StyledForm>
);
}
