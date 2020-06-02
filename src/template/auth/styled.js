import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  min-height: 100vh;
  background: ${props => props.theme.palette.purple.main};
`