import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

export const Coins = () => {
  const [data, setData] = useState();
  const options = {
    method: "GET",
    url: "https://mineable-coins.p.rapidapi.com/coins",
    headers: {
      "X-RapidAPI-Key": "a836808aeemsh71b1b962f3db4a3p14e8ecjsn1e94807f336a",
      "X-RapidAPI-Host": "mineable-coins.p.rapidapi.com"
    }
  };
  const GetCoins = () => {
    if (!data) {
      axios
        .request(options)
        .then(function (response) {
          const res = response.data;
          res?.sort(function (a, b) {
            return b.price - a.price;
          });
          setData(res);
          console.log(res);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  };
  useEffect(() => {
    GetCoins();
  });

  return (
    <Container>
      <Header>
        <HeaderText>Rank</HeaderText>
        <HeaderText>Name</HeaderText>
        <HeaderText>Price</HeaderText>
        <HeaderText>Market Cap</HeaderText>
        <HeaderText>Volume</HeaderText>
      </Header>
      <Body>
        {data.map((coin, index) => {
          return (
            <Column key={index}>
              <ColumnText>{index + 1}</ColumnText>
              <ColumnText>{coin.name}</ColumnText>
              <ColumnText>${coin.price}</ColumnText>
              <ColumnText>{}</ColumnText>
              <ColumnText>${coin.volume ? coin.volume : 0}</ColumnText>
            </Column>
          );
        })}
      </Body>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin: 4rem 0;
  border: 1px solid gray;
`;

const Header = styled.div`
  width: 100%;
  height: 5rem;
  background-color: gray;
  display: grid;
  grid-template-columns: 5% 30% 25% 20% 20%;
  color: white;
  box-sizing: border-box;
  padding: 0rem 2rem;
  align-items: center;
`;

const HeaderText = styled.h3`
  color: white;
  font-family: "poppins";
  font-size: 1.6rem;
  font-weight: 500;
`;
const Body = styled.div`
  width: 100%;
  height: 35rem;
  overflow: auto;
`;
const Column = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0rem 2rem;
  height: 4rem;
  display: grid;
  grid-template-columns: 5% 30% 25% 20% 20%;
  align-items: center;
`;
const ColumnText = styled.h4`
  color: black;
  font-family: "poppins";
  font-size: 1.4rem;
  font-weight: 400;
`;
