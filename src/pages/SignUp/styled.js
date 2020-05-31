import styled from 'styled-components'
import Inp from '../../components/Input'
import { Form } from '@unform/web';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 25px;

  h1{
    margin: 25px 0;
    font-size: 24px;
    color: #fff;
  }
`

export const Content = styled(Form)`
  display: flex;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.20);
  border-radius: 15px;
  background: #fff;
  padding: 20px;
`

export const Input = styled(Inp)`
  height: 40px;
`

export const Button = styled.button`
  border: none;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  background: ${props => props.theme.palette.primary.main};
  color: #fff;
  font-weight: 600;
`