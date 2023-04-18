import React from 'react';
import styled from 'styled-components';

import Content from '../Content/Content.jsx';

const AvailableList = styled.table`
    width: 100%;
`;

const TableTR = styled.tr`
    width: 100%;
    text-align: left;
    border-bottom: 1px solid black;
`;

const TableTH = styled.th`
    height: 30px;
    padding-top: 30px;
    font-size: 18pt;
`;

const TableTD = styled.td`
    height: 50px;
    border: 1px solid black;
`;

const RoomBlock = ({ name, price, cap, date, time }) => {
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
          <TableTD>{price}</TableTD>
          <TableTD>{cap}</TableTD>
          <TableTD>{date}</TableTD>
          <TableTD>{time}</TableTD>
        </TableTR>
      </AvailableList>
    </Content>
  );
};

export default RoomBlock;