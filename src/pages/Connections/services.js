import api from '../../services/api'

const requestFollowers = async (userId) => {
  const res = await api.get('/api/followers')
  return res
}

const requestFollowing = async (userId) => {
  const res = await api.get('/api/following')
  return res
}

export { requestFollowers, requestFollowing }