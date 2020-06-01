import React from 'react'
import * as S from './styled'

import "react-datepicker/dist/react-datepicker.css";


const DatePicker = ({
  onChange,
  value,
  label,
  ...rest
}) => {

  return(
    <React.Fragment>
      <S.Label>
      {label}
    </S.Label>
    <S.Container 
      selected={value} 
      onChange={date => onChange(date)} 
      locale="pt-BR"
      dateFormat="dd/MM/yyyy"
      {...rest}
    />
    </React.Fragment>
  )
}

export default DatePicker