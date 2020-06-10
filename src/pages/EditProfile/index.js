import React, { useState, useEffect } from 'react'
import * as S from './styled'
import { useSelector } from 'react-redux'
import Loading from '../../components/Loading'
import { MenuItem, CircularProgress, FormControlLabel, Checkbox } from '@material-ui/core'
import { 
  requestPositions, 
  requestTeams, 
  requestBrands, 
  requestUploadImage 
} from './services'
import { toast } from 'react-toastify'
import { updateProfileRequest } from '../../store/modules/user/actions'
import { useDispatch } from 'react-redux'
import { uniqueId } from "lodash";
import filesize from "filesize";

const EditProfile = (params) => {

  const { profile } = useSelector(state => state.user)
  const dispatch = useDispatch()

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [positions, setPositions] = useState(null)
  const [brands, setBrands] = useState(null)
  const [teams, setTeams] = useState(null)
  const [uploadFile, setUploadFile] = useState(null)
  const [avatar, setAvatar] = useState(null)
  
  const [firstPosition, setFirstPosition] = useState(null)
  const [characteristic, setCharacteristic] = useState(null)
  const [loadingAvatar, setLoadingAvatar] = useState(false)

  const error = (v) => {
    if(!v){
      return true
    } else {
      return false
    }
  }

  const maskHeight = value => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{1})(\d{1,2})/, '$1,$2')
      .replace(/(,\d{2})\d+?$/, '$1')
  }

  const maskWeight = value => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})\d+?$/, '$1')
  }

  const format = value => {
    return value.replace(",","")
  }



  const fetchAwait = async () => {
    const resPosition = await requestPositions()
    const resBrands = await requestBrands()
    const resTeams = await requestTeams()
    setPositions(resPosition.data)
    setBrands(resBrands.data)
    setTeams(resTeams.data)
  }
  
  useEffect(() => {
    fetchAwait()
    setUser(profile)
    setLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const findTypes = (id) => {
      if(id && positions){
        const pos = positions.find(item => item._id == id)
        return pos.type || []
      } else {
        return []
      }

  }

  const handleSubmit = async () => {
    const { firstName, lastName, description, playerData: { firstPosition, characteristic, bestFoot, fanTeam, preferedBrand, brandBoot  }} = user

    if(
      firstName &&
      lastName &&
      firstPosition &&
      characteristic &&
      bestFoot &&
      fanTeam &&
      preferedBrand &&
      brandBoot
    ) {
      await dispatch(updateProfileRequest(user))
    } else {
      toast.error('Todos os campos precisam estar preenchidos.')
    }
  }

  const handleUpload = async file => {

    const upl = {
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null
    }

    await setUploadFile(upl)

    processUpload(upl)
  }

  const processUpload = async (upload) => {
    const data = await new FormData();
    data.append("file", upload.file, upload.name);
    setLoadingAvatar(true)
    const res = await requestUploadImage(data)
    if(res.status === 200){
      setUser({
        ...user,
        avatar: res.data
      })
      await dispatch(updateProfileRequest({
        ...user,
        avatar: res.data
      }))
      setLoadingAvatar(false)
    }
  }
  
  return(
    <React.Fragment>
      {loading ? (
      <Loading />
    ) : (
      <S.Container>
      <S.Content>
      <S.Row>
        <S.Avatar loading={loadingAvatar} image={user.avatar && user.avatar.url}>
        {loadingAvatar && <CircularProgress />}
        </S.Avatar>
        <S.Col>
          <S.Username>{user.username}</S.Username>
          <S.Upload>
          <S.Link>
            Alterar foto do perfil
          </S.Link>
          <input type="file" name="file" onChange={(e) => handleUpload(e.target.files[0])} />
          </S.Upload>
        </S.Col>
      </S.Row>
      <S.Col>
        <S.Label>Nome</S.Label>
        <S.Input 

          error={error(user.firstName)}
          onChange={e => setUser({ 
            ...user,
            firstName: e.target.value
           })}
          value={user.firstName} 
        />
      </S.Col>
      <S.Col>
        <S.Label>Sobrenome</S.Label>
        <S.Input 

          error={error(user.lastName)}
          onChange={e => setUser({ 
            ...user,
            lastName: e.target.value
           })}
          value={user.lastName} 
        />
      </S.Col>
      <S.Col>
        <S.Label>Descrição</S.Label>
        <S.TextArea 
          error={error(user.description)}
          onChange={e => setUser({ 
            ...user,
            description: e.target.value
           })}
          rows={3} 
          value={user.description} 
        />
      </S.Col>
      <S.Row>
        <S.Title>
          Atributos
        </S.Title>
      </S.Row>
      <S.Col item xs={12}>
           <S.Label>Altura</S.Label>
            <S.Input 
              label="Altura"
              name="height" 
              value={maskHeight(user.playerData.height)}
              onChange={e => setUser({
                ...user,
                playerData: {
                  ...user.playerData,
                  height: format(e.target.value)
                }
              })}
              right="metros"
            />
          </S.Col>
          <S.Col item xs={12}>
           <S.Label>Peso</S.Label>
            <S.Input 
              label="Peso"
              name="weight" 
              value={maskWeight(user.playerData.weight)}
              onChange={e => setUser({
                ...user,
                playerData: {
                  ...user.playerData,
                  weight: format(e.target.value)
                }
              })}
              right="Quilos"
            />
          </S.Col>
      <S.Col>
        <S.Label>Melhor pé</S.Label>
        <S.SelectComponent
          error={error(user.playerData.bestFoot)}
          defaultValue={user.playerData.bestFoot}
          onChange={e => setUser({
            ...user,
            playerData: {
              ...user.playerData,
              bestFoot: e.target.value
            }
          })}
        >
          {['Direito', 'Esquerdo'].map((item, idx) => (
            <MenuItem
            key={idx}
            value={item}
          >
            {item}
          </MenuItem>
          ))}
        </S.SelectComponent>
      </S.Col>
      <S.Col>
        <S.Label>Posição</S.Label>
        <S.SelectComponent
          error={error(user.playerData.firstPosition)}
          defaultValue={user.playerData.firstPosition}
          onChange={e => setUser({
            ...user,
            playerData: {
              ...user.playerData,
              firstPosition: e.target.value
            }
          })}
        >
          {positions && positions.map((item, idx) => (
            <MenuItem
            key={idx}
            value={item._id}
          >
            {item.name}
          </MenuItem>
          ))}
        </S.SelectComponent>
      </S.Col>
      <S.Col>
        <S.Label>Característica</S.Label>
        <S.SelectComponent
          error={error(user.playerData.characteristic)}
          defaultValue={user.playerData.characteristic}
          onChange={e => setUser({
            ...user,
            playerData: {
              ...user.playerData,
              characteristic: e.target.value
            }
          })}
        >
          {findTypes(user.playerData.firstPosition).map((item, idx) => (
            <MenuItem
              key={idx}
              value={item._id}
            >
              {item.name}
            </MenuItem>
          ))}
        </S.SelectComponent>

      </S.Col>
      <S.Row>
        <S.Title>
          Preferências
        </S.Title>
      </S.Row>
      <S.Col>
        <S.Label>Clube preferido</S.Label>
        <S.SelectComponent
          error={error(user.playerData.fanTeam)}
          defaultValue={user.playerData.fanTeam}
          onChange={e => setUser({
            ...user,
            playerData: {
              ...user.playerData,
              fanTeam: e.target.value
            }
          })}
        >
          {teams && teams.map((item, idx) => (
            <MenuItem
            key={idx}
            value={item._id}
          >
            {`${item.name}-${item.state}`}
          </MenuItem>
          ))}
        </S.SelectComponent>
      </S.Col>
      <S.Col>
        <S.Label>Marca esportiva preferida</S.Label>
        <S.SelectComponent
          error={error(user.playerData.preferedBrand)}
          defaultValue={user.playerData.preferedBrand}
          onChange={e => setUser({
            ...user,
            playerData: {
              ...user.playerData,
              preferedBrand: e.target.value
            }
          })}
        >
          {brands && brands.map((item, idx) => (
            <MenuItem
            key={idx}
            value={item._id}
          >
            {item.name}
          </MenuItem>
          ))}
        </S.SelectComponent>
      </S.Col>
      <S.Col>
        <S.Label>Chuteira que utiliza</S.Label>
        <S.Input 
          error={error(user.playerData.brandBoot)}
          onChange={e => setUser({
            ...user,
            playerData: {
              ...user.playerData,
              brandBoot: e.target.value
            }
          })} 
          value={user.playerData.brandBoot} 
        />
      </S.Col>
      <S.Col>
      <FormControlLabel
          control={<Checkbox checked={user.playerData.contract} onChange={e => setUser({
            ...user,
            playerData: {
              ...user.playerData,
              contract: e.target.checked
            }
          }) } />}
          label="Possui contrato profissional?"
        />
      </S.Col>
      <S.Col>
      <FormControlLabel
          control={<Checkbox checked={user.playerData.agent} onChange={e => setUser({
            ...user,
            playerData: {
              ...user.playerData,
              agent: e.target.checked
            }
          }) } />}
          label="Possui agente ou empresário?"
        />
      </S.Col>
      <S.Bottom>
        <S.Button
          onClick={handleSubmit}
        >
          Atualizar
        </S.Button>
      </S.Bottom>
      </S.Content>
    </S.Container>
    )}
    </React.Fragment>
  )
}

export default EditProfile