import React, { useState, useEffect } from 'react';
import './Table.scss';

const Table = () => {
  const [coins, setcoins] = useState([]);

  const fetchCoins = async () => {
    const response = await fetch('https://api.coincap.io/v2/assets?limit=5');
    const data = await response.json();
    setcoins(data.data);
    console.table(coins);
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <div className='table'>
      <table>
        <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Price</th>
          <th>Market Cap</th>
          <th>Volume (24h)</th>
          <th>Change (24h)</th>
        </tr>
        </thead>

        <tbody>
        {coins.map((coin) => {
          return (
            <tr className='data' key={coin.id}>
              <td className='rank'>{coin.rank}</td>
              <td>{coin.name}</td>
              <td>{Number(coin.priceUsd).toFixed(2)}</td>
              <td>{Number(coin.marketCapUsd).toFixed(2)}</td>
              <td>{Number(coin.volumeUsd24Hr).toFixed(2)}</td>
              <td>{Number(coin.changePercent24Hr).toFixed(2)}</td>
            </tr>
          );
        })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
