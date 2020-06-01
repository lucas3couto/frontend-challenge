import api from '../../../services/api'

const requestFollowers = async (username) => {
  const res = await api.get(`api/followers?username=${username}`)
  return res
}

const requestFollowing = async (username) => {
  const res = await api.get(`api/following?username=${username}`)
  return res
}

const requestAddFollowing = async (playerId) => {

  const response = await api.post('api/following', { playerId })
  return response
} 

const requestUnFollowing = async (playerId) => {

  const response = await api.delete('api/following', { params: { playerId } })
  return response
} 

export { requestFollowers, requestFollowing, requestAddFollowing, requestUnFollowing }