import api from '~/services/api'

const requestContents = async (username) => {
  try{
    const res = await api.get('api/users/content', { params: { username }})
    return res
  } catch (error){
    return error.response
  }
}

const requestDeleteMedia = async (id) => {
  try{
    const res = await api.delete(`api/users/content/${id}`)
    return res
  } catch (error){
    return error.response
  }
}

export { requestContents, requestDeleteMedia }