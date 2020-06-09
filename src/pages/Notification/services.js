import api from '~/services/api'

const requestNotifications = async () => {
  const res = await api.get('/api/notifications')
  return res
}

const requestUpdateNotifications = async (id) => {
 
  const res = await api.put(`/api/notifications/${id}`)
  return res
}

export { requestNotifications, requestUpdateNotifications }