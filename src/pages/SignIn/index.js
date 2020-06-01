import React, { useRef} from 'react'
import * as S from './styled'
import { Grid } from '@material-ui/core'
import { signInRequest } from '../../store/modules/auth/actions'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import history from '../../services/history'

const Auth = (params) => {

  const formRef = useRef(null);
  const dispatch = useDispatch()

  const handleSubmit = async (data, { reset }) => {
    try {
      // Remove all previous errors
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string().email().required('Esse campo é obrigatório.'),
        password: Yup.string().min(6).required('Esse campo é obrigatório.'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      // Validation passed
      dispatch(signInRequest(data))
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
      <h1>Faça o Login</h1>
      <S.Content ref={formRef} onSubmit={handleSubmit}>
      <Grid container spacing={3}>
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
          <S.Button>
            Entrar
          </S.Button>
        </Grid>
        <Grid item xs={12}>
          <p>Ainda não é cadastrado? <span onClick={() => history.push('/cadastrar')}>Registre-se agora.</span></p>
        </Grid>
      </Grid>
      </S.Content>
    </S.Container>
  )
}

export default Auth
