import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  max-width: 100%;
  flex-wrap: wrap;
  min-height: 100%;
  background: ${props => props.theme.palette.purple.main};
`