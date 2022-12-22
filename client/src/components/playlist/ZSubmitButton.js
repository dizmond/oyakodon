import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
    color: green;
    background-color: white;
    border-radius: 10%;
    border-color: green;
    width: 5rem;
    height: 2.5rem;
    padding: 1rem;
    align-items: center;
    font-size: 1rem;
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


export default function ZSubmitButton(props) {

    let dontdo = (event) => { //THIS IS INVOKED ON BUTTON PRESS OR PRESSING ENTER FROM SEARCH BAR
        event.preventDefault(); //THIS IS KEEPING THE PAGE FROM RELOADING
        console.log("BUTTON-PRESSED")
      }

    return (
            <StyledButton
            //onChange={props.onChange}
            onClick={(e) => dontdo(e)}> Submit </StyledButton>
    );
};