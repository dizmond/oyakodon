import React from 'react';
import styled from 'styled-components';


const StyledA = styled.a`
text-decoration:none;
`
//idk what this does but I can't nest it in the below function ^


export default function ListItem(props) {
    return <li>{props.value}</li>;
  }

  