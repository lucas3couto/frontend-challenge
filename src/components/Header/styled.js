import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${(props) => props.theme.palette.purple.main};
  display: flex;
  height: 66px;
  align-items: center;
  padding: 0 25px;
  justify-content: space-between;

  h1 {
    font-size: 1.2rem;
    color: #fff;
  }

  svg {
    font-size: 24px;
    color: #fff;

    &:hover {
      opacity: 0.9;
      cursor: pointer;
    }
  }
`;
