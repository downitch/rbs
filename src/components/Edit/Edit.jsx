import React, { useState, useEffect } from 'react';
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
    justify-content: flex-start;
    align-items: center;
`;

const InputTitle = styled.h3`
    color: #001641;
    flex: 1;
`;

const ValidationBlock = styled.div`
  margin-top: 30px;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const InputInteractive = styled.input`
  background: #989898;
  border: none;
  padding: 5px 2%;
  width: 100%;
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

const ErrorMsg = styled.span`
  color: red;
  font-size: 7pt;
`;

const Edit = () => {

  const [number, setNumber] = useState('');
  const [price, setPrice] = useState(0);
  const [cap, setCap] = useState(1);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [promo, setPromo] = useState('');

  const [numberErr, setNumberErr] = useState('none');
  const [priceErr, setPriceErr] = useState('none');
  const [capErr, setCapErr] = useState('none');
  const [dateErr, setDateErr] = useState('none');
  const [timeErr, setTimeErr] = useState('none');
  const [promoErr, setPromoErr] = useState('none');

  useEffect(() => {
    const id = parseInt(window.location.href.split('/').reverse()[0]);
    console.log(id);
    const room = JSON.parse(window.localStorage.getItem('rooms')).filter(e => e.id == id)[0];
    console.log(room);
    setNumber(room.name);
    setPrice(room.price);
    setCap(room.cap);
    setDate(room.date);
    setTime(room.time);
    setPromo(room.promo);
  }, []);

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

  const validateDate = (inpt) => {
    const arr = inpt.split('/');
    if(new Date(`${arr[1]}/${arr[0]}/${arr[2]}`) == 'Invalid Date') return false;
    return true;
  }

  const handleSubmit = () => {
    if(!validateDate(date)) {
      setDateErr('block');
      return;
    } else {
      setDateErr('none');
    }

    if (number != '' && price > 0 && date && time) {
      const id = parseInt(window.location.href.split('/').reverse()[0]);
      const arr = JSON.parse(window.localStorage.getItem('rooms'));
      for (let i = 0; i < arr.length; i++) {
        if(arr[i].id == id) {
          arr[i].name = number;
          arr[i].price = price;
          arr[i].cap = cap;
          arr[i].date = date;
          arr[i].time = time;
          arr[i].promo = promo;
          break;
        }
      }
      window.localStorage.setItem('rooms', JSON.stringify(arr));
      window.location.href = '/';
    }
  }

  return (
    <Wrap>
      <Header />
      <Block>
        <ContenTitle name="Edit" />
        <CreateWindow>
          <InputBox>
            <InputTitle>Room No.: </InputTitle>
            <ValidationBlock>
              <InputInteractive type="text" onChange={handleNumber} value={number} />
              <ErrorMsg style={{ display: numberErr }}>Room input is incorrect</ErrorMsg>
            </ValidationBlock>
          </InputBox>
          <InputBox>
            <InputTitle>Price/hr: </InputTitle>
            <ValidationBlock>
              <InputInteractive type="text" onChange={handlePrice} value={price} />
              <ErrorMsg style={{ display: priceErr }}>Price/hr input is incorrect</ErrorMsg>
            </ValidationBlock>
          </InputBox>
          <InputBox>
            <InputTitle>Capacity: </InputTitle>
            <ValidationBlock>
              <InputInteractive type="text" onChange={handleCap} value={cap} />
              <ErrorMsg style={{ display: capErr }}>Capacity input is incorrect</ErrorMsg>
            </ValidationBlock>
          </InputBox>
          <InputBox>
            <InputTitle>Date: </InputTitle>
            <ValidationBlock>
              <InputInteractive type="text" placeholder="DD/MM/YYYY" onChange={handleDate} value={date} />
              <ErrorMsg style={{ display: dateErr }}>Date input is incorrect</ErrorMsg>
            </ValidationBlock>
          </InputBox>
          <InputBox>
            <InputTitle>Timeslot: </InputTitle>
            <ValidationBlock>
              <InputInteractive type="text" placeholder="HH AM/PM - HH AM/PM" onChange={handleTime} value={time} />
              <ErrorMsg style={{ display: timeErr }}>Timeslot input is incorrect</ErrorMsg>
            </ValidationBlock>
          </InputBox>
          <InputBox>
            <InputTitle>Promocode: </InputTitle>
            <ValidationBlock>
              <InputInteractive type="text" onChange={handlePromo} value={promo} />
              <ErrorMsg style={{ display: promoErr }}>Promocode input is incorrect</ErrorMsg>
            </ValidationBlock>
          </InputBox>
          <hr style={{ width: "65%", marginTop: "20px" }} />
          <InputButton onClick={handleSubmit}>
            Save
          </InputButton>
          <Link to="/">Back</Link>
        </CreateWindow>
      </Block>
    </Wrap>
  );
};

export default Edit;