import styled from 'styled-components'
import LinearProgress from '@material-ui/core/LinearProgress';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid rgb(207, 216, 220);
  border-radius: 15px;

  h1{
    font-size: 18px;
    color: ${props => props.theme.palette.purple.main};
  }

  p{
    font-size: 14px;
    color: ${props => props.theme.palette.grey.main.main};
    margin: 10px 0;
  }
`

export const List = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px 0;
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 15px;

  p{
    text-align: center;
    font-size: 12px;
  }

  span{
    font-weight: 800;
    color: ${props => props.theme.palette.pink};
  }
`

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: ${props => props.theme.palette.pink};

  ${({ completed, theme }) => completed && `
    background: ${theme.palette.grey.main.main};
  `}

  svg{
    color: #fff;
  }
`

export const Progress = styled.div`
  display: inline;
`

export const Bar = styled(LinearProgress)`
  height: 20px !important;
  border-radius: 20px !important;
  background: ${props => props.theme.palette.purple.light} !important;

  .MuiLinearProgress-barColorPrimary{
    background: ${props => props.theme.palette.purple.main};
  }
`

export const Concluded = styled.p`
  color: ${props => props.theme.palette.purple.main} !important;
  font-weight: 800 !important;
`