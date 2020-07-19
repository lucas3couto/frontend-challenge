import styled from 'styled-components';
import { Form } from '@unform/web';

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  padding: 25px;
  align-items: center;
  justify-content: center;
`;

export const FormCard = styled(Form)`
  width: 100%;
  max-width: 450px;
`;
