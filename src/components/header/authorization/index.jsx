import React from 'react';
import styled from '@emotion/styled';

import SignIn from '../sign-in';
import LogoNav from '../logo-nav';

import Background from '../../../assets/image/castelmezzano.png';
import { Container } from '../../../constants/style.variable';

const HeaderAuthorization = styled.header`
  background-color: ${(props) => props.theme.primaryDark};
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  min-height: 900px;
`;

const Authorization = () => (
  <HeaderAuthorization img={Background}>
    <Container>
      <LogoNav />
      <SignIn />
    </Container>
  </HeaderAuthorization>
);

export default Authorization;
