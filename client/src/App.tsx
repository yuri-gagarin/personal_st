import React from 'react';
import './App.css';

import HomeScreenComponent from "./components/home_screen/HomeScreenComponent";
import HomeScreenControlls from "./components/home_screen/HomeScreenControlls";

const App: React.FC = (props: any): JSX.Element => {
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
