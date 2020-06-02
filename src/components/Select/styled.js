import styled from 'styled-components'
import { Select, MenuItem } from '@material-ui/core'

export const Container = styled.div`
  border: 2px solid ${props => props.theme.palette.grey.light};
  border-radius: 5px;
  width: 100%;
  height: 40px;
  padding: 0 15px;
  display: flex;
  flex-direction: row;

  &:hover{
    border: 2px solid ${props => props.theme.palette.grey.main};
  }

  &:focus-within {
    border: 2px solid ${props => props.theme.palette.purple.main};
  }

  ${({ error }) => error && `
    border-bottom: 2px solid #E53935;
  `}
  
`

export const Input = styled(Select)`
  width: 100%;
  border-bottom: none !important;
  font-size: 16px;
  color: ${props => props.theme.palette.grey.main};

  ::-webkit-input-placeholder {
   color: rgba(0,0,0,0.2);
}
 
:-moz-placeholder { /* Firefox 18- */
   color: rgba(0,0,0,0.2);  
}
 
::-moz-placeholder {  /* Firefox 19+ */
   color: ${props => props.theme.palette.grey.main};  
}
 
:-ms-input-placeholder {  
   color: ${props => props.theme.palette.grey.main};  
}
  &:focus ${Container} {
    border: 2px solid ${props => props.theme.palette.purple.main}
  }
`

export const Error = styled.div`
  width: 100%;
  padding: 5px 15px;
  background: #FFCDD2;
  color: #E53935;
  font-size: 12px;
`

export const Item = styled(MenuItem)``

export const Label = styled.label`
  font-weight: 600;
`