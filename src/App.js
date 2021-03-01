import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import { useState } from 'react';
import Header from './components/headers/Header';
import Shop from './components/headers/shop/Shop';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div>
      <Header></Header>
      <Shop></Shop>
    </div>
  );
}


export default App;
