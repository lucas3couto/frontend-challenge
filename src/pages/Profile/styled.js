import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  background: ${props => props.theme.palette.primary.main};
  height: 100%;

  @media(min-width: 768px){
   align-content: center;
   justify-content: center; 
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media(min-width: 768px){
   max-width: 500px;
   width: 100%; 
  }
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0;

  h1{
    font-size: 20px;
    color: #fff;
    margin: 10px 0 5px 0;
  }
`

export const AvatarRounded = styled.div`
  height: 95px;
  width: 95px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #fff;
`
export const Avatar = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background: #fff;
  background-image: url(${props => props.image});
  background-size: cover;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  color: #fff;

  svg{
    margin-left: 10px;
  }
`

export const FollowItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 25px;
  cursor: pointer;

  span{
    font-weight: 800;
  }

  p{
    font-size: 12px;
  }
`

export const FollowButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 15px;
  background: ${props => props.theme.palette.blue.main};
  min-width: 100px;
  height: 30px;
  padding: 0 10px;
  cursor: pointer;

  svg{
    margin: 0;
  }
`

export const Main = styled.div`
  display: flex;
  flex: 1;
  background: #fff;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  padding: 25px;
  box-shadow: 0 9px 12px 1px rgba(0,0,0,0.14), 0 3px 16px 2px rgba(0,0,0,0.12), 0 5px 6px -3px rgba(0,0,0,0.20);


`

export const Score = styled.p`

  span{
    font-weight: 800;
  }
`