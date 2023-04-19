import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../Header/Header.jsx';
import ContenTitle from '../ContentTitle/ContentTitle.jsx';

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Block = styled.div`
    min-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const CreateWindow = styled.div`
    width: 100%;
    min-height: 700px;
    background: white;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const InputBox = styled.div`
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const InputTitle = styled.h3`
    color: #001641;
`;

const InputInteractive = styled.input`
  background: #989898;
  border: none;
  padding: 5px 2%;
  width: 60%;
  font-size: 14pt;
  color: white;
  border-radius: 3px;
  outline: none;

  &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: white;
    opacity: 1; /* Firefox */
  }

  &:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: white;
  }

  &::-ms-input-placeholder { /* Microsoft Edge */
    color: white;
  }
`;

const InputButton = styled.div`
  width: 40%;
  margin-top: 30px;
  background: #001641;
  outline: none;
  border: none;
  padding: 12px 0;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 20px;
`;

const Create = () => {
  return (
    <Wrap>
      <Header />
      <Block>
        <ContenTitle name="Create" />
        <CreateWindow>
            <InputBox>
                <InputTitle>Room No.: </InputTitle>
                <InputInteractive type="text" />
            </InputBox>
            <InputBox>
                <InputTitle>Price/hr: </InputTitle>
                <InputInteractive type="text" />
            </InputBox>
            <InputBox>
                <InputTitle>Capacity: </InputTitle>
                <InputInteractive type="text" />
            </InputBox>
            <InputBox>
                <InputTitle>Date: </InputTitle>
                <InputInteractive type="text" />
            </InputBox>
            <InputBox>
                <InputTitle>Timeslot: </InputTitle>
                <InputInteractive type="text" />
            </InputBox>
            <InputBox>
                <InputTitle>Promocode: </InputTitle>
                <InputInteractive type="text" />
            </InputBox>
            <hr style={{ width: "65%", marginTop: "20px" }} />
            <InputButton>
                Create
            </InputButton>
            <Link to="/">Back</Link>
        </CreateWindow>
      </Block>
    </Wrap>
  );
};

export default Create;