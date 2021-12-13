import React from 'react';
import styled from '@emotion/styled';

import Form from '../form';
import Market from '../market';
import LogoNav from '../logo-nav';

import Background from '../../../assets/image/castelmezzano.png';
import { Container } from '../../../constants/style.variable';

const HeaderSection = styled.div`
  background-color: ${(props) => props.theme.primaryDark};
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  min-height: 900px;
`;

const TopSection = styled.div`
  margin-top: 200px;
  margin-bottom: 150px;
  h1 {
    width: 542px;
    font-size: 46px;
    line-height: 59px;
    color: ${(props) => props.theme.white};
  }
`;

const Header = () => (

  <HeaderSection img={Background}>
    <Container>
      <LogoNav />
      <TopSection>
        <h1>
          Discover stays
          <br />
          {' '}
          to live, work or just relax
        </h1>
        <Form />
      </TopSection>
      <Market />
    </Container>
  </HeaderSection>

);

export default Header;
