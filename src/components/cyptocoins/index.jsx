import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { tab } from "../../utilities/responsive";
import "./loading.styles.css";
import { ReactComponent as Spinner } from "../../images/Spinner.svg";

export const Coins = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

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
        .then((result) => {
          setData(result.data.coins);
          setLoading(false);
        });
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
        {loading ? (
          <LoadingBody>
            <Spinner className="loader-spin" width={50} />
          </LoadingBody>
        ) : null}
        {data?.map((coin, index) => {
          return (
            <Column key={index}>
              <ColumnText>{coin.rank}</ColumnText>
              <Name>
                <Icon src={coin.iconUrl} alt="img" />{" "}
                <ColumnText>{coin.name}</ColumnText>
              </Name>
              <ColumnText>${numberWithCommas(coin.price)}</ColumnText>
              <ColumnText>
                ${coin.marketCap.toString().slice(0, 3)}.
                {coin.marketCap.toString().slice(4, 6)} B
              </ColumnText>
              <ColumnText>
                {" "}
                ${coin.listedAt.toString().slice(0, 3)}.
                {coin.listedAt.toString().slice(4, 6)} M
              </ColumnText>
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
  margin: 3rem 0;
  border: 1px solid #023b64;
  font-family: "poppins";
  z-index: 10;
  overflow: hidden;
`;

const Header = styled.div`
  width: 100%;
  height: 5rem;
  background-color: #023b64;
  display: grid;
  grid-template-columns: 5% 25% 15% 20% 20% 15%;
  color: white;
  box-sizing: border-box;
  padding: 0rem 2rem;
  align-items: center;
  ${tab({
    gridTemplateColumns: "8% 20% 15% 20% 20% 15%",
    padding: "0rem 1rem"
  })}
`;

const HeaderText = styled.h3`
  color: white;
  ${tab({
    fontSize: "1rem"
  })}
  font-size: 1.6rem;
  font-weight: 500;
`;
const Body = styled.div`
  width: 100%;
  height: 35rem;
  overflow: auto;
`;
const LoadingBody = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: ;
`;
const Column = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0rem 2rem;
  height: 5rem;
  display: grid;
  grid-template-columns: 5% 25% 15% 20% 20% 15%;
  align-items: center;
  border-bottom: 1px solid #023b6460;
  :hover {
    background-color: #023b6421;
  }
  ${tab({
    gridTemplateColumns: "8% 20% 15% 20% 20% 15%",
    padding: "0rem 1rem"
  })}
`;
const Name = styled.div`
  display: flex;
  align-items: center;
`;
const Icon = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
  ${tab({
    width: "1.5rem",
    height: "1.5rem",
    marginRight: "0.5rem"
  })}
`;
const GrapColumn = styled.div`
  display: flex;
`;
const ColumnText = styled.h4`
  color: black;
  font-family: "poppins";
  font-size: 1.4rem;
  font-weight: 400;
  ${tab({
    fontSize: "0.8rem"
  })}
`;

const ChangeText = styled(ColumnText)`
  color: ${(props) => (props.negative ? "red" : "green")};
  margin-right: 2rem;
  ${tab({
    marginRight: "0.5rem"
  })}
`;
