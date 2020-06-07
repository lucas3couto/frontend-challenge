import styled from 'styled-components'
import ReactDatePicker from 'react-datepicker'
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';

export const Container = styled(KeyboardDatePicker)`
  border: 2px solid ${props => props.theme.palette.grey.light} !important;
  border-radius: 5px;
  width: 100%;
  height: 40px;
  padding: 0 15px !important;
  display: flex;
  flex-direction: row;

  &:hover{
    border: 2px solid ${props => props.theme.palette.grey.main} !important;
  }

  &:focus-within {
    border: 2px solid ${props => props.theme.palette.purple.main} !important;
  }

  ${({ error }) => error && `
    border-bottom: 2px solid #E53935;
  `}
  
`

export const Label = styled.div`
  font-weight: 600;
  margin: 5px 0;
`