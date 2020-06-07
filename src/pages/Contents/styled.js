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
  flex: 1;
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

  h1{
    font-size: 14px;
    margin-bottom: 5px;

  }

  p{
    font-size: 12px;
    color: ${props => props.theme.palette.grey.main};
    font-weight: 600;
    margin-bottom: 5px;
  }

  svg{
    font-size: 20px;
    color: ${props => props.theme.palette.pink};
    cursor: pointer;
  }
`