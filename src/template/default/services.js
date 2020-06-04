import api from '~/services/api'

const requestContent = async (content) => {
  try{
    const res = await api.post('api/users/content', content)
    return res
  } catch (error){
    return error.response
  }
}

export { requestContent }