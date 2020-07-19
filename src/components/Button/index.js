import React from 'react';
import * as S from './styled';

export default function Button({ children, ...rest }) {
  return <S.Button {...rest}>{children}</S.Button>;
}
