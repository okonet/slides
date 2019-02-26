import React from 'react';
import styled from 'styled-components'
import { focusRing } from './mixins'
import InputWithoutFocus from './InputWithoutFocus'

const Input = styled(InputWithoutFocus)`
  &:focus {
    ${focusRing('blue')}
  }
`

export default Input;