import React from 'react';
import styled from 'styled-components'
import { focusRing } from './mixins'

const Button = styled('button')`
  font-size: 150%;
  border-radius: 1rem;
  
  &:focus {
    ${focusRing('blue')}
  }
`

export default Button;