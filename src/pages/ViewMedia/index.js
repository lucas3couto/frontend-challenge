/* eslint-disable react-hooks/exhaustive-deps */
import React , { useState, useEffect }from 'react'
import * as S from './styled'
import { requestMedia, requestDeleteMedia } from './services'
import Loading from '~/components/Loading'
import { FaArrowLeft, FaEllipsisV } from 'react-icons/fa'
import history from '~/services/history'
import Popover from '@material-ui/core/Popover';
import { MdDelete } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { CircularProgress } from '@material-ui/core'

const Media = ({ match: { params: { id, username }}}) => {

  const [user, setUser] = useState(null)
  const [anchorEl, setAnchorEl] = useState(null);
  const [remove, setRemove] = useState(false)
  const [loading, setLoading] = useState(false)

  const open = Boolean(anchorEl);

  const { profile } = useSelector(state => state.user)
  
  const fetch = async () => {
    const res = await requestMedia(username, id)
    setUser(res.data)
  }

  useEffect(() => {
    fetch()
  },[])

  const handleDelete = async () => {
    setLoading(true)
    const res = await requestDeleteMedia(id)
    if(res.status === 200){
      toast.success("Conteúdo excluido")
      history.push(`/${username}`)
    }
    setLoading(false)
      setRemove(false)
      setAnchorEl(false)
  }

  const handleClose = () => {
    setRemove(false)
    setAnchorEl(null)
  }

  return(
    <S.Container>
      {user ? (
      <React.Fragment>
        <S.Header>
        <FaArrowLeft onClick={() => history.goBack()} />
        { profile.username === username && (
          <FaEllipsisV onClick={e => setAnchorEl(e.currentTarget)} />
        )}
        <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <S.Menu>
          <S.MenuItem>
            {remove ? (
              <div>
                <p>Deseja realmente excluir?</p>
                <S.Remove
                  onClick={handleDelete}
                >
                Excluir
              </S.Remove>
              </div>
            ) : (
              <div
                onClick={() => setRemove(true)}
              >
               {loading ? (
                 <CircularProgress />
               ) : (
                 <React.Fragment>
                    <MdDelete />
                    Excluir vídeo
                 </React.Fragment>
               )}
              </div>
            )}
          </S.MenuItem>
        </S.Menu>
      </Popover>
      </S.Header>
      <S.Bottom>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            height: "100%"
          }}
        >
          <S.Avatar image={user.avatar} />
          <div>
            <h1>{user.name}</h1>
          </div>
        </div>
      </S.Bottom>
        <S.Video controls autoPlay>
        <source src={user.content.url} type={user.content.mime_type}/>
      </S.Video>
      </React.Fragment>
      ) : <Loading />}
    </S.Container>
  )
}

export default Media