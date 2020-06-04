/* eslint-disable react-hooks/exhaustive-deps */
import React , { useState, useEffect }from 'react'
import * as S from './styled'
import { requestMedia } from './services'
import Loading from '~/components/Loading'
import { FaArrowLeft } from 'react-icons/fa'
import history from '~/services/history'

const Media = ({ match: { params: { id, username }}}) => {

  const [user, setUser] = useState(null)

  const fetch = async () => {
    const res = await requestMedia(username, id)
    setUser(res.data)
  }

  useEffect(() => {
    fetch()
  },[])

  return(
    <S.Container>
      {user ? (
      <React.Fragment>
        <S.Header>
        <FaArrowLeft onClick={() => history.goBack()} />
      </S.Header>
      <S.Bottom>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            height: "100%"
          }}
        >
          <S.Avatar image={user.avatar} />
          <div>
            <h1>{user.name}</h1>
          </div>
        </div>
      </S.Bottom>
        <S.Video controls autoPlay>
        <source src={user.content.url} type={user.content.mime_type}/>
      </S.Video>
      </React.Fragment>
      ) : <Loading />}
    </S.Container>
  )
}

export default Media