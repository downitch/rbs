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
  background: gray;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
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

        </LoginWindow>
      </Block>
    </Wrap>
  );
};

export default Login;