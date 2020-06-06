import React from 'react'
import * as S from './styled'
import { Grid } from '@material-ui/core'

const Dashboard = ({ profile }) => {

  const { playerData: { height, weight, firstPosition, characteristic, contract, agent, bestFoot, numberPlayer, fanTeam }, name, birthDate, country } = profile
  
  return(
    <S.Container>
      <S.Header>
       <div>
        <h1>
        Biografia
        </h1>
       </div>
      </S.Header>
      <S.Content>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <S.Item>
              <p>País</p>
              <span>{country}</span>
            </S.Item>
          </Grid>
          <Grid item xs={6}>
            <S.Item>
            <p>Ano de Nascimento</p>
            <span>{birthDate}</span>
            </S.Item>
          </Grid>
          <Grid item xs={6}>
            <S.Item>
            <p>Altura</p>
            <span>{height}</span>
            </S.Item>
          </Grid>
          <Grid item xs={6}>
            <S.Item>
            <p>Peso</p>
            <span>{weight}</span>
            </S.Item>
          </Grid>
          <Grid item xs={6}>
            <S.Item>
            <p>Posição</p>
            <span>{firstPosition}</span>
            </S.Item>
          </Grid>
          <Grid item xs={6}>
            <S.Item>
            <p>Melhor Pé</p>
            <span>{bestFoot && bestFoot}</span>
            </S.Item>
          </Grid>
          <Grid item xs={6}>
            <S.Item>
            <p>Camisa de Jogo</p>
            <span>{numberPlayer && numberPlayer}</span>
            </S.Item>
          </Grid>
          <Grid item xs={6}>
            <S.Item>
            <p>Clube Preferido</p>
            <span>{fanTeam}</span>
            </S.Item>
          </Grid>
          <Grid item xs={6}>
            <S.Item>
            <p>Contrato</p>
            <span>{contract ? 'Sim' : 'Não'}</span>
            </S.Item>
          </Grid>
          <Grid item xs={6}>
            <S.Item>
            <p>Agente</p>
            <span>{agent ? 'Sim' : 'Não'}</span>
            </S.Item>
          </Grid>
        </Grid>
      </S.Content>
    </S.Container>
  )
}

export default Dashboard
