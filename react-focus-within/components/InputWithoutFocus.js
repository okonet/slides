import React from 'react';
import styled from 'styled-components'

const InputWithoutFocus = styled('input')`
  padding: 1rem;
  font-size: 150%;
  border-radius: 1rem;
  border: 3px solid #CCC;
  
  &:focus {
    outline: none;
  }
`

export default InputWithoutFocus;