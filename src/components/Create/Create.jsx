import React, { useState } from 'react';
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

  const [number, setNumber] = useState('');
  const [price, setPrice] = useState(0);
  const [cap, setCap] = useState(1);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [promo, setPromo] = useState('');

  const handleNumber = e => {
    setNumber(e.target.value);
  }

  const handlePrice = e => {
    setPrice(e.target.value);
  }

  const handleCap = e => {
    setCap(e.target.value);
  }

  const handleDate = e => {
    setDate(e.target.value);
  }

  const handleTime = e => {
    setTime(e.target.value);
  }

  const handlePromo = e => {
    setPromo(e.target.value);
  }

  const handleSubmit = () => {
    if(number != '' && price > 0 && date && time) {
      const arr = JSON.parse(window.localStorage.getItem('rooms'));
      arr.sort(function(a, b) {
        const keyA = a.id;
        const keyB = b.id;
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
      });
      const lid = arr[arr.length - 1].id;
      window.localStorage.setItem('rooms', JSON.stringify([{id: lid + 1, name: number, price: price, cap: cap, date: date, time: time}, ...arr.reverse()]));
      window.location.href = '/';
    }
  }

  return (
    <Wrap>
      <Header />
      <Block>
        <ContenTitle name="Create" />
        <CreateWindow>
          <InputBox>
            <InputTitle>Room No.: </InputTitle>
            <InputInteractive type="text" onChange={ handleNumber } />
          </InputBox>
          <InputBox>
            <InputTitle>Price/hr: </InputTitle>
            <InputInteractive type="text" onChange={ handlePrice } />
          </InputBox>
          <InputBox>
            <InputTitle>Capacity: </InputTitle>
            <InputInteractive type="text" onChange={ handleCap } />
          </InputBox>
          <InputBox>
            <InputTitle>Date: </InputTitle>
            <InputInteractive type="text" placeholder="DD/MM/YYYY" onChange={ handleDate } />
          </InputBox>
          <InputBox>
            <InputTitle>Timeslot: </InputTitle>
            <InputInteractive type="text" placeholder="HH AM/PM - HH AM/PM" onChange={ handleTime } />
          </InputBox>
          <InputBox>
            <InputTitle>Promocode: </InputTitle>
            <InputInteractive type="text" onChange={ handlePromo } />
          </InputBox>
          <hr style={{ width: "65%", marginTop: "20px" }} />
          <InputButton onClick={ handleSubmit }>
            Submit
          </InputButton>
          <Link to="/">Back</Link>
        </CreateWindow>
      </Block>
    </Wrap>
  );
};

export default Create;