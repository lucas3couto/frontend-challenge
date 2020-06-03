import React from 'react'
import styled from 'styled-components'
import { CircularProgress } from '@material-ui/core'

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
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
