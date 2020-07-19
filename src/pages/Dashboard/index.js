import React, { useEffect, useState, useRef } from 'react';
import * as S from './styled';
import Input from '../../components/Input';
import * as Yup from 'yup';
import { MdAdd } from 'react-icons/md';
import { getPlates, addPlates, deletePlates } from './services';
import { toast } from 'react-toastify';
import VehiclesList from '../../components/VehiclesList';
import Modal from '@material-ui/core/Modal';

export default function Dashboard() {
  const formRef = useRef(null);
  const [plates, setPlates] = useState(null);
  const [open, setOpen] = useState(false);
  const [deletePlate, setDeletePlate] = useState(null);

  const fetchData = async () => {
    const res = await getPlates();
    setPlates(res.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (data, { reset }) => {
    try {
      // Remove all previous errors
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        plate: Yup.string()
          .length(7, 'A placa deve conter 7 caractéres.')
          .required('Informe uma placa.'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      // Validation passed
      const res = await addPlates(data);
      if (res.status === 200) {
        toast.success('Veículo adicionado.');
        fetchData();
        reset();
      } else {
        toast.error('Verifique as informações do veículo.');
      }
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

  const deleteVehicle = async () => {
    try {
      await deletePlates(deletePlate);
      toast.success('Veículo excluído.');
      fetchData();
      setOpen(false);
      setDeletePlate(null);
    } catch (err) {
      console.log(err);
    }
  };

  const handleOpen = (id) => {
    setDeletePlate(id);
    setOpen(true);
  };

  const handleClose = () => {
    setDeletePlate(null);
    setOpen(false);
  };

  return (
    <React.Fragment>
      <S.Wrapper>
        <S.Container>
          <S.Header>
            <S.Title>Adicionar novo veículo</S.Title>
            <S.Find onSubmit={handleSubmit} ref={formRef}>
              <Input name="plate" placeholder="Placa" />
              <button>
                <MdAdd size={24} />
              </button>
            </S.Find>
          </S.Header>
          <S.Main>
            <S.Title>Veículos</S.Title>
            {plates && plates.length > 0 ? (
              <VehiclesList data={plates} deleteVehicle={handleOpen} />
            ) : (
              <p>Nenhum veículo cadastrado.</p>
            )}
          </S.Main>
        </S.Container>
      </S.Wrapper>
      <Modal
        style={{
          display: 'flex',
          padding: 25,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <S.ModalMain>
          <p>Você deseja excluir esse veículo?</p>
          <S.ModalAction>
            <S.ModalButton onClick={handleClose}>Cancelar</S.ModalButton>
            <S.ModalButton active onClick={deleteVehicle}>
              Sim
            </S.ModalButton>
          </S.ModalAction>
        </S.ModalMain>
      </Modal>
    </React.Fragment>
  );
}
