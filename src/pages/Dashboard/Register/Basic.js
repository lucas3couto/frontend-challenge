import React, { useRef, useState } from 'react'
import * as S from './styled'
import { Grid } from '@material-ui/core'
import * as Yup from 'yup'
import { Form } from '@unform/web';
import Input from '../../../components/Input';
import DatePicker from '../../../components/DatePicker'
import { toast } from 'react-toastify'

const Basic = ({
  position,
  next,
  previous
}) => {

  const[birthDate, setBirthDate] = useState(null)

  const formRef = useRef(null);
  
  const handleSubmit = (data) => {
    if(data.height && data.weight && birthDate){
      next({
        ...data,
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
            />
          </Grid>
          <Grid item xs={12}>
            <Input 
              label="Altura"
              name="height" 
              placeholder="Ex: 1,73"
            />
          </Grid>
          <Grid item xs={12}>
            <Input 
              label="Peso"
              name="weight" 
              placeholder="Ex: 73"
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