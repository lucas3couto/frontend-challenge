import React from "react";
import * as S from "./styled";

const Select = ({ children, label, ...rest }) => {

  return (
    <React.Fragment>
      <S.Label>{label}</S.Label>
      <S.Container>
        <S.Input {...rest}>{children}</S.Input>
      </S.Container>
    </React.Fragment>
  );
};

export default Select;