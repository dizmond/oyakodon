import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.menu`
  display: flex;
  justify-content: center;`

const StyledCard = styled.image`
    display: flex;
    color:white;
    background-color: green;
    border-radius: 10px;
    font-family: 'Press Start 2P', sans-serif;
    font-size: 1rem;
  `
const StyledDescription = styled.menu`
    display:flex;
    width:  15rem;
    height: 10rem;
    margin: auto;
    overflow-y: auto;
    font-size: 0.8rem;

    

    `
export default function ImageCard(props) {
  // const src = props.src;

  return (
    <StyledCard>
      <div>
        <StyledTitle><p>#{props.number} {props.name}</p> </StyledTitle>
        <img src={props.src} height={props.height} width={props.width} />
      </div>
      <StyledDescription>
        <p>{props.description}</p>
      </StyledDescription>
    </StyledCard >
    // <OurImage>
    //   <img src={src} height={325} width={325} />

    // </OurImage>

  );
}