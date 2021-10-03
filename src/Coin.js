import React from 'react';
import './Coin.css';

const Coin = ({
  name,
  price,
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
        </div>
        <div className='coin-data'>
          <p className='coin-price'>{price} Euro</p>
          <p className='coin-volume'>{volume.toLocaleString()} Euro</p>

          {priceChange < 0 ? (
            <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
          ) : (
            <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
          )}

          <p className='coin-marketcap'>
            Mkt Cap: {marketcap.toLocaleString()} Eur
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;