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

  const [data, setData] = useState(null);

  const randomizePrice = () => {
    return Math.floor(Math.random() * 14) + 10;
  }

  useEffect(() => {
    setData([
      {name: "Name of the Room", price: randomizePrice(), cap: 12, date: "22.04.2023", time: "10:00-11:00"},
      {name: "Name of the Room", price: randomizePrice(), cap: 12, date: "22.04.2023", time: "10:00-11:00"},
      {name: "Name of the Room", price: randomizePrice(), cap: 12, date: "22.04.2023", time: "10:00-11:00"}
    ]);
  }, []);

  return (
    <Wrap>
      <Header />
      <Block>
        <HeaderBlock>
          <ContenTitle name={ checkIfStaffMember() ? "My Rooms" : "Available Rooms" } />
          { checkIfStaffMember() && <HeaderLink to="/create">Create</HeaderLink> }
        </HeaderBlock>
        { data && data.map(d => <RoomBlock name={d.name} price={d.price} cap={d.cap} date={d.date} time={d.time} />)}
      </Block>
    </Wrap>
  );
};

export default Home;