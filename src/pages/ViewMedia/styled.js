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