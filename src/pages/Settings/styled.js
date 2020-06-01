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
  flex-direction: column;
`

export const Item = styled.div`
  display: flex;
  padding: 15px 0;
  width: 100%;
  flex-direction: row;
  color: ${props => props.theme.palette.gray.main};
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.palette.gray.light};
  cursor: pointer;

  svg{
    font-size: 24px;
    margin-right: 15px;
  }

  p{
    color: ${props => props.theme.palette.gray.main};
    font-weight: 400;
    font-size: 18px;
  }
`