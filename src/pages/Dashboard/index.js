import React, { useState, useEffect } from 'react'
import * as S from './styled'
import Register from './Register'
import { useSelector } from 'react-redux'
import { MdCloudUpload } from 'react-icons/md'
import ProgressChallenge from '../../components/ProgressChallenge'
import history from '../../services/history'
import { requestIndications } from './services'
import Card from '../../components/Card'

const Dashboard = (params) => {

  const { registered, admin } = useSelector(state => state.user.profile)
  const [indications, setIndications] = useState([])

  const fetchIndications = async () => {
    const res = await requestIndications()
    return setIndications(res.data)
  } 

  useEffect(() => {
    fetchIndications()
  },[])

  
  return(
    <React.Fragment>
      <S.Container>
       <S.Content>
         <ProgressChallenge 
          onClick={() => history.push("/indicacoes")}
          title="Desafio do Novato"
          description="Ao concluir esse desafio, você receberá 2500 pontos."
          total={5}
          concluded={indications.length}
          style={{
            marginBottom: 25
          }}
         />
        <Card>
          <h1>Em Breve</h1>
          <S.Row>
            <MdCloudUpload />
            <p>Upload de vídeos</p>
          </S.Row>
        </Card>
       </S.Content>
      </S.Container>
      {!registered && !admin && (
        <Register />
      ) }
    </React.Fragment>
  )
}

export default Dashboard
