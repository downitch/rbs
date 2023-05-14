import React from 'react';
import styled from 'styled-components';

import Header from '../Header/Header.jsx';
import ContenTitle from '../ContentTitle/ContentTitle.jsx';

import canc from './cancel.png';
import succ from './success.png';

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Block = styled.div`
    min-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const LoginWindow = styled.div`
  width: 100%;
  height: 500px;
  border-radius: 7px;
  background: #F2F2F2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InputBlock = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const InputHeader = styled.h2`
  color: #001641;
  padding-bottom: 0;
  margin-bottom: 0;
`;

const InputButton = styled.div`
  width: 40%;
  margin-top: 30px;
  background: #001641;
  outline: none;
  border: none;
  padding: 12px 0;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Notification = ({ text, mode }) => {

  const moveBack = () => {
    window.location.href = '/';
  }

  return (
    <Wrap>
      <Header />
      <Block>
        <ContenTitle name="Notification" />
        <LoginWindow>
            <img src={ mode ? succ : canc } style={{ width: '200px' }} alt="result pic" />
            <InputBlock>
                <InputHeader>
                    { text }
                </InputHeader>
                <InputButton onClick={ moveBack }>
                    Go back
                </InputButton>
            </InputBlock>
        </LoginWindow>
      </Block>
    </Wrap>
  );
};

export default Notification;