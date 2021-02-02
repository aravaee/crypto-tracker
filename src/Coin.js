import React from 'react';
import Numeral from "numeral";
import './Coin.css';

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange
}) => {
  return (
    <div className='coin-container'>
      <div className='coin-row'>
        <div className='coin'>
          <img src={image} alt='crypto' />
          <h1>{name}</h1>
          <p className='coin-symbol'>{symbol}</p>
        </div>
        <div className='coin-data'>
          <p className='coin-price' >${price.toLocaleString()}</p>
          <p className='coin-volume'>${volume.toLocaleString()}</p>
          <p className='coin-volume-small'>${Numeral(volume).format('0.000a')}</p>

          {priceChange < 0 ? (
            <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
          ) : (
              <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
            )}

          <p className='coin-marketcap'>
            ${marketcap.toLocaleString()}
          </p>
          <p className='coin-marketcap-small'>
            ${Numeral(marketcap).format('0.000a')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
