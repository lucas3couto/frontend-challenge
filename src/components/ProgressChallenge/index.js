import React from 'react'
import * as S from './styled'
import { FaTrophy, FaUserAlt, FaUserPlus } from 'react-icons/fa'

const Progress = ({
  title,
  description,
  total,
  concluded,
  ...rest
}) => {


  const progress = () => {
    const result = (concluded / total) * 100
    return result
  }
  
  return(
    <S.Container
      {...rest}
    >
      <h1>{title}</h1>
      <p>{description}</p>
      <S.Progress>
      <S.Bar variant="determinate" value={progress()} />
      {
        progress() === 100 ? (
          <S.Concluded>Parabéns! Você concluiu seu objetivo.</S.Concluded>
        ) : (
          <p>Seu progresso</p>
        )
      }
      </S.Progress>
      <S.List>
        <S.Item>
          <S.Icon>
            <FaUserPlus />
          </S.Icon>
          <p>Convide 5 amigos</p>
          <span>2500 pontos</span>
        </S.Item>
      </S.List>
    </S.Container>
  )
}

export default Progress