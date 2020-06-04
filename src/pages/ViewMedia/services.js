import api from '~/services/api'

const requestMedia = async (username, id) => {
  try{
    const res = await api.get(`api/users/media/${id}`, { params: { username }})
    return res
  } catch (error){
    return error.response
  }
}

export { requestMedia }