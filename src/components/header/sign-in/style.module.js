import styled from '@emotion/styled';

export const SignInSection = styled.div`
  width: 364px;
  height: 370px;
  background-color: ${(props) => props.theme.white};
  margin: 183px auto 268px auto;
`;

export const H3 = styled.h3`
  margin: 36px auto 36px auto;
  padding-top: 36px;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
`;

export const Form = styled.form`
  & label{
    position: relative;
    display: block;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: ${(props) => props.theme.secondaryText};
    margin-left: 40px;
    margin-bottom: 70px;
    & input{
      position: absolute;
      width: 284px;
      height: 41px;
      bottom: -50px;
      left: 0;
      border: 2px solid ${(props) => props.theme.secondaryText};
      box-sizing: border-box;
      border-radius: 8px;
      padding-left: 10px;
    }
  }
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.white};
  & input {
    background-color: ${(props) => props.theme.primary};
    font-style: normal;
    font-size: 24px;
    line-height: 100%;
    color: ${(props) => props.theme.white};
    cursor: pointer;
    width: 284px;
    height: 48px;
    margin-left: 40px;
    border-radius: 8px;
  }
`;
