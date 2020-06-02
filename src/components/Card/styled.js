import styled from 'styled-components'

export const Card = styled.div`
  padding: 20px;
  border: 1px solid rgb(207, 216, 220);
  border-radius: 15px;
  cursor: pointer;

  h1{
    font-size: 18px;
    color: ${props => props.theme.palette.black};
    margin-bottom: 15px;
  }

  p{
    font-size: 14px;
    color: ${props => props.theme.palette.grey.main};
  }

  svg{
    font-size: 18px;
    color: ${props => props.theme.palette.grey.main};
    margin-right: 10px;
  }
`