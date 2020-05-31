import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100vh;
  background: ${props => props.theme.palette.primary.main};
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;

  h1{
    font-size: 18px;
    color: #fff;
  }
`

export const HeaderIcon = styled.div`

  cursor: pointer;

  svg{
    color: #fff;
    font-size: 20px;
  }

`

export const Main = styled.div`
  display: flex;
  flex: 1;
  overflow-y: auto;
  height: 100%;
  background: #fff;
`

export const MenuBottom = styled.div`
  background: #fff;
  ${({ land }) => land && `
    display: none;
  `}
`

export const MenuBottomContent = styled.div`
  display: flex;
  display: row;
  background: #fff;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.20);
  width: 100%;
  height: 70px;
  z-index: 500px;

`

export const MenuBottomItem = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  cursor: pointer;

  ${({ active, theme }) => active && `
    background: ${theme.palette.purple.light};

    svg{
      color: ${theme.palette.primary.main} !important;
    }
  `}

  ${({ more, theme }) => more && `
    background: ${theme.palette.primary.main};
    border-radius: 50%;

    svg{
      color: #fff !important;
    }
  `}

  svg{
    color: ${props => props.theme.palette.gray.main};
    font-size: 20px;
  }
`