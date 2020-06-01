import React, { useRef, useState } from 'react'
import * as S from './styled'
import { Grid } from '@material-ui/core'
import * as Yup from 'yup'
import { Form } from '@unform/web';
import Input from '../../../components/InputSimple';
import DatePicker from '../../../components/DatePicker'
import { toast } from 'react-toastify'
import { subYears } from 'date-fns';

const Basic = ({
  position,
  next,
  previous
}) => {

  const maskHeight = value => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{1})(\d{1,2})/, '$1,$2')
      .replace(/(,\d{2})\d+?$/, '$1')
  }

  const maskWeight = value => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})\d+?$/, '$1')
  }

  const format = value => {
    return value.replace(",","")
  }

  const[birthDate, setBirthDate] = useState(null)
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')

  const formRef = useRef(null);
  
  const handleSubmit = (data) => {
    if(height && weight && birthDate){
      next({
        height,
        weight,
        birthDate
      })
    } else {
      toast.error('Preencha todos os campos.')
    }
  }

  return(
    <React.Fragment>
      <Form 
        ref={formRef} 
        onSubmit={handleSubmit}
        style={{
          width: "100%"
        }}
      >   
        <S.Card>
          <Grid container spacing={3}>
          <Grid item xs={12}>
            <DatePicker 
              label="Data de Nascimento"
              value={birthDate}
              onChange={date => setBirthDate(date)} 
              placeholder="Ex: 01/01/2006"
              maxDate={subYears(new Date(), 8)}
            />
          </Grid>
          <Grid item xs={12}>
            <Input 
              label="Altura"
              name="height" 
              value={maskHeight(height)}
              onChange={e => setHeight(format(e.target.value))}
              right="metros"
            />
          </Grid>
          <Grid item xs={12}>
            <Input 
              label="Peso"
              name="weight" 
              right="Quilos"
              value={maskWeight(weight)}
              onChange={e => setWeight(e.target.value)}
            />
          </Grid>
        </Grid>
        </S.Card>
        <S.Actions>
          <S.Button
            next
            type="submit"
            >
            {position === 2 ? "Finalizar" : "Avançar"}
          </S.Button>
        </S.Actions>
      </Form>
    </React.Fragment>
  )
}

export default Basic