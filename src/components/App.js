import React from 'react';
import {Header} from 'semantic-ui-react';
import VehicleList from './VehicleList';

import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <Header as='h1'>
        Electric Vehicle Demo App
      </Header>
      <VehicleList />
    </div>
  );
}

export default App;
