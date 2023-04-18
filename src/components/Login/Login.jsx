import React, { useState } from 'react';
import styled from 'styled-components';

import Header from '../Header/Header.jsx';
import ContenTitle from '../ContentTitle/ContentTitle.jsx';

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

const SwitchRole = styled.div`
  width: 80%;
  height: 30px;
  border-radius: 7px;
  background: #989898;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  margin-bottom: 20px;
`;

const LeftRole = styled.div`
  width: 50%;
  height: 100%;
  border-radius: 7px 0px 0px 7px;
  background: ${ props => props.active.active  ? '#1CAD12' : 'transparent' };
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const RightRole = styled.div`
  width: 50%;
  height: 100%;
  border-radius: 0px 7px 7px 0px;
  background: ${ props => props.active.active ? 'transparent' : '#1CAD12' };
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const InputBlock = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 20px;
`;

const InputHeader = styled.h2`
  color: #001641;
  padding-bottom: 0;
  margin-bottom: 0;
`;

const InputInteractive = styled.input`
  background: #989898;
  border: none;
  padding: 5px 2%;
  width: 96%;
  font-size: 14pt;
  color: white;
  border-radius: 3px;
  outline: none;

  &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: white;
    opacity: 1; /* Firefox */
  }

  &:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: white;
  }

  &::-ms-input-placeholder { /* Microsoft Edge */
    color: white;
  }
`;

const InputButton = styled.div`
  width: 40%;
  margin-left: 30%;
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

const Login = () => {

  const [active, setActive] = useState(true);

  const switchRoleClick = () => {
    setActive(!active);
  }
  
  const switchRoleClickLeft = () => {
    if(!active) switchRoleClick();
  }
  
  const switchRoleClickRight = () => {
    if(active) switchRoleClick();
  }

  const authUser = () => {
    window.localStorage.setItem('rbs_login_hash', 'login_hash');
    window.localStorage.setItem('rbs_role_hash', (active ? 'student' : 'staff'));
    window.location.reload(false);
  }

  return (
    <Wrap>
      <Header />
      <Block>
        <ContenTitle name="Login Page" />
        <LoginWindow>
          <SwitchRole>
            <LeftRole active={{ active }} onClick={ switchRoleClickLeft }>
              Student
            </LeftRole>
            <RightRole active={{ active }} onClick={ switchRoleClickRight }>
              Staff
            </RightRole>
          </SwitchRole>
          <InputBlock>
            <InputHeader>
              Username:
            </InputHeader>
            <InputInteractive placeholder='username' />
          </InputBlock>
          <InputBlock>
            <InputHeader>
              Password:
            </InputHeader>
            <InputInteractive placeholder='password' />
          </InputBlock>
          <InputBlock>
            <InputButton onClick={ authUser }>
              Continue
            </InputButton>
          </InputBlock>
        </LoginWindow>
      </Block>
    </Wrap>
  );
};

export default Login;