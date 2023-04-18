import React from 'react';
import styled from 'styled-components';

const Table = styled.div`
    width: 98%;
    min-height: 250px;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: #F2F2F2;
    padding: 0% 1%;
    color: black;
    margin-bottom: 30px;
`;

const Content = ({children}) => {
    return(
        <Table>
            {children}
        </Table>
    );
};

export default Content;