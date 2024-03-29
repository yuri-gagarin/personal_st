import React, { useEffect, useState } from 'react';
import './App.css';

import HomeScreenComponent from "./components/home_screen/HomeScreenComponent";
import HomeScreenControlls from "./components/home_screen/HomeScreenControlls";
import { LoadingScreen } from './components/loading_screen/LoadingScreen';

const App: React.FC = (): JSX.Element => {
  const [ appGenState, setAppGenState ] = useState<{ loaded: boolean}>({ loaded: false });
 
  useEffect(() => {
    setTimeout(() => { setAppGenState({ loaded: true })});
  }, []);

  return (
    <div className="App">
      { appGenState.loaded 
        ?
        <React.Fragment>
          <HomeScreenComponent
            title="Home Screen"
          />
          <HomeScreenControlls />
        </React.Fragment>
        :
        <LoadingScreen />
      }
    </div>
  );
}

export default App;
