import styled from '@emotion/styled';

export const LogoAndNav = styled.div`
  padding-top: 51px;
  display: flex;
  justify-content: space-between;
  img {
    padding-top: 51px;
    display: flex;
    justify-content: space-between;
  }
`;

export const HeaderMenu = styled.nav`
  width: 343px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const P = styled.p`
  position: relative;
  display: block;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: ${(props) => props.theme.white};
  text-decoration: none;
  cursor: pointer;
  &:after {
    opacity: 0;
    visibility: hidden;
    transition: .55s opacity, .55s visibility;
    content: '';
    display: block;
    position: absolute;
    background-color: ${(props) => props.theme.secondary};
    width: 100%;
    height: 4px;
    bottom: -4px;
  }
  &:hover:after {
    opacity: 1;
    visibility: visible;
  }
`;

export const Night = styled.svg`
  display: block;
  width: 30px;
  height: 30px;
  cursor: pointer;
  fill: white;
  &:hover{
    fill: ${(props) => props.theme.secondary};
  }
`;

export const AccountCircle = styled.svg`
  display: block;
  cursor: pointer;
  width: 40px;
  height: 40px;
`;
