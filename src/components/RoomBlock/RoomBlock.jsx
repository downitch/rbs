import React from 'react';
import styled from 'styled-components';

import Content from '../Content/Content.jsx';
import { checkIfStaffMember } from '../../misc/helpers.js';

const AvailableList = styled.table`
    width: 94%;
    border-collapse: collapse;
    cellspacing: 0;
    margin-bottom: 50px;
`;

const TableTR = styled.tr`
    text-align: left;
`;

const TableTH = styled.th`
    height: 30px;
    padding-top: 30px;
    padding-bottom: 15px;
    font-size: 18pt;
    color: #001641;
    border-bottom: 1px solid #001641;
`;

const TableTD = styled.td`
    height: 50px;
    padding-top: 10px;
    font-size: 14pt;
`;

const BottomDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
`;

const DefaultButton = styled.div`
  padding: 10px 25px;
  border-radius: 10px;
  background: #001641;
  color: white;
  cursor: pointer;
  margin-right: 15px;
`;

const RoomBlock = ({ id, name, price, cap, date, time }) => {

  const removeRoom = id => {
    window.localStorage.setItem('rooms', JSON.stringify(JSON.parse(window.localStorage.getItem('rooms')).filter(e => e.id != id)));
    window.location.reload(false);
  }

  return (
    <Content>
      <AvailableList>
        <TableTR>
          <TableTH>Room No.:</TableTH>
          <TableTH>Price/hr:</TableTH>
          <TableTH>Capacity:</TableTH>
          <TableTH>Date:</TableTH>
          <TableTH>Time:</TableTH>
        </TableTR>
        <TableTR>
          <TableTD>{name}</TableTD>
          <TableTD>${price}</TableTD>
          <TableTD>{cap}</TableTD>
          <TableTD>{date}</TableTD>
          <TableTD>{time}</TableTD>
        </TableTR>
      </AvailableList>
      <BottomDiv>
      { checkIfStaffMember() ? <><DefaultButton> Edit </DefaultButton><DefaultButton onClick={ () => removeRoom(id) } > Remove </DefaultButton></> : <DefaultButton> Book </DefaultButton> }
      </BottomDiv>
    </Content>
  );
};

export default RoomBlock;