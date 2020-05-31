import React from 'react'
import * as S from './styled'

const Notification = (params) => {
  return(
    <S.Container>
      <S.Content>
      <S.Header>
        <h1>Notificações</h1>
      </S.Header>
      <S.Main>
        <p>Nenhuma notificação no momento</p>
      </S.Main>
      </S.Content>
    </S.Container>
  )
}

export default Notification