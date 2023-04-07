import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Sparklines, SparklinesLine } from "react-sparklines";

export const Coins = () => {
  const [data, setData] = useState();

  const GetCoins = () => {
    const options = {
      headers: {
        "x-access-token":
          "coinrankingb1606fd3ca2165178fced2550a47601385244f0e2c299526"
      }
    };
    if (!data) {
      fetch("https://api.coinranking.com/v2/coins", options)
        .then((response) => response.json())
        .then((result) => setData(result.data.coins));
    }
  };
  useEffect(() => {
    GetCoins();
  });
  function numberWithCommas(x) {
    const num = Math.round(x * 100) / 100;
    return num
      .toFixed(3)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const Volume = "24hVolume";
  return (
    <Container>
      <Header>
        <HeaderText>Rank</HeaderText>
        <HeaderText>Name</HeaderText>
        <HeaderText>Price</HeaderText>
        <HeaderText>Market Cap</HeaderText>
        <HeaderText>Volume</HeaderText>
        <HeaderText>Last 24H</HeaderText>
      </Header>
      <Body>
        {data?.map((coin, index) => {
          return (
            <Column key={index}>
              <ColumnText>{coin.rank}</ColumnText>
              <Name>
                <Icon src={coin.iconUrl} /> <ColumnText>{coin.name}</ColumnText>
              </Name>
              <ColumnText>${numberWithCommas(coin.price)}</ColumnText>
              <ColumnText>${numberWithCommas(coin.marketCap)}</ColumnText>
              <ColumnText>${coin.listedAt}</ColumnText>
              <GrapColumn>
                <ChangeText negative={coin.change[0] === "-" ? true : false}>
                  {coin.change}%
                </ChangeText>
                <Sparklines data={coin.sparkline}>
                  <SparklinesLine
                    color={coin.change[0] === "-" ? "red" : "green"}
                  />
                </Sparklines>
              </GrapColumn>
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
  font-family: "poppins";
`;

const Header = styled.div`
  width: 100%;
  height: 5rem;
  background-color: gray;
  display: grid;
  grid-template-columns: 5% 25% 15% 20% 20% 15%;
  color: white;
  box-sizing: border-box;
  padding: 0rem 2rem;
  align-items: center;
`;

const HeaderText = styled.h3`
  color: white;

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
  height: 5rem;
  display: grid;
  grid-template-columns: 5% 25% 15% 20% 20% 15%;
  align-items: center;
  border-bottom: 1px solid lightgray;
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
const Name = styled.div`
  display: flex;
  align-items: center;
`;
const Icon = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
`;
const GrapColumn = styled.div`
  display: flex;
`;
const ColumnText = styled.h4`
  color: black;
  font-family: "poppins";
  font-size: 1.4rem;
  font-weight: 400;
`;

const ChangeText = styled(ColumnText)`
  color: ${(props) => (props.negative ? "red" : "green")};
  margin-right: 2rem;
`;
