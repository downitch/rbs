import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../Header/Header.jsx';
import ContenTitle from '../ContentTitle/ContentTitle.jsx';
import RoomBlock from '../RoomBlock/RoomBlock.jsx';
import { checkIfStaffMember } from '../../misc/helpers.js';

const Wrap = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

const Block = styled.div`
    width: 70%;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 200px;
`;

const HeaderBlock = styled.div`
  width: 98%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const HeaderLink = styled(Link)`
  color: white;
  underline: none;
  text-decoration: none;
`;

const Home = () => {

  const [type, setType] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(JSON.parse(window.localStorage.getItem('rooms')));
  }, []);

  useEffect(() => {
    setData(JSON.parse(window.localStorage.getItem('rooms')));
  }, [type]);

  const changeType = () => {
    setType(!type);
  };

  return (
    <Wrap>
      <Header />
      <Block>
        <HeaderBlock>
          <ContenTitle name={ checkIfStaffMember() ? "My Rooms" : "Available Rooms" } />
          { checkIfStaffMember() && <HeaderLink to="/create">Create</HeaderLink> }
          { !checkIfStaffMember() && <><HeaderLink to="/" onClick={ changeType }>Listed</HeaderLink>&nbsp;&nbsp;|&nbsp;&nbsp;<HeaderLink to="/" onClick={ changeType }>Booked</HeaderLink></> }
        </HeaderBlock>
        { data && data.map(d => <RoomBlock id={d.id} name={d.name} price={d.price} cap={d.cap} date={d.date} time={d.time} booked={d.booked} bookedBy={d.bookedBy} />)}
      </Block>
    </Wrap>
  );
};

export default Home;