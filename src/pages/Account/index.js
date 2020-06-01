import React, { useState, useEffect } from 'react'
import * as S from './styled'
import { Tabs, Tab, Paper, CircularProgress, MenuItem } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import { requestFollowing, requestFollowers } from './services'
import history from '../../services/history'
import { useSelector } from 'react-redux';
import Input from '../../components/InputSimple'
import Select from '../../components/Select'
import { Grid } from '@material-ui/core'
import { updateProfileRequest } from '../../store/modules/user/actions'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <S.TabContent
    >
      {value === index && children}
    </S.TabContent>
  );
}

const Connections = ({ location: { pathname } }) => {

  const maskPhone = value => {
    if(value){
      return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d{1,2})/, '$1-$2')
      .replace(/(\d{5})(\d{1,2})/, '$1 $2')
      .replace(/( \d{4})\d+?$/, '$1')
    } else {
      return 
    }
  }

  const maskCPF = value => {
    if(value){
      return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d{1,2})/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1')
    } else {
      return 
    }
  }

  const maskCEP = value => {
    if(value){
      return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d{1,2})/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1')
    } else {
      return 
    }
  }

  const format = value => {
    return value
      .replace(",","")
      .replace("-","")
      .replace(".","")
      .replace(" ","")
  }

  const dispatch = useDispatch()

  const user = useSelector(state => state.user)

  const [value, setValue] = useState(0)
  const [profile, setProfile] = useState(null)
  const [address, setAddress] = useState({})

  useEffect(() => {
    setProfile(user.profile)
    setAddress(user.address)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleData = e => {
    const { name, value } = e.target
    setProfile({
      ...profile,
      [name]: format(value)
    })
  }

  const handleAddress = e => {
    const { name, value } = e.target
    setAddress({
      ...address,
      [name]: format(value)
    })
  }

  const handleSubmit = async () => {
    if(value === 1){
      if(
        !address.street ||
        !address.number ||
        !address.neighborhood ||
        !address.city ||
        !address.state ||
        !address.postalcode
        ){
          toast.error('Preencha os campos obrigatórios.')
      } else {
        dispatch(updateProfileRequest({ address }))
      }
    } else {
      if(
        !profile.firstName ||
        !profile.lastName ||
        !profile.email
        ){
        toast.error('Preencha os campos obrigatórios.')
      } else {
        dispatch(updateProfileRequest(profile))
      }
    }
    
  }
  
  return(
    <S.Container>
      <S.Content>
      <S.Main>
      <S.TabHeader>
        <Tabs
          variant="fullWidth"
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
          >
          <Tab label="Dados Pessoais" />
          <Tab label="Dados Cadastrais" />
      </Tabs>
      </S.TabHeader>
      { profile ? (
        <SwipeableViews
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Input 
                label="Nome" 
                value={profile.firstName} 
                error={profile.firstName}
                name="firstName"
                onChange={handleData}
                />
            </Grid>
            <Grid item xs={12}>
              <Input 
                label="Sobrenome" 
                value={profile.lastName} 
                error={profile.lastName} 
                name="lastName"
                onChange={handleData}
              />
            </Grid>
            <Grid item xs={12}>
              <Input 
                label="Email" 
                value={profile.email} 
                error={profile.email} 
                name="email"
                onChange={handleData}
              />
            </Grid>
            <Grid item xs={12}>
              <Input 
                label="Celular" 
                value={maskPhone(profile.phone)} 
                error={profile.phone} 
                name="phone"
                onChange={handleData}
                />
            </Grid>
            <Grid item xs={12}>
              <Input 
                label="CPF" 
                value={maskCPF(profile.document)} 
                error={profile.document} 
                name="document"
                onChange={handleData}
              />
            </Grid>
            <Grid item xs={12}>
              <Select 
                label="Gênero" 
                value={profile.gender}
                error={profile.gender} 
                name="gender"
                onChange={handleData}
              >
                {['Masculino', 'Feminino'].map((item, idx) => (
                  <MenuItem key={idx} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12}>
              <S.Button 
                fullwidth
                onClick={handleSubmit}
              >
                Atualizar
              </S.Button>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
        <Grid container spacing={3}>
            <Grid item xs={12}>
              <Input 
                label="Logradouro" 
                value={address.street} 
                error={address.street} 
                name="street"
                onChange={handleAddress}
                />
            </Grid>
            <Grid item xs={12}>
              <Input 
                label="Número" 
                value={address.number} 
                error={address.number} 
                name="number"
                onChange={handleAddress}
              />
            </Grid>
            <Grid item xs={12}>
              <Input 
                label="Complemento" 
                value={address.complement} 
                name="complement"
                onChange={handleAddress}
              />
            </Grid>
            <Grid item xs={12}>
              <Input 
                label="Bairro" 
                value={address.neighborhood} 
                error={address.neighborhood} 
                name="neighborhood"
                onChange={handleAddress}
                />
            </Grid>
            <Grid item xs={12}>
              <Input 
                label="Cidade" 
                value={address.city} 
                error={address.city} 
                name="city"
                onChange={handleAddress}
              />
            </Grid>
            <Grid item xs={12}>
              <Input 
                label="CEP" 
                value={maskCEP(address.postalcode)} 
                error={address.postalcode} 
                name="postalcode"
                onChange={handleAddress}
              />
            </Grid>
            <Grid item xs={12}>
              <Input 
                label="Estado" 
                value={address.state} 
                error={address.state} 
                name="state"
                onChange={handleAddress}
              />
            </Grid>
            <Grid item xs={12}>
              <S.Button 
                fullwidth
                onClick={handleSubmit}
              >
                Atualizar
              </S.Button>
            </Grid>
          </Grid>
        </TabPanel>
      </SwipeableViews>
      ) : (
        <S.Loading>
          <CircularProgress />
        </S.Loading>
      )}
      </S.Main>
      </S.Content>
    </S.Container>
  )
}

export default Connections