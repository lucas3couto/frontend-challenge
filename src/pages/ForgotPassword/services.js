import api from '../../services/api'

const forgotPasswordRequest = async (data) => {
  try{
    const response  = await api.post('/api/forgot-password', data)
    return response
  } catch (error){
    return error.response
  }
}

const requestValidation = async (data) => {
  try{
    const res = await api.post('/api/forgot-password/validation', data)
    return res
  } catch (error){
    return error.response
  }
}

const resetRequest = async (data) => {
  console.log('Data', data)
  try{
    const response  = await api.post('api/reset-password', data)
    return response
  } catch(err){
    return err.response
  }
}

export { forgotPasswordRequest, requestValidation, resetRequest }