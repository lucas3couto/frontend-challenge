import api from '~/services/api'

const requestSearch = async (text) => {
  
  const params = {
    text
  }
  
  try{
    const res = await api.get('api/search/users',{ params })

    return res

  } catch (error) {
    return error.response
  }
}

const requestMostPopulars = async (req, res) => {
  try{
    const res = await api.get('api/users/populars')
    return res
  } catch(error){
    return error.response
  }
}
export { requestSearch, requestMostPopulars }