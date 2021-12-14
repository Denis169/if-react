import styled from '@emotion/styled';

export const HeaderForm = styled.form`
  width: 100%;
  background-color: ${(props) => props.theme.white};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  margin: 145px 0 120px 0;
  position: relative;
`;

export const EnterText = styled.div`
  flex-basis: 39%;
  position: relative;
  label {
    position: absolute;
    font-style: normal;
    font-weight: normal;
    line-height: 21px;
    color: ${(props) => props.theme.white};
    bottom: 84px;
    font-size: 18px;
    input {
      position: absolute;
      margin-top: 20px;
      left: 0;
      top: 21px;
      padding: 0 25px 0 25px;
      border-radius: 5px;
      width: 100%;
      height: 64px;
      border: none;
      outline: none;
      color: ${(props) => props.theme.primaryText};
    }
`;

export const EnterDate = styled.div`
  flex-basis: 21%;
  position: relative;
  margin: auto;
`;

export const Button = styled.div`
  flex-basis: 16%;
  &:active {
    opacity: 0.8;
  }
  input {
    padding: 0 25px 0 25px;
    border-radius: 5px;
    width: 100%;
    height: 64px;
    border: none;
    outline: none;
    background-color: ${(props) => props.theme.primary};
    font-style: normal;
    font-size: 24px;
    line-height: 100%;
    color: ${(props) => props.theme.white};
    cursor: pointer;
  }
`;
