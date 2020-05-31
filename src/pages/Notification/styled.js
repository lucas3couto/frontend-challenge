import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  padding: 25px;

  @media(min-width: 768px){
   align-content: center;
   justify-content: center; 
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  @media(min-width: 768px){
   max-width: 500px;
   width: 100%; 
  }
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;

  h1{
    font-size: 18px;
  }
`

export const Main = styled.div`
  display: flex;
  flex-direction: row;

  p{
    font-size: 14px;
    color: ${props => props.theme.palette.primary.main};
    font-weight: 600;
  }
`