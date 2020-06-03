import React, { useRef, useState} from 'react'
import * as S from './styled'
import { Grid } from '@material-ui/core'
import { signUpRequest } from '../../store/modules/auth/actions'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import { CircularProgress } from '@material-ui/core';
import history from '../../services/history'
import Logo from '../../assets/img/logo-white.svg'
import { useSelector } from 'react-redux'

const Auth = ({ location: { search }}) => {

  const [,indicated] = search.split("?r=")

  const { loading  } = useSelector(state => state.auth)

  const formRef = useRef(null);
  const dispatch = useDispatch()

  const handleSubmit = async (data, { reset }) => {
    try {
      // Remove all previous errors
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        firstName: Yup.string().required('Esse campo é obrigatório.'),
        lastName: Yup.string().required('Esse campo é obrigatório.'),
        email: Yup.string().email().required('Esse campo é obrigatório.'),
        password: Yup.string().min(6).required('Esse campo é obrigatório.'),
        confirmPassword: Yup.string().min(6).required('Esse campo é obrigatório.'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      // Validation passed
      dispatch(signUpRequest(data, indicated && indicated))
      reset()
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
  }
  
  return(
    <S.Container>
      <S.Logo>
        <img src={Logo} />
      </S.Logo>
      <h1>Cadastre-se</h1>
      <S.Content ref={formRef} onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <S.Input 
            name="firstName"
            label="Primeiro nome"
          />
        </Grid>
        <Grid item xs={12}>
          <S.Input 
            name="lastName"
            label="Sobrenome"
          />
        </Grid>
        <Grid item xs={12}>
          <S.Input 
            name="email"
            label="Email"
          />
        </Grid>
        <Grid item xs={12}>
          <S.Input 
            type="password"
            name="password"
            label="Senha"
          />
        </Grid>
        <Grid item xs={12}>
        <S.Input 
            type="password"
            name="confirmPassword"
            label="Confirme a senha"
          />
        </Grid>
        <Grid item xs={12}>
          <S.Button
            disabled={loading}
          >
            {loading ? (
              <CircularProgress size={30} />
            ) : (
              "Cadastrar"
            )}
          </S.Button>
        </Grid>
        <Grid item xs={12}>
          <p>Já é cadastrado? <span onClick={() => history.push('/entrar')}>Faça o login.</span></p>
        </Grid>
      </Grid>
      </S.Content>
    </S.Container>
  )
}

export default Auth
