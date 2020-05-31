import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import * as S from './styled'

export default function Input({ name,label,  Icon, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);
  return (
    <>
     <S.Label>
      {label}
    </S.Label>
    <S.Container error={error && true}>
      {Icon && <Icon color="#ab99c0" style={{ marginRight: 5}} size={24} />}
      <S.Input ref={inputRef} defaultValue={defaultValue} {...rest} />
    </S.Container>
    { error && <S.Error className="error">{error}</S.Error> }
    </>
  )
}