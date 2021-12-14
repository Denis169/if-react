import styled from '@emotion/styled';

export const Column = styled.div`
  width: 296px;
  margin-left: 8px;
  margin-right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  position: relative;
`;

export const Image = styled.img`
  background-image: url(${(props) => props.img});
  width: 100%;
  height: 296px;
  background-repeat: no-repeat;
  background-size: 100% 296px;
`;

export const Reference = styled.p`
  font-style: normal;
  padding-top: 24px;
  font-size: 24px;
  line-height: 28px;
  color: ${(props) => props.theme.primary};
  text-decoration: none;
`;

export const Text = styled.p`
  font-style: normal;
  padding-top: 24px;
  font-size: 24px;
  line-height: 28px;
  height: 2em;
  color: ${(props) => props.theme.secondaryText};
`;
