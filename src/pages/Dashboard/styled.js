import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  padding: 25px;
  cursor: pointer;

  @media(min-width: 768px){
   align-content: center;
   justify-content: center; 
  }
`

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  @media(min-width: 768px){
   max-width: 500px;
   width: 100%; 
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`