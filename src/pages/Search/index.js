import React, { useState, useEffect} from 'react'
import * as S from './styled'
import Header from '~/components/Header'
import { FaArrowLeft, FaSearch } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'
import history from '~/services/history'
import Search from '~/components/Search'
import { requestSearch, requestMostPopulars } from './services'
import { useSelector } from 'react-redux'
import Loading from '~/components/Loading'

const Feed = (params) => {

  const [search, setSearch] = useState(false)
  const [text, setText] = useState('')
  const [users, setUsers] = useState(null)
  const [mostPopulars, setMostPopulars] = useState(null)

  const fetchMostPopulars = async () => {
    const res = await requestMostPopulars()
    setMostPopulars(res.data)
  }


  useEffect(() => {
    fetchMostPopulars()
  },[])

  const userId = useSelector(state => state.user.profile.id)

  const handleChange = async e => {
    setText(e.target.value)
    const response = await requestSearch(text)
    setUsers(response.data)
  }

  return(
    <S.Container>
      <Header 
        left={<FaArrowLeft style={{ cursor: "pointer"}} onClick={() => history.goBack()} />} 
        middle={search && <Search value={text} onChange={handleChange} placeholder="Procurar por usuários" />}
        right={search ? <MdClose style={{ cursor: "pointer"}} onClick={() => setSearch(false)} /> : <FaSearch style={{ cursor: "pointer"}} onClick={() => setSearch(true)} />}
      />
      <S.Main>
        <S.Content>
        {mostPopulars ? (
          <S.Populars>
            {search && users ? users.map((row, idx) => (
  <S.Item
    onClick={() => history.push(`/${row.username}`)}
    key={idx}
  >
  <S.Avatar image={row.avatar} />
  <S.Infos>
    <h1>{`${row.name}`}</h1>
    <p>@{row.username}</p>
  </S.Infos>
</S.Item>
)) : (
  <S.Populars>
    <h1>Perfis em Destaque</h1>
    <S.List>
      {
        mostPopulars.map((row, idx) => (
          <S.Card
          onClick={() => history.push(`/${row.username}`)}
          key={idx}
        >
        <S.Avatar image={row.avatar} />
        <S.Infos>
          <h1>{`${row.name}`}</h1>
          <p>@{row.username}</p>
        </S.Infos>
        </S.Card>
        ))
      }
    </S.List>
  </S.Populars>
)}
          </S.Populars>
        ) : (
          <Loading />
        )}
        </S.Content>
      </S.Main>
    </S.Container>
  )
}

export default Feed