import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  background: #000;
  align-items: center;
  justify-content: center;
`

export const Video = styled.video`
  width: 100%;
  height: 100%;
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

h1{
  font-size: 14px;
}
  
`

export const Avatar = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: ${props => props.theme.palette.grey.light};
  background-image: url(${props => props.image});
  margin-right: 15px;
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
`