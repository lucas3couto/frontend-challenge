import React, { useState, useEffect } from 'react'
import * as S from './styled'
import { Tabs, Tab, Paper, CircularProgress } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import { requestFollowing, requestFollowers } from './services'
import history from '../../services/history'

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


  let [,param] = pathname.split('/conexoes/')
  param = param === "seguindo" ? 1 : 0 

  const [value, setValue] = useState(param)
  const [followers, setFollowers] = useState(null)
  const [following, setFollowing] = useState(null)

  const fetch = async () => {
    const resfollowing = await requestFollowing()
    const resfollowers = await requestFollowers()
    setFollowers(resfollowers.data)
    setFollowing(resfollowing.data)
  }
  
  useEffect(() => {
    fetch()
  },[])
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  
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
          <Tab label="Seguidores" />
          <Tab label="Seguindo" />
      </Tabs>
      </S.TabHeader>
      { followers && following ? (
        <SwipeableViews
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0}>
        {followers.length > 0 ? followers.map((item, idx) => (
            <S.Item
              onClick={() => history.push(`/${item.username}`)}
            >
            <S.Info>
              <S.Avatar image={item.avatar && item.avatar.url} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <span>{item.username}</span>
                <p>{`${item.firstName} ${item.lastName}`}</p>
              </div>
            </S.Info>

            <S.Button
              isFollowing={item.isFollowing}
            >
              {item.isFollowing ? 'Seguindo' : 'Seguir'}
            </S.Button>
          </S.Item>
          )) : (
           <div>
              <p>Você ainda não possúi seguidores.</p>
            <S.Indication
              onClick={() => history.push('/indicacoes')}
            >
              Indicar amigo
            </S.Indication>
           </div>
          )}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {following.length > 0 ? following.map((item, idx) => (
            <S.Item
              onClick={() => history.push(`/${item.username}`)}
            >
            <S.Info>
              <S.Avatar image={item.avatar && item.avatar.url} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <span>{item.username}</span>
                <p>{`${item.firstName} ${item.lastName}`}</p>
              </div>
            </S.Info>

            <S.Button
              isFollowing={true}
            >
              Seguindo
            </S.Button>
          </S.Item>
          )) : (
            <p>Você ainda não está seguindo outros jogadores.</p>
          )}
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