import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  background: #000;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export const Video = styled.video`
  width: 100%;
  max-width: 500px;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 25px;
  height: 60px;
  color: #fff !important;
  position: absolute;
  top: 0;
  width: 100%;
  align-items: center;
  z-index: 999;

  svg{
    cursor: pointer;
  }
`

export const Bottom = styled.div`
display: flex;
justify-content: space-between;
padding: 0 25px;
height: 60px;
color: #fff !important;
position: absolute;
bottom: 0;
width: 100%;
align-items: center;
z-index: 999;

h1{
  font-size: 14px;
}
  
`

export const Like = styled.div`

  display: flex;
  flex-direction: row;
  align-items: center;
  span{
    color: #fff;
    margin-right: 5px;
    font-weight: 800;
  }

  svg{
    font-size: 20px;
    cursor: pointer;
  }

  ${({ like, theme }) => like && `
    svg{
      color: ${theme.palette.pink};
    }
  `}
`

export const Avatar = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: ${props => props.theme.palette.grey.light};
  background-image: url(${props => props.image});
  background-size: cover;
  margin-right: 15px;
  cursor: pointer;
`

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #fff;
`

export const MenuItem = styled.div`
  display: flex;
  flex-direction: row;

  svg{
    margin-right: 5px;
  }
`

export const Remove = styled.div`
  background: ${props => props.theme.palette.pink};
  padding: 10px;
  color: #fff;
  border-radius: 5px;
  margin-top: 15px;
  cursor: pointer;
`