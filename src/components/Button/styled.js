import styled from 'styled-components';

export const Button = styled.button`
  background: ${(props) => props.theme.palette.purple.main};
  border: none;
  color: #fff;
  height: 44px;
  min-width: 140px;
  border-radius: 5px;

  &:hover {
    opacity: 0.9;
  }

  ${({ fullwidth }) =>
    fullwidth &&
    `
    width: 100%;
  `}
`;
