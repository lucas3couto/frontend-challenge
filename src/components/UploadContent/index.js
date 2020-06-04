/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { 
  Grid, 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogTitle, 
  Slide,
  CircularProgress,
} from '@material-ui/core';
import Input from '~/components/InputSimple'
import TextArea from '~/components/TextArea'
import Dropzone from '~/components/Dropzone'
import ListFile from '~/components/UploadedFile'
import filesize from 'filesize'
import { uniqueId } from 'lodash'
import api from '~/services/api';
import { Button } from './styled'


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ open, close, submit, loading }) {

  const [uploadedFile, setUploadedFile] = useState(null)
  const [up, setUp] = useState(false)
  const [title, setTitle] = useState(null)
  const [description, setDescription] = useState(null)

  const disabled = () => {
    if(uploadedFile && !uploadedFile.uploaded || !title || loading){
      return true
    } else {
      return false
    }
  }


  const handleUpload = async files => {
    const file = files[0]
    const upload = {
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null,
      size: file.size,
      type: file.type
    }
    setUploadedFile(upload)
    setUp(!up)
    
  }

 const updateFile = (id, data) => {
   if(data.uploaded){
    setUploadedFile({
      ...uploadedFile,
      uploaded: data.uploaded,
      url: data.url,
      id: data.id
    })
   } else {
    setUploadedFile({
      ...uploadedFile,
      progress: data.progress,
    })  
  }
  };

  useEffect(() => {
    processUpload(uploadedFile)
  },[up])

  const processUpload = (upload) => {
    if(upload){
      console.log('received', uploadedFile)
    const data = new FormData();
    data.append("file", upload.file, upload.name);
    api
    .post("api/upload/file", data, {
      onUploadProgress: e => {
        const progress = parseInt(Math.round((e.loaded * 100) / e.total));

        updateFile(upload.id, {
          progress
        });
      }
    })
    .then(response => {
      updateFile(upload.id, {
        uploaded: true,
        id: response.data._id,
        url: response.data.url
      });
    })
    .catch(() => {
      updateFile(upload.id, {
        error: true
      });
    });
    }
  }

  const handleDelete = async id => {
    await api.delete(`/api/upload/file/${id}`);
    setUploadedFile(null)
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={close}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Upload de conteúdo"}</DialogTitle>
        <DialogContent>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              {uploadedFile ? (
                <ListFile 
                  file={uploadedFile}
                  onDelete={handleDelete}
                />
              ) : (
                <Dropzone 
                  accept="video" 
                  placeholder="Arreste ou clique para dicionar seu vídeo. Tamanho máximo: 100Mb" 
                  onUpload={handleUpload}
                />
              )}
            </Grid>
            <Grid item xs={12}>
              <Input  
                label="Título do vídeo"
                onChange={e => setTitle(e.target.value)}
                value={title}
              />
            </Grid>
            <Grid item xs={12}>
              <TextArea
                rows={4}  
                label="Descrição do vídeo"
                onChange={e => setDescription(e.target.value)}
                value={description}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                onClick={() => uploadedFile.uploaded && title && submit({
                  title,
                  description,
                  url: uploadedFile.url,
                  mime_type: uploadedFile.type,
                  file_size: uploadedFile.size,
                })}
                disabled={disabled()}
              >
                {loading ? (
                  <CircularProgress size={24} />
                ) : (
                  'Enviar'
                )}
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}