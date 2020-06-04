import React from 'react'
import * as S from './styled'

const Header = ({
  left,
  middle,
  right
}) => {
  return(
    <S.Header>
        <S.Item>
          {left}
        </S.Item>
        <S.Item>
          {middle}
        </S.Item>
        <S.Item>
          {right}
        </S.Item>
    </S.Header>
  )
}

export default Header
