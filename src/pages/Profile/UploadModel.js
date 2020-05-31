import React from 'react'
import Avatar from 'react-avatar-edit'
import Modal from '@material-ui/core/Modal';
import styled from 'styled-components'

const Container = styled.div`

`

const Content = styled.div`
  background: #de45;
  position: absolute;
  width: 400;
`

const UploadModel = ({
  src,
  open
}) => {
  return(
    <Container>
      <Modal
        open={open}
      >
      <Content>
        <Avatar
          width={390}
          height={295}
          onCrop={() => {}}
          onClose={() => {}}
          src={src}
        />
      </Content>
      </Modal>
    </Container>
  )
}

export default UploadModel
