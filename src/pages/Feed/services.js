import api from '~/services/api'

const requestFeed = async () => {
  const res = await api.get('/api/feed')
  return res
}

const requestLike = async (id) => {
  try{
    const res = await api.post('api/users/content/likes', { id })
    return res
  } catch (error){
    return error.response
  }
}

const requestUnLike = async (id) => {
  try{
    const res = await api.get('api/users/content/likes', { params: { id }})
    return res
  } catch (error){
    return error.response
  }
}

export { requestFeed, requestLike, requestUnLike }