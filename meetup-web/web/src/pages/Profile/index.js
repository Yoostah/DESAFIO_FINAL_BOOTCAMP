import React from 'react';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';
import { MdAddCircleOutline } from 'react-icons/md';

import { updateProfileRequest } from '~/store/modules/user/actions';

import AvatarInput from './AvatarInput';

import { Container } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string()
    .email()
    .required(),
  oldPassword: Yup.string().when((password, field) =>
    password
      ? field
          .required('Informe a Senha atual.')
          .min(6, 'A Senha deve ter no mínimo 6 caracteres.')
      : field
  ),
  password: Yup.string().when((password, field) =>
    password
      ? field
          .required('Informe a nova senha.')
          .min(6, 'A Senha deve ter no mínimo 6 caracteres.')
      : field.when('oldPassword', (oldPassword, fields) =>
          oldPassword ? fields.required('Informe a nova Senha') : fields
        )
  ),

  confirmPassword: Yup.string().when('password', (password, field) =>
    password
      ? field
          .min(6, 'A Senha deve ter no mínimo 6 caracteres.')
          .oneOf([Yup.ref('password')], 'As senhas devem ser iguais.')
          .required('Informe a nova senha.')
      : field
  ),
});

export default function Profile() {
  const dispatch = useDispatch();

  const profile = useSelector(state => state.user.profile);
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit} schema={schema}>
        <AvatarInput name="avatar_id" />
        <Input name="name" type="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu endereço de E-mail" />
        <hr />
        <Input name="oldPassword" type="password" placeholder="Senha Atual" />
        <Input name="password" type="password" placeholder="Nova Senha" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirmação de Senha"
        />

        <button type="submit">
          <div>
            <MdAddCircleOutline size={20} color="#FFF" />
            {loading ? 'Salvando...' : 'Salvar Perfil'}
          </div>
        </button>
      </Form>
    </Container>
  );
}
