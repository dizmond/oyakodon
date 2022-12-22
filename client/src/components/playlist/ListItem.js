import React from 'react';
import styled from 'styled-components';


const StyledA = styled.a`
text-decoration:none;
`
//idk what this does but I can't nest it in the below function ^


//straight from tutorial example, this is called by the actual list 
export default function ListItem(props) {
    return <li>{props.value}</li>;
  }

  