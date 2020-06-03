import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  min-height: 100%;
  background: #fff;
  justify-content: center;
  align-items: center;
  padding: 25px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  align-items: center;

  h1{
    text-align: center;
    color: ${props => props.theme.palette.grey.main};
    margin: 5px 0;
  }

  h3{
    text-align: center;
    color: ${props => props.theme.palette.grey.main};
    margin: 5px 0;
  }

  p{
    text-align: center;
    color: ${props => props.theme.palette.grey.main};
    margin: 5px 0;
  }

  input{
    width: 100%;
    border: none;
    border-bottom: 1px solid ${props => props.theme.palette.grey.main};
    margin-top: 30px;
    text-align: center;
    font-size: 1.2rem;
    padding: 10px 0;
    color: ${props => props.theme.palette.grey.main};
  }

`

export const Button = styled.button`
    background: ${props => props.theme.palette.purple.main};
    border: none;
    height: 40px;
    border-radius: 50px;
    min-width: 120px;
    color: #fff;
    font-weight: 800;
    text-transform: uppercase;
    margin-top: 50px;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.20);
    padding: 5px 10px;

    ${({ loading, theme }) => loading && `
      background: ${theme.palette.grey.light};
    `}
`

export const Back = styled.div`
    margin-top: 25px;
    color: ${props => props.theme.palette.pink};
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
`