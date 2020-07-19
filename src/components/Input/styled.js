import styled from 'styled-components';

export const Container = styled.div`
  border: 2px solid ${(props) => props.theme.palette.grey.light};
  border-radius: 5px;
  width: 100%;
  height: 40px;
  padding: 0 15px;
  display: flex;
  flex-direction: row;

  &:hover {
    border: 2px solid ${(props) => props.theme.palette.grey.main};
  }

  &:focus-within {
    border: 2px solid ${(props) => props.theme.palette.purple.main};
  }

  ${({ error }) =>
    error &&
    `
    border-bottom: 2px solid #E53935;
  `}
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  font-size: 16px;
  background: transparent;
  color: ${(props) => props.theme.palette.black};

  &:focus ${Container} {
  }
`;

export const Error = styled.div`
  width: 100%;
  padding: 5px 15px;
  background: #ffcdd2;
  color: #e53935;
  font-size: 12px;
`;
