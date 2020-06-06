import React from 'react'
import * as S from './styled'
import { Grid } from '@material-ui/core'
import history from '~/services/history'
import { useSelector } from 'react-redux'
const Dashboard = ({ content, username }) => {
  
  const { profile } = useSelector(state => state.user)

  return(
    <S.Container>
      <S.Header>
       <div>
        <h1>
        Conteúdo
        </h1>
       </div>
      </S.Header>
      <S.Content>
        {content.length > 0 ? (
          <Grid container spacing={3}>
          {content.map((row, idx) => (
            <Grid item xs={4} key={idx}>
            <video height="100%" width="100%" onClick={() => history.push(`/${username}/midia/${row._id}`)} style={{ cursor: "pointer"}}>
              <source src={row.url} type={row.mime_type} />
            </video>
          </Grid>
          ))}
        </Grid>
        ) : (
          <React.Fragment>
            {profile.username === username ? (
              <p>Você ainda não postou conteúdo.</p>
            ) : (
              <p>O usuário ainda não postou conteúdo.</p>
            )}
          </React.Fragment>
        )}
      </S.Content>
      <span onClick={() => history.push(`/${username}/conteudo`)}>Ver todos</span>
    </S.Container>
  )
}

export default Dashboard
