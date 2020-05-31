import styled from 'styled-components'
import { TextField } from '@material-ui/core'

export const Input = styled(TextField)`
  border: 2px solid ${props => props.theme.palette.gray.light}!important;
  border-radius: 5px;
  width: 100%;
  height: 40px;
  padding: 0 20px;

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

export const Container = styled.div`
  *{
    margin: 0 !important;
  }

  .MuiInputLabel-formControl{
    display: none;
  }

  .MuiAutocomplete-inputRoot[class*="MuiInput-root"] .MuiAutocomplete-input:first-child{
    margin-left: 10px !important;
    margin-top: 5px !important;
  }
`

export const Label = styled.label`
  font-weight: 600;
`