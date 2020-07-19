import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  height: 55px;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.palette.grey.light};

  p {
    font-size: 1.2rem;
  }

  svg {
    cursor: pointer;
  }
`;
