import styled from 'styled-components'
import { Dialog, DialogContent } from '@material-ui/core';

export const Button = styled.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  background: ${props => props.theme.palette.pink};
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20);


  ${({ disabled, loading, theme }) => disabled && `
    background: ${theme.palette.grey.light};
    color: ${theme.palette.grey.main};
    box-shadow: none;

  `}

  
`