import React from 'react';

import { FooterSection, Copyright, H3, FooterList, FooterRef, MenuFooter, StyledLink } from './style.module';
import { Container } from '../../constants/style.variable';

const Footer = () => (
  <FooterSection>
    <Container>
      <MenuFooter>
        <FooterRef>
          <FooterList>
            <H3>About</H3>
            <StyledLink to="/">How Triphouse works</StyledLink>
            <StyledLink to="/">Careers</StyledLink>
            <StyledLink to="/">Privacy</StyledLink>
            <StyledLink to="/">Terms</StyledLink>
          </FooterList>
          <FooterList>
            <H3>Property types</H3>
            <StyledLink to="/">Guest houses</StyledLink>
            <StyledLink to="/">Hotels</StyledLink>
            <StyledLink to="/">Apartments</StyledLink>
            <StyledLink to="/">Villas</StyledLink>
            <StyledLink to="/">Holiday homes</StyledLink>
            <StyledLink to="/">Hostels</StyledLink>
          </FooterList>
          <FooterList>
            <H3>Support</H3>
            <StyledLink to="/">Contact Customer Service</StyledLink>
            <StyledLink to="/">FAQ</StyledLink>
          </FooterList>
        </FooterRef>
        <Copyright>&copy; 2020 Triphouse, Inc. All rights reserved</Copyright>
      </MenuFooter>
    </Container>
  </FooterSection>
);

export default Footer;
