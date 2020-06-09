import React, { useState, useEffect } from 'react'
import * as S from './styled'
import {} from 'react-icons'
import { MdPerson, MdSettings, MdDashboard, MdNotifications, MdAdd, MdEvent, MdSearch } from 'react-icons/md'
import { FaArrowLeft, FaSearch } from 'react-icons/fa'
import { IoMdListBox } from 'react-icons/io'
import history from '../../services/history'
import { useSelector } from 'react-redux'
import Logo from '../../assets/img/icon.svg'
import UploadContent from '~/components/UploadContent'
import { requestContent, requestNotifications } from './services'
import { toast } from 'react-toastify'
import Notification from '~/components/Notification'

const Default = ({ children, title, back, land, notification, setting, logo, color, computedMatch }) => {

  
  const path = history.location.pathname
  const { username, registered, admin } = useSelector(state => state.user.profile)
  const isUser = computedMatch.params.username === username && true

  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [notifications, setNotifications] = useState(null)



  const handleSubmit = async (data) => {
    setLoading(true)
    const response = await requestContent(data)
    if(response.status === 200){
      toast.success('Conteúdo salvo com sucesso')
      setOpen(false)
    } else {
      toast.error(response.message)
    }
    setLoading(false)
  }

  const handleNotification = async () => {
    const res = await requestNotifications()
    setNotifications(res.data)
  }

  useEffect(() => {
    handleNotification()
  },[])

  return(
    <React.Fragment>
      <S.Container>
      {registered && (
        <S.Header color={color}>
        <div>
          {
            logo && <S.Logo>
              <img src={Logo} />
            </S.Logo>
          }
          {back && (
            <S.HeaderIcon
              onClick={() => history.goBack()}
            >
              <FaArrowLeft />
            </S.HeaderIcon>
          )}
        </div>
        
        <h1>{title}</h1>
        <S.HeaderIcon>
          {notification && (
            <React.Fragment>
              <FaSearch size={18} style={{ marginRight: 20}} onClick={() => history.push('/procurar')} />
              <Notification number={notifications && notifications.length} onClick={() => history.push('/notificacoes')} />
            </React.Fragment>
          )}
          {setting && isUser && (
            <MdSettings onClick={() => history.push('/configuracoes')} />
          )}
        </S.HeaderIcon>
      </S.Header>
      )}
      <S.Main>
        {children}
      </S.Main>
      <S.MenuBottom land={land}>
      <S.MenuBottomContent>
        <S.MenuBottomItem
          onClick={() => history.push(`/`)}
          active={path === "/"}
        >
          <MdDashboard />
        </S.MenuBottomItem>
        <S.MenuBottomItem
          onClick={() => history.push(`/feed`)}
          active={path === "/feed"}
        >
          <IoMdListBox />
        </S.MenuBottomItem>
        <S.MenuBottomItem
          more={true}
          onClick={() => setOpen(true)}
        >
          <MdAdd />
        </S.MenuBottomItem>
        <S.MenuBottomItem
          onClick={() => history.push(`/eventos`)}
          active={path === `/eventos`}        
        >
          <MdEvent />
        </S.MenuBottomItem>
        <S.MenuBottomItem
          onClick={() => history.push(`/${username}`)}
          active={path === `/${username}`}
        >
          <MdPerson />
        </S.MenuBottomItem>
      </S.MenuBottomContent>
      </S.MenuBottom>
    </S.Container>
    <UploadContent open={open} close={() => setOpen(false)} submit={handleSubmit} loading={loading} />
    </React.Fragment>
  )
}

export default Default
