import React from 'react'
import * as S from './styled'
import {} from 'react-icons'
import { MdPerson, MdSettings, MdDashboard, MdNotifications, MdAdd, MdEvent, MdSearch } from 'react-icons/md'
import { FaArrowLeft, FaSearch } from 'react-icons/fa'
import { IoMdListBox } from 'react-icons/io'
import history from '../../services/history'
import { useSelector } from 'react-redux'
import Logo from '../../assets/img/icon.svg'
const Default = ({ children, title, back, land, notification, setting, logo }) => {

  const path = history.location.pathname
  const { username } = useSelector(state => state.user.profile)

  return(
    <S.Container>
      <S.Header>
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
            <MdNotifications onClick={() => history.push('/notificacoes')} />
            </React.Fragment>
          )}
          {setting && (
            <MdSettings onClick={() => history.push('/configuracoes')} />
          )}
        </S.HeaderIcon>
      </S.Header>
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
  )
}

export default Default
