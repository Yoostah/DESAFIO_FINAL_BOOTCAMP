import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';

import { Container, Content, User } from './styles';

import logo from '~/assets/logo.svg';

export default function Header() {
  const dispatch = useDispatch();

  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <Link to="/dashboard">
          <nav>
            <img src={logo} alt="Meetapp" />
          </nav>
        </Link>
        <aside>
          <User>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <button type="button" onClick={() => dispatch(signOut())}>
              Sair
            </button>
          </User>
        </aside>
      </Content>
    </Container>
  );
}
