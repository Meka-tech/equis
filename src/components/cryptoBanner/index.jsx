import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { tab } from "../../utilities/responsive";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";

export const CryptoBanner = () => {
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
  const [x, setX] = useState(10);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setX(x + 0.1);
      if (x > 500) {
        setX(0);
      }
    }, 1);

    return () => clearInterval(interval);
  });

  return (
    <Container>
      <Body tranX={x}>
        {data?.map((coin, index) => {
          return (
            <ItemShell key={index}>
              <GrayBar />
              <Item>
                <FirstCompartment>
                  <Icon src={coin.iconUrl} alt="img" />
                  <NameDiv>
                    <h2>{coin.name}</h2> <h3>{coin.symbol}</h3>
                  </NameDiv>
                </FirstCompartment>
                <SecondCompartment>
                  <h2>${numberWithCommas(coin.price)}</h2>
                  <ChangeText negative={coin.change[0] === "-" ? true : false}>
                    {coin.change[0] === "-" ? (
                      <AiFillCaretDown color="red" />
                    ) : (
                      <AiFillCaretUp color="green" />
                    )}
                    {coin.change}%
                  </ChangeText>
                </SecondCompartment>
              </Item>
            </ItemShell>
          );
        })}
      </Body>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  border-top: 1px solid rgba(0, 147, 255, 1);
  border-bottom: 1px solid rgba(0, 147, 255, 1);
  height: 5rem;
  ${tab({
    height: "4rem"
  })}
`;
const Body = styled.div`
  width: 95%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  font-family: "poppins";
  transform: ${(props) => `translateX(-${props.tranX}%)`};
  transition: all 0.1s;
`;

const ItemShell = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
`;
const Item = styled.div`
  height: 80%;
  width: 22rem;
  box-sizing: border-box;
  padding: 0rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${tab({
    width: "18rem"
  })}
`;
const FirstCompartment = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
`;
const SecondCompartment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  h2 {
    font-size: 1.2rem;
    line-height: 1.2rem;
    margin: 0;
    padding: 0;
    ${tab({
      fontSize: "1rem"
    })}
  }
`;
const NameDiv = styled.div`
  h2 {
    font-size: 1.2rem;
    line-height: 1.2rem;
    padding: 0;
    margin: 0;
    font-weight: 700;
    ${tab({
      fontSize: "1rem"
    })}
  }
  h3 {
    font-size: 1rem;
    padding: 0;
    margin: 0;
    color: gray;
    font-weight: 700;
    ${tab({
      fontSize: "0.8rem"
    })}
  }
`;
const GrayBar = styled.div`
  width: 5px;
  height: 30%;
  border-left: 1px solid lightgray;
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

const ChangeText = styled.h4`
  color: ${(props) => (props.negative ? "red" : "green")};
  margin-left: 0.5rem;
  font-family: "poppins";
  font-size: 1.2rem;
  font-weight: 400;
  font-weight: 600;
  display: flex;
  align-items: center;
  ${tab({
    fontSize: "0.8rem",
    marginRight: "0.2rem"
  })}
`;
