import React, { useEffect, useRef } from 'react';
import * as S from './styled'

export default function Input({ label,  Icon, ...rest }) {
  
  return (
    <>
     <S.Label>
      {label}
    </S.Label>
    <S.Container>
      {Icon && <Icon color="#ab99c0" style={{ marginRight: 5}} size={24} />}
      <S.Input {...rest} />
    </S.Container>
    </>
  )
}