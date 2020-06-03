import React from 'react'
import styled from 'styled-components'
import { CircularProgress } from '@material-ui/core'

const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  color: #fff;
`

const Loading = (params) => {
  return(
    <Container>
      <CircularProgress />
    </Container>
  )
}

export default Loading
