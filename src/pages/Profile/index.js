/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import * as S from './styled'
import { FaCheckCircle } from 'react-icons/fa'
import Biografy from './Biography'
import { MdAdd, MdCheck } from 'react-icons/md'
import { requestProfile, requestFollowing, requestunFollowing } from './services'
import Loading from '../../components/Loading'
import { useSelector } from 'react-redux'
import history from '../../services/history'
import Content from './Content'
import Default from '~/assets/img/default.png'


const Profile = ({ match: { params: { username }}}) => {

  const userId = useSelector(state => state.user.profile.id)

  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [preview, setPreview] = useState(null)
  const [src, setSrc] = useState("")
  const [modal, setModal] = useState(true)
  
  const fetchProfile = async () => {
    const res = await requestProfile(username)
    setProfile(res.data)
    setLoading(false)
  }
  
  useEffect(() => {
    fetchProfile()
  },[])
  
  const handlChange = (param) => {
    history.push(`${profile.username}/conexoes/${param}`)
  }
  
  console.log('Prof',profile)

  const handleFollow = async () => {
    if(profile.isFollowing){
      const response = await requestunFollowing(profile.id)
      if(response.status === 200){
        setProfile({
          ...profile,
          followers: profile.followers - 1,
          isFollowing: false
        })
      }
      
    } else {
      const response = await requestFollowing(profile.id)
      if(response.status === 200){
        setProfile({
          ...profile,
          followers: profile.followers + 1,
          isFollowing: true
        })
      }
    }
  }

  return(
    <React.Fragment>
      {loading ? (
        <Loading />
      ) : (
        <S.Container>
          <S.Content>
          <S.Header>
        <S.AvatarRounded>
        <S.Avatar image={profile.avatar ? profile.avatar.url : Default} />
        </S.AvatarRounded>
        <h1>
          {`${profile.firstName} ${profile.lastName}`}
        </h1>
        <S.Row
          style={{
            marginBottom: 15
          }}
        >
          {profile.admin ? (
            <React.Fragment>
              <p>Drafterr</p>
              <FaCheckCircle />
            </React.Fragment>
          ) : <S.Score>Score: <span>{profile.score}</span></S.Score>}
        </S.Row>
        <S.Socials >
          <S.FollowItem
            onClick={() => handlChange("seguidores")}
          >
            <span>{profile.followers}</span>
            <p>Segudores</p>
          </S.FollowItem>
          <S.FollowItem>
            {profile.id === userId ? (
              <S.FollowButton
                onClick={() => history.push('/perfil/editar')}
              >
                EDITAR
              </S.FollowButton>
            ) : (
              <S.FollowButton onClick={handleFollow}>
              {!profile.isFollowing ? (
                <React.Fragment>
                  <MdAdd />
                    Seguir
                </React.Fragment>
                ) : (
                  "Deixar de seguir"
                )}
            </S.FollowButton>
            )}
          </S.FollowItem>
          <S.FollowItem
            onClick={() => handlChange("seguindo")}
          >
            <span>{profile.following}</span>
            <p>Seguindo</p>
          </S.FollowItem>
        </S.Socials>
      </S.Header>
      <S.Main>
        <Content username={profile.username} content={profile.content} />
        <Biografy 
          profile={profile}
        />
      </S.Main>
          </S.Content>
        </S.Container>
      )}
    </React.Fragment>
  )
}

export default Profile
