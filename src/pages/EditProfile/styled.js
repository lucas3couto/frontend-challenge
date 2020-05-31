import styled from 'styled-components'
import { Select } from '@material-ui/core'

export const Container = styled.div`
  display: flex;
  flex: 1;
  padding: 25px;

  @media(min-width: 768px){
   align-content: center;
   justify-content: center; 
  }
`

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  @media(min-width: 768px){
   max-width: 500px;
   width: 100%; 
  }
`

export const Row = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin: 20px 0;
`

export const Col = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 5px 0;
`

export const Avatar = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background: ${props => props.theme.palette.gray.main};

  background-image: url(${props => props.image});
  background-size: cover;
  margin-right: 20px;

  ${({ loading }) => loading && `
    display: flex; 
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.4)
  `}
`

export const Username = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 5px;
`

export const Link = styled.div`
  color:${props => props.theme.palette.primary.main};
  font-weight: 600;
`

export const Label = styled.div`
  font-size: 14px;
  color: ${props => props.theme.palette.gray.main};
`

export const Input = styled.input`
  border: none;
  padding: 10px 0;
  border-bottom: 1px solid ${props => props.theme.palette.gray.light};

  ${({ error }) => error && `
    border-bottom: 1px solid red;
  `}
`

export const TextArea = styled.textarea`
  border: none;
  padding: 10px 0;
  border-bottom: 1px solid ${props => props.theme.palette.gray.light};

  ${({ error }) => error && `
    border-bottom: 1px solid red;
  `}
`

export const Title = styled.h1`
  font-size: 16px;
`

export const SelectComponent = styled(Select)`
  border: none;
  padding: 10px 0 !important;
  border-bottom: 1px solid ${props => props.theme.palette.gray.light} !important;

  ${({ error }) => error && `
    border-bottom: 1px solid red;
  `}
`

export const Bottom = styled.div`
  margin: 20px 0;
  padding: 15px 0;
`

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  background: ${props => props.theme.palette.primary.main};
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.20);
  color: #fff;
  width: 150px;
  border-radius: 5px;
  cursor: pointer;

`

export const Upload = styled.div`
  position: relative;
  input{
    cursor: pointer !important;
    opacity: 0;
    position: absolute;
    top: 0;

  }
`