import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Coin from './Coin';
import { BiBitcoin, BiError } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=50&page=1&sparkline=false'
      )
      .then(res => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='coin-app'>
      <div className='topnav'>
        <div className='navbar-logo'>
          <BiBitcoin className='navbar-icon' />
        Crypto
      </div>
        <div className='search-container'>
          <form>
            <input
              className='searchTerm'
              type='text'
              onChange={handleChange}
              placeholder='Search'
            />
          </form>
        </div>
      </div>
      {filteredCoins.length === 0 ? (<div className="no-result">
        <div className="lds-dual-ring"></div>
        <div className="error-and-logo">
          <BiError className="error-logo" />
        No results found
        </div>
      </div>)
        : filteredCoins.map(coin => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              price={coin.current_price}
              symbol={coin.symbol}
              marketcap={coin.total_volume}
              volume={coin.market_cap}
              image={coin.image}
              priceChange={coin.price_change_percentage_24h}
            />
          );
        })}
      <div className="footer">
        © Ali Ravaee
        <a href='https://github.com/aravaee' target='_blank' rel='noopener'><FaGithub className="git-logo" /></a>
      </div>
    </div>
  );
}

export default App;
