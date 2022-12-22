import React from 'react';
import styled from 'styled-components';
import ZSubmitButton from './ZSubmitButton';

//import confu from '../App.js'

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

// export function confu() {
//     console.log("confu");
// }
//<StyledForm action="/" method="get">
export default function InputSearch(props) {

    let inputcomponentchange = (event) => {
        //event.preventDefault();
        //console.log("onchange")
        //console.log(event.target.value)
      }

    //   let zdontdo = (event) => {
    //     //event.preventDefault();
    //     console.log("oninput")
    //     testexport = "yuh"
    //   }

      //onInput={(e) => dontdo(e)}
 return (
    //<StyledForm action={props} method="get">
    <StyledForm>
        <StyledInput
            type="text"
            id="header-search"
            placeholder="howdy parder"
            name="name"
            onChange={props.onChange}
            //onInput={() => confu()}
            
        />
        <ZSubmitButton></ZSubmitButton>
    </StyledForm>
);
}
