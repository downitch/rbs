import React from 'react';
import styled from 'styled-components';

import Header from '../Header/Header.jsx';
import ContenTitle from '../ContentTitle/ContentTitle.jsx';
import RoomBlock from '../RoomBlock/RoomBlock.jsx';

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Block = styled.div`
    width: 70%;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Home = () => {
    return(
        <Wrap>
            <Header />
            <Block>
                <ContenTitle name="Available Rooms" />
                <RoomBlock name="Name of the Room" price="0$" cap="12" date="22.04.2023" time="10:00-11:00" />
            </Block>
        </Wrap>
    );
};

export default Home;