import React from 'react';
import styled from 'styled-components';


const StyledButton = styled.button`
    display: flex;
    color: green;
    background-color: white;
    border-radius: 10%;
    border-color: green;
    width: 7rem;
    height: 5rem;
    padding: 1rem;
    align-items: center;
    font-size: 3rem;
    font-weight: 600;
    border-width: 5px;
    justify-content: center;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 1px;
    text-shadow: 1px 1px gray;
  `
const StyledA = styled.a`
  text-decoration:none;
`


export default function SubmitButton(props) {

    return (
        <StyledButton
            onClickCapture={props.onClickCapture}//WORKS BEST SO FAR BUBBLING 
        >↵ </StyledButton>
    );
};