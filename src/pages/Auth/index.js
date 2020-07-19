import React, { useRef } from 'react';
import * as S from './styled';
import Button from '../../components/Button';
import * as Yup from 'yup';
import Input from '../../components/Input';
import { signInRequest } from '../../store/modules/auth/actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default function Auth() {
  const { loading } = useSelector((state) => state.auth);
  const formRef = useRef(null);
  const dispatch = useDispatch();

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
      dispatch(signInRequest(data));
      reset();
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
  };

  return (
    <S.Wrapper>
      <S.FormCard onSubmit={handleSubmit} ref={formRef}>
        <Input
          name="email"
          placeholder="Email"
          style={{
            marginBottom: 15,
          }}
        />
        <Input
          type="password"
          name="password"
          placeholder="Senha"
          style={{
            marginBottom: 15,
          }}
        />
        <Button fullwidth>Entrar</Button>
      </S.FormCard>
    </S.Wrapper>
  );
}
