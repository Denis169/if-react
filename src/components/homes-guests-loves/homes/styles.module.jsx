import styled from '@emotion/styled';

export const HomesComponent = styled.div`
  text-decoration: none;
  background-color: ${(props) => props.theme.backgroundGray};
`;

export const H2 = styled.h2`
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 47px;
  padding-top: 120px;
  color: ${(props) => props.theme.primaryText};
`;

export const HomesSection = styled.div`
  padding: 105px 0 120px 0;
  display: inline-flex;
  justify-content:center;
  position: relative;
  left: 50%;
  transform: translate(-50%);
`;

export const HomesColumn = styled.div`
  & nav{
    display: flex;
    justify-content:center;
    position: relative;
    a:-webkit-any-link {
      text-decoration: none;
    }
  }
`;
