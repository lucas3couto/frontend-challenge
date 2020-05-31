import React, { useRef, useState } from 'react'
import * as S from './styled'
import { Grid, MenuItem } from '@material-ui/core'
import * as Yup from 'yup'
import { Form } from '@unform/web';
import Input from '../../../components/InputSimple';
import { FormControlLabel, Checkbox } from '@material-ui/core'
import Select from '../../../components/Select'
import { toast } from 'react-toastify'

const Basic = ({
  position,
  next,
  previous,
  positions
}) => {

  const [contract, setContract] = useState(false)
  const [agent, setAgent] = useState(false)
  const [firstPosition, setFirstPosition] = useState("")
  const [characteristic, setCharacteristic] = useState("")
  const [bestFoot, setBestFoot] = useState("")
  const [numberPlayer, setNumberPlayer] = useState()

  const formRef = useRef(null);

  const handleSubmit = () => {
    if(
      firstPosition &&
      characteristic &&
      bestFoot &&
      numberPlayer
    ) {
      next({
        firstPosition,
        characteristic,
        bestFoot,
        numberPlayer,
        agent,
        contract
      })
    } else {
      toast.error('Preencha todos os campos.')
    }
  }

  const findTypes = (id) => {
    if(id){
      const position = positions.find(item => item._id == id)
      return position.type
    }
  }
  
  return(
    <React.Fragment>
      <S.Card>
      <Form 
        ref={formRef} 
        style={{
          width: "100%"
        }}
    >
      <Grid container spacing={3}>
      <Grid item xs={12}>
        <Select
          label="Posição que Joga"
          onChange={e => setFirstPosition(e.target.value)}
          value={firstPosition}
        >
          {positions.map((item, idx) => (
            <MenuItem
              key={idx}
              value={item._id}
            >
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </Grid>
      <Grid item xs={12}>
      <Select
          label="Caracteristica em campo"
          onChange={e => setCharacteristic(e.target.value)}
          value={characteristic}
        >
          {firstPosition && findTypes(firstPosition).map((item, idx) => (
            <MenuItem
              key={idx}
              value={item._id}
            >
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </Grid>
      <Grid item xs={12}>
      <Select
          label="Melhor Pé"
          onChange={e => setBestFoot(e.target.value)}
          value={bestFoot}
        >
          {['Direito', 'Esquerdo'].map((item, idx) => (
            <MenuItem
              key={idx}
              value={item}
            >
              {item}
            </MenuItem>
          ))}
        </Select>
      </Grid>
      <Grid item xs={12}>
        <Input 
          label="Número da camisa"
          value={numberPlayer}
          onChange={e => setNumberPlayer(e.target.value)} 
        />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox checked={contract} onChange={e => setContract(e.target.checked) } />}
          label="Possui contrato profissional?"
        />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox checked={agent} onChange={e => setAgent(e.target.checked) } />}
          label="Possui agente ou empresário?"
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

export default Basic