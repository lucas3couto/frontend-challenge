import api from '~/services/api'

const requestContent = async (content) => {
  try{
    const res = await api.post('api/users/content', content)
    return res
  } catch (error){
    return error.response
  }
}

const requestNotifications = async () => {
  try{
    const res = await api.get('api/notifications')
    return res
  } catch (error){
    return error.response
  }
}

export { requestContent, requestNotifications }