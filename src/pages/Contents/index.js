import React,{ useState, useEffect } from 'react'
import * as S from './styled'
import { Grid } from '@material-ui/core'
import history from '~/services/history'
import { useSelector } from 'react-redux'
import { requestContents } from './services'
import { MdDelete } from 'react-icons/md'

const Contents = ({ match: { params }}) => {

  const { username } = useSelector(state => state.user.profile)
  const [content, setContent] = useState(null)
  
  useEffect(() => {
    const request = async () => {
      const res = await requestContents(params.username)
      setContent(res.data)
    }

    request()
  },[params.username])

  return(
    <S.Container>
      <S.Content>
        <S.Header>
          <h1>Conteúdo</h1>
        </S.Header>
        <S.Main>
          {content && (
            <Grid container spacing={3}>
            {content.map((row, idx) => (
              <Grid item xs={12} md={6}>
              <video height="100%" width="100%" onClick={() => history.push(`/${params.username}/midia/${row._id}`)} style={{ cursor: "pointer"}}>
                <source src={row.url} type={row.mime_type} />
              </video>
              <h1>{row.title}</h1>
              <p>
                {row.description}
              </p>
              </Grid>
            ))}
          </Grid>
          )}
        </S.Main>
      </S.Content>
    </S.Container>
  )
}

export default Contents
