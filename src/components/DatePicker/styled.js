import styled from 'styled-components'
import ReactDatePicker from 'react-datepicker'

export const Container = styled(ReactDatePicker)`
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

export const Label = styled.div`
  font-weight: 600;
  margin: 5px 0;
`