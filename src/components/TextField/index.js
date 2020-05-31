import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import * as S from './styled'

export default function Input({ label, ...rest }) {
 
  return (
  <S.Container>
    <S.Label>{label}</S.Label>
    <S.Input {...rest} />
  </S.Container>
  )
}