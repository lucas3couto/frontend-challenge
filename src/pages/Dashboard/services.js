import api from '../../services/api';

async function getPlates() {
  try {
    const res = await api.get('/vehicle');
    return res;
  } catch (err) {
    return err.response;
  }
}

async function addPlates(data) {
  try {
    const res = await api.post('/vehicle', data);
    return res;
  } catch (err) {
    return err.response;
  }
}

async function deletePlates(id) {
  try {
    const res = await api.delete(`/vehicle/${id}`);
    return res;
  } catch (err) {
    return err.response;
  }
}

export { getPlates, addPlates, deletePlates };
