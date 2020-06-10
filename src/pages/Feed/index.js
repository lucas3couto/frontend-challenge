import React, { useState, useEffect } from 'react'
import * as S from './styled'
import { requestFeed, requestLike, requestUnLike } from './services'
import Loading from '~/components/Loading'
import history from '~/services/history'
import { IoMdTrophy } from 'react-icons/io'

const Feed = (params) => {

  const [feed, setFeed] = useState(null)

  const fetchFeed = async () => {
    const res = await requestFeed()
    setFeed(res.data)
  }

  useEffect(() => {
    fetchFeed()
  },[])


  const handleLike = async (id, idx, like, ) => {
    if(like){
      requestUnLike(id)
      const update = [...feed]
      update[idx].like = !update[idx].like
      update[idx].likes = update[idx].likes - 1
      setFeed(update) 
    } else {
      requestLike(id)
      const update = [...feed]
      update[idx].like = !update[idx].like
      update[idx].likes = update[idx].likes + 1
      setFeed(update) 
    }
  }

  return(
    <S.Container>
      <S.Content>
      <S.Header>
        <h1>Feed</h1>
      </S.Header>
      <S.Main>
        {feed ? (
          <S.List>
            {feed.map(({_id, likes, like, user, mime_type, title, description, url}, idx) => (
              <S.Card
                key={idx}
              >
                <S.CardHeader>
                  <S.Avatar image={user.avatar && user.avatar.url} />
                  <S.Info>
                    <h1
                      onClick={() => history.push(`/${user.username}`)}
                    >
                      {`${user.firstName} ${user.lastName}`}
                    </h1>
                  </S.Info>
                </S.CardHeader>
                <S.CardContent>
                <video height="100%" width="100%" onClick={() => history.push(`/${user.username}/midia/${_id}`)} style={{ cursor: "pointer"}}>
                  <source src={url} type={mime_type} />
                </video>
                <S.CardAction>
                <div>
                <h1>
                  {title}
                </h1>
                <p>
                  {description}
                </p>
                </div>
                <div>
                <S.Like like={like && true}> 
                  {likes > 0 && <span>{likes}</span>}
                  <IoMdTrophy onClick={() => handleLike(_id, idx, like)} />
                </S.Like>
                </div>
                </S.CardAction>
                </S.CardContent>
              </S.Card>
            ))}
          </S.List>
        ) : (
          <Loading />
        )}
      </S.Main>
      </S.Content>
    </S.Container>
  )
}

export default Feed