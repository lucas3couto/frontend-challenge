import React, { useRef, useState } from 'react'
import * as S from './styled'
import { Grid } from '@material-ui/core'
import { Form } from '@unform/web';
import Input from '../../../components/InputSimple';
import { Autocomplete } from '@material-ui/lab'
import TextField from '../../../components/TextField'
import { toast } from 'react-toastify'

const Preferences = ({
  position,
  next,
  teams,
  brands
}) => {

  const formRef = useRef(null);
  const [fanTeam, setFanTeam] = useState(null)
  const [preferedBrand, setPreferedBrand] = useState(null)
  const [brandBoot, setBrandBoot] = useState(null)

  const handleSubmit = (data) => {

    if(
      fanTeam &&
      preferedBrand &&
      brandBoot
    ){
      next({
        fanTeam,
        preferedBrand,
        brandBoot
      })
    } else {
      toast.error('Preencha todos os campos.')
    }
  }
  
  return(
    <React.Fragment>
      <S.Card>
      <Form 
      ref={formRef} 
      onSubmit={() => {}}
      style={{
        width: "100%"
      }}
    >
      <Grid container spacing={3}>
      <Grid item xs={12}>
      <Autocomplete
      stule={{
        border: "2px solid #555 !important"
      }}
        options={teams}
        getOptionLabel={(option) => option.name + '-' + option.state}
        renderInput={(params) => <Input {...params} label="Time Preferido" />}
        onChange={(e, v) => setFanTeam(v ? v._id : null)}
      />
      </Grid>
      <Grid item xs={12}>
      <Autocomplete
        options={brands}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => <Input {...params} label="Marca Preferida" />}
        onChange={(e, v) => setPreferedBrand(v ? v._id : null)}
      />
      </Grid>
      <Grid item xs={12}>
        <Input 
          label="Modelo de chuteira que usa"
          onChange={e => setBrandBoot(e.target.value)}
          value={brandBoot}
        />
      </Grid>
    </Grid>
    </Form>
    </S.Card>
    <S.Actions>
    <S.Button
      next
      onClick={handleSubmit}
      >
      {position === 2 ? "Finalizar" : "Avançar"}
    </S.Button>
  </S.Actions>
    </React.Fragment>
  )
}

export default Preferences