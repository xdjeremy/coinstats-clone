import React from 'react';
import './components/App.scss';
import Binance from './assets/binance.png';
import MetaMask from './assets/metamask.png';
import Coinbase from './assets/coinbase.png';
import Table from './components/Table';

const App = () => {
  return (
    <div>
      <div className='hero'>
        <h1 className='hero-text'>
          Manage Your Crypto and DeFi Portfolio From One Place
        </h1>
        <p>Securely connect the portfolio you're using to start.</p>
        <div className='connect-to-apps'>
          <div className='connect-to-apps-item'>
            <img src={Binance} alt='Binance' />
            <p>Binance</p>
            <p className='connect'>Connect</p>
          </div>
          <div className='connect-to-apps-item'>
            <img src={MetaMask} alt='MetaMask' />
            <p>MetaMask</p>
            <p className='connect'>Connect</p>
          </div>
          <div className='connect-to-apps-item'>
            <img src={Coinbase} alt='Coinbase' />
            <p>Coinbase</p>
            <p className='connect'>Connect</p>
          </div>
        </div>
        <div className='connect-to-other'>
          <p className='or'>or</p>
          <button className='connect-to-other-button'>CONNECT OTHER</button>
          <p className='view-demo'>View demo before connecting</p>
        </div>
      </div>

      <Table />

    </div>
  );
};

export default App;
