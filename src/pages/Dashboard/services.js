import api from '../../services/api'

const requestPositions = async () => {
  const res = await api.get('/api/admin/positions')
  return res
}

const requestTeams = async () => {
  const res = await api.get('/api/admin/teams')
  return res
}

const requestBrands = async () => {
  const res = await api.get('/api/admin/brands')
  return res
}

const requestIndications = async () => {
  const res = await api.get("api/indications")
  return res
}

export { requestPositions, requestTeams, requestBrands, requestIndications }