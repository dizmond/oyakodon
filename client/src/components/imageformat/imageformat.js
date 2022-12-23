import React from 'react';
import styled from 'styled-components';

const styledImage = styled.image`
    display: flex;
    color: green;
    background-color: white;
    border-radius: 10%;
    border-color: green;
    width: 7rem;
    height: 5rem;
    padding: 1rem;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 600;
    border-width: 5px;
    justify-content: center;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 1px;
    text-shadow: 1px 1px gray;
  `

//   export default function InputSearch(props) {

//     return (
//        <StyledForm
//        onSubmit={props.onSubmit}>
//            <StyledInput
//                type="text"
//                id="header-search"
//                placeholder="howdy parder"
//                name="name"
//                onChange={props.onChange}
               
//            ></StyledInput>
//            <ZSubmitButton></ZSubmitButton>
//        </StyledForm>
//    );
//    }

  export default function OurImage(props) {
    const src = props.src;

    return (

       <OurImage>
        <img src = {src} height ={325} width={325} />

       </OurImage>

   );
   }