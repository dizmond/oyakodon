import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.image`
    display: flex;
    color:white;
    background-color: green;
    border-radius: 10px;
  `
const StyledDescription = styled.menu`
    display:flex;
    width:  15rem;
    height: 10rem;
    margin: auto;
    overflow-y: auto;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    

    `
export default function ImageCard(props) {
  // const src = props.src;

  return (
    <StyledImage>
      <div>
        <p>#{props.number} {props.name}</p>
        <img src={props.src} height={props.height} width={props.width} />
      </div>
      <StyledDescription>
        <p>{props.description}</p>
      </StyledDescription>
    </StyledImage >
    // <OurImage>
    //   <img src={src} height={325} width={325} />

    // </OurImage>

  );
}