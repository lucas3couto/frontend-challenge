import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import * as S from './styled';

export default function Input({ name, style, ...rest }) {
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
    <div style={style}>
      <S.Container error={error && true}>
        <S.Input ref={inputRef} defaultValue={defaultValue} {...rest} />
      </S.Container>
      {error && <S.Error className="error">{error}</S.Error>}
    </div>
  );
}
