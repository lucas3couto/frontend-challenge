import styled from 'styled-components';
import { Form } from '@unform/web';

export const Wrapper = styled.div`
  padding: 25px;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 600px;
  width: 600px;
`;

export const Header = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #000;
`;

export const Title = styled.h1`
  font-size: 1.2rem;
  margin-bottom: 15px;
`;

export const Find = styled(Form)`
  display: flex;

  button {
    margin-left: 15px;
    width: 40px;
    height: 40px;
    border-radius: 5px;
    border: none;
  }
`;

export const Main = styled.div`
  padding: 20px 0;
`;

export const ModalMain = styled.div`
  background: #fff;
  max-width: 500px;
  width: 100%;
  display: flex;
  border-radius: 5px;
  padding: 25px;
  flex-direction: column;
`;

export const ModalAction = styled.div`
  display: flex;
  margin-top: 15px;
`;

export const ModalButton = styled.button`
  border: none;
  padding: 5px 15px;
  border-radius: 5px;

  ${({ active, theme }) =>
    active &&
    `
    background: ${theme.palette.purple.main};
    color: #fff;
    margin-left: 15px;
  `}
`;
