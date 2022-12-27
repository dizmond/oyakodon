import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
    color: gray;
    background-color: white;
    border-radius: 10%;
    border-color: gray;
    width: 20rem;
    height: 3rem;
    padding: 1rem;
    align-items: center;
    font-size: 0.9rem;
    font-weight: 600;
    border-width: 5px;
    justify-content: center;
    cursor: pointer;
    font-family: 'Press Start 2P', sans-serif;
    letter-spacing: 1px;
    text-shadow: 1px 1px gray;
    
  `
const StyledA = styled.a`
  text-decoration:none;
`
export default function SubmitButton() {
  return (
    <StyledA href='/playlist'>
      <StyledButton> Generate Playlist </StyledButton>
    </StyledA>
  );
};