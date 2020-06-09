import React, { useState } from 'react'
import * as S from './styled'
import { requestNotifications, requestUpdateNotifications } from './services'
import Loading from '~/components/Loading'

const Notification = (params) => {
  
  const [notifications, setNotifications] = useState(null)

  const fetchNotification = async () => {
    const res = await requestNotifications()
    setNotifications(res.data)
  }

  useState(() => {
    fetchNotification()
  },[])

  const handleUpdate = async id => {
    await requestUpdateNotifications(id)
    fetchNotification()
  }
  
  return(
    <S.Container>
      <S.Content>
      <S.Header>
        <h1>Notificações</h1>
      </S.Header>
      <S.Main>
        {notifications ? (
          <S.List>
          {notifications.length > 0 ? notifications.map(({ _id, who, content }, idx) => (
            <S.Row key={idx} onClick={() => handleUpdate(_id)}>
              <S.AvatarBlock>
              <S.Avatar image={who.avatar} />
              </S.AvatarBlock>
              <p><span>{who.name}</span> {content}</p>
            </S.Row>
          )) : (
            <p>Nenhuma notificação nova no momento</p>
          )}
          </S.List>
        ) : (
          <Loading />
        )}
      </S.Main>
      </S.Content>
    </S.Container>
  )
}

export default Notification