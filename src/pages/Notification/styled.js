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
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid ${props => props.theme.palette.grey.light};

  &:hover{
    background: ${props => props.theme.palette.grey.light};
    cursor: pointer;
  }

  p{
    width: 100%;
    font-size: 14px;
    color: ${props => props.theme.palette.grey.main};
    font-weight: 400;
  }

  span{
    font-size: 16px;
    color: ${props => props.theme.palette.purple.main};
    font-weight: 600;
  }

`

export const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${props => props.theme.palette.grey.main};
  background-image: ${props => props.image};
  background-size: cover;
`

export const AvatarBlock = styled.div`
  margin-right: 10px;
`
export const List = styled.div`
  display: flex;
  flex-direction: column;
`