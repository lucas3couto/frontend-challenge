import React from 'react';
import * as S from './styled';
import Header from '../../components/Header';

export default function Default({ children, title }) {
  return (
    <S.Wrapper>
      <Header title={title} />
      <div>{children}</div>
    </S.Wrapper>
  );
}
