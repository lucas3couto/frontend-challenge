import React from 'react'
import * as S from './styled'

const Card = ({ children }) => {
  return(
    <S.Card>
      {children}
    </S.Card>
  )
}

export default Card