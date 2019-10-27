import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '~/services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, avatar_id, ...rest } = payload.data;

    const profile = Object.assign(
      { name, email, avatar_id },
      rest.oldPassword ? rest : {}
    );

    if (rest.oldPassword && !rest.password) {
      Alert.alert('Erro ao atualizar perfil', 'Informe a nova Senha!');
      yield put(updateProfileFailure());
      return;
    }

    if (rest.password !== rest.confirmPassword) {
      Alert.alert('Erro ao atualizar perfil', 'As senhas não são iguais.');
      yield put(updateProfileFailure());
      return;
    }
    const response = yield call(api.put, 'users', profile);
    Alert.alert('Sucesso', 'Perfil Atualizado com sucesso!');

    yield put(updateProfileSuccess(response.data));
  } catch (error) {
    Alert.alert(
      'Erro ao atualizar perfil',
      'Houve um erro ao atualizar o Perfil, verifique os dados.'
    );

    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
