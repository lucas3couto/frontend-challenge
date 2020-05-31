
import { takeLatest, call, put, all } from "redux-saga/effects";
import { toast } from "react-toastify";

import api from "../../../services/api";

import { updateProfileSuccess, updateProfileFailure } from "./actions";

export function* updateProfile({ payload }) {
  try {
    const response = yield call(api.put, "api/users", payload.data);

    const { user, social } = response.data;

    toast.success('Usuário atualizado!')

    yield put(updateProfileSuccess( user, social ));
  } catch (err) {
    toast.error("Erro ao atualizar seu perfil, confira seus dados!");
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest("@user/UPDATE_PROFILE_REQUEST", updateProfile)]);