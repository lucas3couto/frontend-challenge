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

  p{
    font-size: 14px;
    color: ${props => props.theme.palette.purple.main};
    font-weight: 600;
  }
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid ${props => props.theme.palette.grey.light};
  border-radius: 15px;
`

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`

export const Info = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: 15px;

  h1{
    font-size: 1rem;
    cursor: pointer;
  }
`

export const Avatar = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: ${props => props.theme.palette.grey.main};
  background-image: url(${props => props.image});
  background-size: cover;
`

export const CardContent = styled.div`
  width: 100%;
`

export const CardAction = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h1{
    font-size: 1.2rem;
    margin: 10px 0;
  }

  p{
    font-size: 0.8rem;
    color: ${props => props.theme.palette.grey.main};
  }
`

export const Like = styled.div`

  display: flex;
  flex-direction: row;
  align-items: center;
  span{
    color: ${props => props.theme.palette.grey.main};
    margin-right: 5px;
    font-weight: 800;
  }

  svg{
    font-size: 20px;
    cursor: pointer;
    color: ${props => props.theme.palette.grey.main};
  }

  ${({ like, theme }) => like && `
    svg{
      color: ${theme.palette.pink};
    }
  `}
`