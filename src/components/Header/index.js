import React from 'react';
import * as S from './styled';
import { MdMenu, MdMoreVert } from 'react-icons/md';

export default function Header({ title }) {
  return (
    <S.Wrapper>
      <MdMenu />
      <h1>{title}</h1>
      <MdMoreVert />
    </S.Wrapper>
  );
}
