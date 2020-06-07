import React from 'react'
import * as S from './styled'

const Card = ({ children, ...props }) => {
  return(
    <S.Card
    {...props}
    >
      {children}
    </S.Card>
  )
}

export default Card