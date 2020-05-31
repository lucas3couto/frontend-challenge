import api from '../../services/api'

const requestProfile = async (username) => {
  const response = await api.get(`api/profiles?username=${username}`)
  return response
}

const requestFollowing = async (playerId) => {

  const response = await api.post('api/following', { playerId })
  return response
} 

const requestunFollowing = async (playerId) => {

  const response = await api.delete('api/following', { params: { playerId } })
  return response
} 

export { requestProfile, requestFollowing, requestunFollowing}