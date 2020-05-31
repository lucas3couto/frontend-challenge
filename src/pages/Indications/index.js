import React, { useRef, useState, useEffect } from 'react'
import * as S from './styled'
import { useSelector } from 'react-redux'
import { requestIndications } from './services'
import { format } from 'date-fns'
import history from '../../services/history'
 


const Indications = (params) => {

  const [indications, setIndications] = useState(null)  
  const { id } = useSelector(state => state.user.profile)
  const url = `${process.env.REACT_APP_APP_URL}/cadastrar?r=${id}`

  const fetchIndications = async () => {
    const res = await requestIndications()
    setIndications(res.data)
  } 

  useEffect(() => {
    fetchIndications()
  },[])


  const formatDate = (date) => {
    return format(new Date(date), 'dd/MM/yyyy')
  }

  const [copySuccess, setCopySuccess] = useState(false);
  const textAreaRef = useRef(null);

  const copyToClipboard = (e) => {
    textAreaRef.current.select();
    document.execCommand('copy');
    e.target.focus();
    setCopySuccess(true);
    console.log(copySuccess)
  }

  return(
    <S.Container>
      <S.Content>
      <S.Header>
        <h1>Indicações</h1>
      </S.Header>
      <S.Main>
        {indications && indications.length > 1 ? (
          <div>
            <p>A cada amigo indicado que se cadastre em nossa plataforma, você ganhará 250 pontos.</p>
          </div>
        ) : (
          <S.Card>
          <h1>Complete o desafio</h1>
          <p>
            Quando 5 amigos que você indicou cadastrarem em nossa plataforma, você ganhará <span>2500 pontos</span>
          </p>
        </S.Card>
        )}
        <S.Link>
          <span>Link de indicação</span>
          <S.LinkInput 
            ref={textAreaRef} 
            value={url} 
            copySuccess={copySuccess}
          />
          <button onClick={copyToClipboard}>
            {copySuccess ? 'Copiado!' : 'Copiar Link'}
          </button>
        </S.Link>
      </S.Main>
      <S.Indications>
        <h1>Últimas 5 indicações cadastradas</h1>
       <React.Fragment>
         {indications && indications.length > 0 ? indications.map(({user, registered_at}, idx) => (
            <S.User
              key={idx}
              onClick={() => history.push(`/${user.username}`)}
            >
            <span>
              {`${user.firstName} ${user.lastName}`}
            </span>
            <span>{user.email}</span>
            <span>{formatDate(registered_at)}</span>
          </S.User>
         )) : (
           <p>Nenhuma indicação cadastrada até agora.</p>
         )}
       </React.Fragment>
      </S.Indications>
      </S.Content>
    </S.Container>
  )
}

export default Indications