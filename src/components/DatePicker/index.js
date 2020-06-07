import React from 'react'
import * as S from './styled'
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import locale from "date-fns/locale/pt-BR";


const DatePicker = ({
  onChange,
  value,
  label,
  ...rest
}) => {

  const getMaxDate = () => {
    let data = new Date();
    data.setFullYear(data.getFullYear() - 6);
    return data
  }

  return(
    <React.Fragment>
      <S.Label>
      {label}
    </S.Label>

    <MuiPickersUtilsProvider locale={locale} utils={DateFnsUtils}>
      <S.Container 
        onChange={date => onChange(date)} 
        format="dd/MM/yyyy"
        value={value}
        maxDate={getMaxDate()}
      />
    </MuiPickersUtilsProvider>
      </React.Fragment>
  )
}

export default DatePicker