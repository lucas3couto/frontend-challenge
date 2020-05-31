import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  padding: 25px;
  cursor: pointer;

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

export const Card = styled.div`
  padding: 20px;
  border: 1px solid ${props => props.theme.palette.gray.light};
  border-radius: 15px;
  cursor: pointer;

  h1{
    font-size: 18px;
    color: ${props => props.theme.palette.primary.main};
    margin-bottom: 15px;
  }

  p{
    font-size: 14px;
    color: ${props => props.theme.palette.gray.main};
  }

  svg{
    font-size: 18px;
    color: ${props => props.theme.palette.gray.main};
    margin-right: 10px;
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`