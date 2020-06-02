import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  background: ${props => props.theme.palette.purple.main};
  z-index: 100;
  flex-direction: column;
  overflow-x: hidden;
`

export const Header = styled.div`

  @media(min-width: 768px){
    width: 100%;
    height: 300px;
  }

`

export const Content = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: Center;
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`

export const Card = styled.div`
  display: flex;
  flex: 1;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.20);
  background: #fff;
  padding: 15px;
  border-radius: 15px;

`

export const Svg = styled.svg`
  height: 200px;

  @media(min-width: 768px){
    width: 100%;
    height: auto;
    position: absolute;
    top: -100px;
  }
`

export const Positions = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0;
`

export const Pos = styled.div`
  height: 15px;
  width: 15px;
  border-radius: 50%;
  margin: 0 10px;
  border: 1px solid #fff;
  ${({ active }) => active && `
    background: #fff;
  `}
`

export const Actions = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  margin: 15px 0;
`
export const Button = styled.button`
  border: none;
  height: 35px;
  min-width: 100px;
  border-radius: 5px;
  font-weight: 800;
  background: ${props => props.theme.palette.grey.main.light};
  color: ${props => props.theme.palette.grey.main.main};

  ${({ next, theme }) => next && `
    background: #fff;
    color: ${theme.palette.purple.main};
  `}

`