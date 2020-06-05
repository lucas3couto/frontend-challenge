import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  flex-direction: column;
  height: 100%;
  background: ${props => props.theme.palette.purple.main};
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  background: #fff;
  box-shadow: 0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20);

  z-index: 9999;
  
  svg{
    color: ${props => props.theme.palette.grey.main};
  }

  h1{
    font-size: 18px;
  }

  ${({ color, theme}) => color && `
    background: ${theme.palette.purple.main};
    box-shadow: none;
    svg{
      color: #fff;
    }
  
  `}
`

export const HeaderIcon = styled.div`

  cursor: pointer;

  svg{
    font-size: 20px;
  }

`

export const Main = styled.div`
  display: flex;
  flex: 1;
  overflow-y: auto;
  height: 100%;
  background: #fff;;
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

  svg{
    color: ${props => props.theme.palette.purple.main} !important;
    font-size: 20px;
  }

  ${({ active, theme }) => active && `
    background: ${theme.palette.purple.light};

    svg{
      color: ${theme.palette.purple.main} !important;
    }
  `}

  ${({ more, theme }) => more && `
    background: ${theme.palette.purple.main};
    border-radius: 50%;

    svg{
      color: #fff !important;
    }
  `}
`

export const Logo = styled.div`
  img{
    width: 35px;
  }
`