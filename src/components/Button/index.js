import React from 'react';
import * as S from './styled';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Button({ children, loading, ...rest }) {
  return (
    <S.Button {...rest}>
      {loading ? (
        <CircularProgress size={20} style={{ color: '#fff' }} />
      ) : (
        children
      )}
    </S.Button>
  );
}
