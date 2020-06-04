import React from "react";
import { CircularProgress } from "@material-ui/core";
import { MdCheckCircle, MdError, MdLink } from "react-icons/md";

import { Container, FileInfo, Preview } from "./styled";

const FileList = ({ file, onDelete }) => {

  return (
    <Container>
      <li key={file.id}>
          <FileInfo>
            <Preview src={file.preview} />
            <div>
              <strong>{file.name}</strong>
              <span>
                {file.readableSize}{" "}
                {!!file.url && (
                  <button onClick={() => onDelete(file.id)}>
                    Excluir
                  </button>
                )}
              </span>
            </div>
          </FileInfo>
  
          <div>
            {!file.uploaded &&
              !file.error && (
                <CircularProgress size={24} variant="static" value={file.progress} />
              )}
  
            {file.uploaded && <MdCheckCircle size={24} color="#78e5d5" />}
            {file.error && <MdError size={24} color="#e57878" />}
          </div>
        </li>
    </Container>
  )
};

export default FileList;