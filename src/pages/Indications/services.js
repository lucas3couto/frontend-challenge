import api from '../../services/api'

const requestIndications = async () => {
  const res = await api.get("api/indications")
  return res
}

export { requestIndications }