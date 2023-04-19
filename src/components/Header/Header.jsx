import React from 'react';
import styled from 'styled-components';

import { checkIfStaffMember, checkIfAuthorized, logout } from '../../misc/helpers.js';

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

const Header = () => {
  return (
    <HeaderWrap>
      <HeaderContent>
        <p>UOW Room Booking System</p>
        <LogoutButton onClick={ logout }>{checkIfAuthorized() ? (checkIfStaffMember() ? `Staff` : `Student`) : ''}</LogoutButton>
      </HeaderContent>
    </HeaderWrap>
  );
};

export default Header;