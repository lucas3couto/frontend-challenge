import React, { useEffect, useRef } from 'react';
import * as S from './styled'

export default function Input({ label, right, error,  Icon, ...rest }) {
  
  const err = (v) => {
    if(!v){
      return true
    } else {
      return false
    }
  }

  return (
    <>
     <S.Label>
      {label}
    </S.Label>
    <S.Container
      error={error && err(error)}
    >
      {Icon && <Icon color="#ab99c0" style={{ marginRight: 5}} size={24} />}
      <S.Input {...rest} />
      {right}
    </S.Container>
    </>
  )
}