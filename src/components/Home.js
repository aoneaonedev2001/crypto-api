import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import { Link } from "react-router-dom";
import Coin from "./Coin";

const Home = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
      )
      .then((response) => {
        setCoins(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <div>
        <div className="heading">
          <p>#</p>
          <p className="coin-name">Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className="hide-mobile">Volume</p>
          <p className="hide-mobile">Mkt Cap</p>
        </div>

        {coins.map((coins) => {
          return (
            <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
              <div className="coin-row">
                <p>{coins.market_cap_rank}</p>
                <div className="img-symbol">
                  <img src={coins.image} alt="" />
                  <p>{coins.symbol.toUpperCase()}</p>
                </div>
                <p>${coins.current_price.toLocaleString()}</p>
                <p>{coins.price_change_percentage_24h.toFixed(2)}%</p>
                <p className="hide-mobile">
                  ${coins.total_volume.toLocaleString()}
                </p>
                <p className="hide-mobile">
                  ${coins.market_cap.toLocaleString()}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
