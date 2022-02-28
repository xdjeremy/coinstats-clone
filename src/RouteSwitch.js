import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Header from './components/Header';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<App />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
