import React from 'react';
import './shared/global/Global.css';
import { Routing } from './routes/Routing';
import { NavBar } from './components/navbar/NavBar';
import { WeatherApi } from './shared/api/WeatherApi';

function App() {
  return (
    <>
      <WeatherApi>
        <NavBar />
        <Routing />
      </WeatherApi>
    </>
  );
}

export default App;
