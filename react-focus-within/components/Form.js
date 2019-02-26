import React from 'react';
import styled from 'styled-components'
import Stack from 'stack-styled'

const Form = styled(Stack)`
  padding: 2rem;
  
  &:focus-within {
    background: yellow;    
  }
`;

export default Form