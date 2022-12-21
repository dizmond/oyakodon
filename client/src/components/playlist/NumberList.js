import React from 'react';
import styled from 'styled-components';

import ListItem from './ListItem';


const StyledMenu = styled.menu`
display: flex;
  color: black;
  background-color: white;
  border-radius: 1%;
  border-color: pink;
  width: 150rem;
  height: 10rem;
  padding: 1rem;
  align-items: left-center;
  font-size: 1.5rem;
  font-weight: 600;
  border-width: 5px;
  justify-content: left-center;
  font-family: 'Arial', sans-serif;
  letter-spacing: 1px;
  text-shadow: 1px 1px gray;
  max-height: 100%;
  overflow-y: auto;
`
//maxheight: 100% and overflow-y: auto make the modal scroll!

export default function NumberList(props) {
    //props is like the input it should be in the form of an ARRAY
    const vals = props.vals;
    //we MUST specify an argument to this function like
    //<NumberList vals = {thearray}></NumberedList>

    const listItems = vals.map((val) =>
      //the map function seems to listify this
      <ListItem key={val.toString()} value={val} />
    );

    //StyledMenu is the css for this component
    return (
        <StyledMenu>
      <ul>
        {listItems}
      </ul>
      </StyledMenu>
    );
  }