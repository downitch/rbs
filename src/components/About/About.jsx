import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background: #000080;
    display: flex;
    flex: 1;
    flex-direction: column;
    text-align: center;
    justify-content: center;
`;

const Header = styled.div`
    width: 100%;
    height: 60px;
    background: transparent;
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
    color: white;
`;

const HeaderContent = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    text-align: center;
    justify-content: flex-end;
    padding: 10px 15px;
`;

const Table = styled.div`
    width: 80%;
    min-height: 400px;
    background: white;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    text-align: center: center;
    justify-content: center; 
`;

const About = () => {
  return (
    <Wrap>
      <Header>
        <HeaderContent>
          <p>(Staff)</p>
        </HeaderContent>
      </Header>
      <Table>
      </Table>
    </Wrap>
  );
};

export default About;