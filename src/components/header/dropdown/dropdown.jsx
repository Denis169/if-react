import React from 'react';
import { useDispatch } from 'react-redux';
import styled from '@emotion/styled';

import SignOut from '../../../assets/image/signOut.svg';

import { authorizationActionCreator } from '../../../actionCreators';

const Button = styled.button`
  position: absolute;
  width: 192px;
  height: 50px;
  padding: 15px;
  background-color: ${(props) => props.theme.white};
  right: 0;
  top: 80px;
  display: flex;
  cursor: pointer;
`;

const Image = styled.img`
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  display: inline-block;
  width: 20px;
  height: 18px;
  margin-right: 16px;
`;

const P = styled.p`
  display: block;
  width: 73px;
  height: 23px;
  font-size: 20px;
  line-height: 23px;
`;

const Dropdown = () => {
  const dispatch = useDispatch();
  const nullPassword = (event) => {
    event.preventDefault();
    dispatch(authorizationActionCreator(false));
  };

  return (
    <Button type="button" onClick={nullPassword}>
      <Image img={SignOut} />
      <P>Sign out</P>
    </Button>
  );
};

export default Dropdown;
