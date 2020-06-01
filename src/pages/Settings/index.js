import React from 'react'
import * as S from './styled'
import { FaSignOutAlt, FaUser } from 'react-icons/fa'
import { signOut } from '../../store/modules/auth/actions'
import { useDispatch } from 'react-redux'
import { IoIosFootball } from 'react-icons/io'
import history from '../../services/history'

const Settings = (params) => {

  const dispatch = useDispatch()

  return(
    <S.Container>
      <S.Content>
      <S.Header>
        <h1>Configurações</h1>
      </S.Header>
      <S.Main>
        <S.Item
          onClick={() => history.push("/minha-conta")}
        >
          <FaUser />
          <p>Dados Pessoais</p>
        </S.Item>
        <S.Item
          onClick={() => history.push("/perfil/editar")}
        >
          <IoIosFootball />
          <p>Dados de Jogador</p>
        </S.Item>
        <S.Item
          onClick={() => dispatch(signOut())}
        >
          <FaSignOutAlt />
          <p>Sair</p>
        </S.Item>
      </S.Main>
      </S.Content>
    </S.Container>
  )
}

export default Settings