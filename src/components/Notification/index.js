import React from 'react'
import styled from 'styled-components'
import { MdNotifications } from 'react-icons/md'

const Container = styled.div`
  position: relative;
  svg{
    font-size: 20px;
  }

  div{
    position: absolute;
    top: 0%;
    right: -10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.palette.pink};
    min-height: 17px;
    min-width: 17px;
    border-radius: 50%;
    color: #fff;
    font-weight: 600;
    font-size: 12px;
  }
`

const Notification = ({ number,...props }) => {
  return(
    <Container
      {...props}
    >
      <MdNotifications />
      {number > 0 && (
        <div>
        {
          number > 99 ? '+99' : number
        }
      </div>
      )}
    </Container>
  )
}


export default Notification