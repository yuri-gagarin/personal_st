import React,  { useContext } from 'react';
import logo from './logo.svg';
import './App.css';

import HomeScreenComponent from "./components/home_screen/HomeScreenComponent";
import HomeScreenControlls from "./components/home_screen/HomeScreenControlls";

import { Store } from "./Store";

type ScreenState = {
  powerOn: boolean,
  greeting: string
}
type UserState = {
  name: string,
  handle: string
}

const App: React.FC = (props: any): JSX.Element => {
  const store = React.useContext(Store);
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
