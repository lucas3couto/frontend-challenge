import React from 'react'
import * as S from './styled'
import { FaSearch } from 'react-icons/fa'

const Search = (props) => {
  
  return(
    <S.Container>
      <FaSearch />
      <input {...props} />
    </S.Container>
  )
}

export default Search
