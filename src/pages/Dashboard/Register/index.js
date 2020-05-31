import React, { useState, useEffect } from 'react'
import * as S from './styled'
import Basic from './Basic'
import Athlete from './Athlete'
import Preferences from './Preferences'
import { requestPositions, requestTeams, requestBrands } from '../services'
import { updateProfileRequest } from '../../../store/modules/user/actions'
import { useDispatch } from 'react-redux'
import history from '../../../services/history'

const Register = (params) => {

  const dispatch = useDispatch()

  const [position, setPosition] = useState(0)
  const [data, setData] = useState(null)
  const [positions, setPositions] = useState([])
  const [teams, setTeams] = useState([])
  const [brands, setBrands] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchPositions = async () => {
    const res = await requestPositions()
    setPositions(res.data)
  }

  const fetchTeams = async () => {
    const res = await requestTeams()
    setTeams(res.data)
  }

  const fetchBrands = async () => {
    const res = await requestBrands()
    setBrands(res.data)
  }

  useEffect(() => {
    fetchPositions()
    fetchTeams()
    fetchBrands()
  },[])

  const handleNext = async (values) => {
    if(position === 2){

      const playerData = {
        ...data,
        ...values
      }

      setLoading(true)

      const response = await dispatch(updateProfileRequest({
        playerData,
        birthDate: playerData.birthDate,
        registered: true
      }))
      if(response.type === "@user/UPDATE_PROFILE_REQUEST"){
        history.push("/")
        setLoading(false)
      }
    } else {
      setData({
        ...data,
        ...values
      })
      setPosition(position + 1)
    }
  }

  const handlePrevious = () => {
    if(position === 0){
      return
    } else {
      setPosition(position - 1)
    }
  }

  const Content = () => {
    if(position === 0){
      return (
        <Basic 
          position={position} 
          next={handleNext}
          previous={handlePrevious} 
        />
      )
    } else if(position === 1){
      return (
        <Athlete 
          position={position} 
          positions={positions}
          next={handleNext}
          previous={handlePrevious} 
        />
      )
    } else {
      return (
        <Preferences 
          position={position} 
          next={handleNext}
          previous={handlePrevious} 
          teams={teams}
          brands={brands}
      />
      )
    }
  }

  return(
    <S.Container>
      <S.Header>
      <S.Svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 320"
      >
          <path fill="#ffffff" 
            fill-opacity="1" d="M0,192L30,202.7C60,213,120,235,180,229.3C240,
            224,300,192,360,192C420,192,480,224,540,245.3C600,267,660,277,720,
            250.7C780,224,840,160,900,133.3C960,107,1020,117,1080,133.3C1140,149,
            1200,171,1260,181.3C1320,192,1380,192,1410,192L1440,192L1440,0L1410,
            0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,
            780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,
            0,60,0,30,0L0,0Z"
            >
          </path>
      </S.Svg>
      </S.Header>
      <S.Main>
        <Content />
        <S.Positions>
          <S.Pos active={position === 0 && true}></S.Pos>
          <S.Pos active={position === 1 && true}></S.Pos>
          <S.Pos active={position === 2 && true}></S.Pos>
        </S.Positions>
      </S.Main>
    </S.Container>
  )
}

export default Register