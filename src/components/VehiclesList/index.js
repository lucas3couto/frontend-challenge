import React from 'react';
import * as S from './styled';
import { IoMdCloseCircleOutline } from 'react-icons/io';

export default function VehiclesList({ deleteVehicle, data }) {
  return (
    <S.Wrapper>
      {data &&
        data.map(({ id, plate }) => (
          <S.Item key={id}>
            <p>{plate}</p>
            <IoMdCloseCircleOutline
              onClick={() => deleteVehicle(id)}
              size={24}
              color="#ff0000"
            />
          </S.Item>
        ))}
    </S.Wrapper>
  );
}
