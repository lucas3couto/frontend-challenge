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

export const TabHeader = styled.div`
  width: 100%;
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  p{
    font-size: 14px;
    color: ${props => props.theme.palette.primary.main};
    font-weight: 600;
  }
`

export const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin: 15px 0;
`

export const Avatar = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background: ${props => props.theme.palette.gray.main};
  margin-right: 20px;

  background-image: url(${props => props.image});
  background-size: cover;
`

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  cursor: pointer;

  span{
    color: ${props => props.theme.palette.gray.main};
  }
`

export const Button = styled.button`
  border: none;
  background: ${props => props.theme.palette.primary.main};
  color: #fff;
  width: 100px;
  height: 25px;
  border-radius: 5px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.20);

  ${({ isFollowing, theme }) => isFollowing && `
    background: ${theme.palette.gray.main};
  `}

`

export const Indication = styled(Button)`
  background: ${props => props.theme.palette.secondary.main};

  margin: 10px 0;
`

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100%;
`