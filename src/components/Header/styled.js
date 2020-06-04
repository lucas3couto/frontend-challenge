import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  width: 100%;
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
`

export const Item = styled.div`

  svg{
    font-size: 20px;
  }

`