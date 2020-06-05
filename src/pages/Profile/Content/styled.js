import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  margin: 10px 0;

  h1{
    font-size: 20px;
  }

`
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px 0;
`

export const Item = styled.div`
  span{
    font-weight: 800;
  }
`