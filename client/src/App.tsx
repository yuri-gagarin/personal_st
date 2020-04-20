import React from 'react';
import logo from './logo.svg';
import './App.css';

import HomeScreenComponent from "./components/HomeScreenComponent";
import HomeScreenControlls from "./components/HomeScreenControlls";

function App() {
  return (
    <div className="App">
      <HomeScreenComponent
        title="Home Screen"
      />
      <HomeScreenControlls />
    </div>
  );
}

export default App;
