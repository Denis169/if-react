import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

export const FooterSection = styled.footer`
  background-color: ${(props) => props.theme.primaryDark};
  order: 1;
`;

export const MenuFooter = styled.div`
  padding: 120px 0;
  margin: 0 auto;
`;

export const FooterRef = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
  margin-bottom: 42px;
  width: 100%;
`;

export const FooterList = styled.div`
  width: 410px;
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  flex-direction: column;
`;

export const H3 = styled.h3`
  color: ${(props) => props.theme.white};
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  line-height: 23px;
  text-align: left;
  margin-bottom: 25px;
`;

export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.white};
  font-style: normal;
  font-weight: 100;
  font-size: 19px;
  line-height: 23px;
  text-align: left;
  margin-bottom: 25px;
  text-decoration: none;
`;

export const Copyright = styled.p`
  white-space: nowrap;
  padding-left: 8px;
  color: ${(props) => props.theme.white};
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 23px;
`;
