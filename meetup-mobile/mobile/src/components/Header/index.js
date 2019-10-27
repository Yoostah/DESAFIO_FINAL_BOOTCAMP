import React from 'react';
import { TouchableOpacity } from 'react-native';

import logo from '../../assets/logo.png';
import { Container, ImageLogo } from './styles';

export default function Header({ navigation }) {
  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
        <ImageLogo source={logo} />
      </TouchableOpacity>
    </Container>
  );
}
