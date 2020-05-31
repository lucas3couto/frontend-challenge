import styled from 'styled-components'

export const Container = styled.div`
  border: 2px solid ${props => props.theme.palette.gray.light};
  border-radius: 5px;
  width: 100%;
  height: 40px;
  padding: 0 15px;
  display: flex;
  flex-direction: row;

  &:hover{
    border: 2px solid ${props => props.theme.palette.gray.main};
  }

  &:focus-within {
    border: 2px solid ${props => props.theme.palette.primary.main};
  }

  ${({ error }) => error && `
    border-bottom: 2px solid #E53935;
  `}
  
`

export const Input = styled.input`
  width: 100%;
  border: none;
  font-size: 16px;
  background: transparent;

  ::-webkit-input-placeholder {
   color: ${props => props.theme.palette.primary.main};
}
 
:-moz-placeholder { /* Firefox 18- */
   color: ${props => props.theme.palette.primary.main};  
}
 
::-moz-placeholder {  /* Firefox 19+ */
}
 
:-ms-input-placeholder {  
}
  &:focus ${Container} {
  }
`

export const Error = styled.div`
  width: 100%;
  padding: 5px 15px;
  background: #FFCDD2;
  color: #E53935;
  font-size: 12px;
`

export const Label = styled.div`
  font-weight: 600;
  margin: 5px 0;
`