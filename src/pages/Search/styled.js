import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
`

export const Main = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
  align-items: center;
`

export const Content = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
`

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid ${props => props.theme.palette.grey.light};
  cursor: pointer;
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-start;

  h1{
    font-size: 18px;
    color: ${props => props.theme.palette.grey.main};
  }

  p{
    font-size: 14px;
    color: ${props => props.theme.palette.grey.main};
  }
`

export const Avatar = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: ${props => props.theme.palette.grey.light};
  display: flex;
  margin-right: 20px;
  background-image: url(${ props => props.image});
  background-size: cover;
`

export const Button = styled.button`
    border: none;
    background: ${props => props.theme.palette.pink};
    padding: 5px 10px;
    color: #fff;
    font-weight: 600;
    border-radius: 15px;

    ${({ disabled, theme }) => disabled && `
      background: ${theme.palette.grey.light};
      color: ${theme.palette.grey.main};
    `}
`

export const Populars = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  h1{
    font-size: 1.2rem;
  }

`

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  padding: 15px;
  box-shadow: 0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20);
  margin: 10px 0;
  cursor: pointer;

`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`