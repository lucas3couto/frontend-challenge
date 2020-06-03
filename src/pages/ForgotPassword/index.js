import React, { useState } from 'react'
import * as S from './styled'
import { forgotPasswordRequest, resetRequest, requestValidation } from './services'
import { toast } from 'react-toastify'
import history from '../../services/history'
import { CircularProgress } from '@material-ui/core'

const ForgotPassword = (params) => {

  const [validation, setValidation] = useState(false)
  const [reset, setReset] = useState(false)
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  const [loading, setLoading] = useState(false)
  const [resend, setReSend] = useState(false)

  const handleChange = e => {
    if(validation){
      setCode(e.target.value)
    } else {
      setEmail(e.target.value)
    }
  }

  const reSend = async () => {
    setReSend(true)
    const response = await forgotPasswordRequest({ email })
    if(response.status === 200){
      toast.success('Email enviado.')
    }
    if(response.status === 400){
      toast.error(response.data.error)
    }
    setReSend(false)
  }

  const handleSubmit = async () => {
    setLoading(true)
    if(reset){
      const response = await resetRequest({ email, password, confirmPassword})
      if(response.status === 200){
        toast.success('Sua senha foi alterada.')
        history.push('/entrar')
      } else{
        toast.error(response.data.error)
      }
    } else {
      if(validation){
        const data = { email, code }
        const response = await requestValidation(data)
        if(response.status === 200){
          setReset(true)
          
        }
        if(response.status === 400){
          toast.error(response.data.error)
        }
        setLoading(false)
        
      } else {
        const response = await forgotPasswordRequest({ email })
        if(response.status === 200){
          setValidation(true)
        }
        if(response.status === 400){
          toast.error(response.data.error)
        }
        setLoading(false)
      }
    }
  }

  return(
    <S.Container>
      <S.Content>
      {reset ? (
        <React.Fragment>
        <h1>Escolha uma nova senha</h1>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)}placeholder="Nova senha" />
        <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}placeholder="Confirme a nova senha" />
        <S.Button
          loadding={loading}
          onClick={handleSubmit}
        >
          Alterar senha
        </S.Button>
      </React.Fragment>
      ) : (
        <React.Fragment>
          <h1>
        {validation ? 'Validação' : 'Esqueceu sua senha?'}
      </h1>
      <h3>
        {validation ? 'Insira o código de validação que foi enviado para seu email.' : 'Insira com o email vinculado a sua conta.'}
      </h3>
      {!validation && (
        <p>Enviaremos um email para que você possa resetar a sua senha.</p>
      )}
      <input 
        value={validation ? code : email} 
        onChange={handleChange} 
        placeholder={
          validation ? 
          'Informe o código de validação' : 
          'Informe seu email'} 
        />
      <S.Button
        loading={loading}
        onClick={handleSubmit}
      >
        {loading ? <CircularProgress size={20} /> : (
          <React.Fragment>
            {validation ? 'Verificar' : 'Enviar'}
          </React.Fragment>
        )}
      </S.Button>
      {!validation && !reset && (
        <S.Back onClick={() => history.push('/entrar')}>Fazer Login</S.Back>
      )}
      {!reset && validation && (
        <S.Back onClick={reSend}>
          {resend ? <CircularProgress size={20} /> : 'Reenviar email'}
        </S.Back>
      )}
        </React.Fragment>
      )}
      </S.Content>
    </S.Container>
  )
}

export default ForgotPassword