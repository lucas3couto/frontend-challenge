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
  flex: 1;

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
  margin: 20px 0;

  p{
    font-size: 14px;
    color: ${props => props.theme.palette.purple.main};
    font-weight: 600;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: ${props => props.theme.palette.purple.main};
  color: #fff;
  max-width: 500px;
  border-radius: 5px;
  width: 100%;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.20);
  
  h1{
    font-size: 14px;
    color: #fff;
  }

  p{
    color: #fff;
    font-weight: 400;
    margin: 10px 0;
  }

  span{
    font-weight: 800;
  }

`

export const Link = styled.div`
  margin: 50px 0;
  display: flex;
  flex-direction: column;


  span{

  }

  button{
    bordeR: none;
    height: 35px;
    background: ${props => props.theme.palette.purple.main};
    color: #fff;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.20);
    width: 200px;
    border-radius: 5px;
  }
`

export const LinkInput = styled.input`
  padding: 15px;
  border: none;
  border-bottom: 2px solid ${props => props.theme.palette.grey.main.main};
  margin-bottom: 10px;

  ${({ copySuccess, theme }) => copySuccess && `
    background: rgba(114, 110, 255, 0.3);
    color: ${theme.palette.purple.main};
    font-weight: 800;
  `}
`

export const Indications = styled.div`
  display: flex;
  flex-direction: column;

  h1{
    font-size: 18px;
    margin-bottom: 20px;
  }

`

export const User = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin: 10px 0;
  cursor: pointer;

  span{
    font-size: 12px;
  }
`