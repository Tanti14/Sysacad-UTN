import React from 'react'
import { ButtonContent, StyledButton } from './styles'

export const CardButton = ({img, text}) => {
  return (
    <StyledButton>
        <ButtonContent>
            <img src={img} alt={img} />
            <p>{text}</p>
        </ButtonContent>
    </StyledButton>
  )
}
