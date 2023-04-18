import React from 'react';
import styled from 'styled-components';

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

const Header = () => {
  const checkIfAuthorized = () => {
    if (window.localStorage.getItem('rbs_login_hash') == null) return false;
    return true;
  };

  return (
    <HeaderWrap>
      <HeaderContent>
        <p>UOW Room Booking System</p>
        <p>{checkIfAuthorized() ? `(Staff)` : `Log in`}</p>
      </HeaderContent>
    </HeaderWrap>
  );
};

export default Header;