import React from 'react';
import logo from './logo.svg';
import './App.css';

import HomeScreenComponent from "./components/HomeScreenComponent";
function App() {
  return (
    <div className="App">
      <HomeScreenComponent
        title="Home Screen"
      />
    </div>
  );
}

export default App;
