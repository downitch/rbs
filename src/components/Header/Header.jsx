import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { checkIfStaffMember, checkIfAuthorized, logout } from '../../misc/helpers.js';

import logo from './logo.svg';

const HeaderWrap = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    margin: 0;
    padding: 0;
    top: 0;
`;

const HeaderContent = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
`;

const LogoutButton = styled.p`
  cursor: pointer;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direciton: row;
  justify-content: center;
  align-items: flex-start;
`;

const Header = () => {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    setUsername(window.localStorage.getItem('rbs_login_hash'));
  }, []);

  return (
    <HeaderWrap>
      <HeaderContent>
        <LeftSide>
          <img src={logo} alt="logo" style={{ height: '50px', paddingTop: '5px' }} />
          <p style={{ marginLeft: '20px', fontWeight: 'bold' }}>Room Booking System</p>
        </LeftSide>
        <LogoutButton onClick={ logout }>{checkIfAuthorized() ? (checkIfStaffMember() ? `Staff ${ username != 'login_hash' ? '(' + username + ')' : '' }` : `Student ${ username != 'login_hash' ? '(' + username + ')' : '' }`) : ''}</LogoutButton>
      </HeaderContent>
    </HeaderWrap>
  );
};

export default Header;