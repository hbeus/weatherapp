import React, { useState, useEffect, createContext } from 'react';
import Axios from 'axios';

export const WeatherContext = createContext();

export const WeatherApi = (props) => {
  const [data, setData] = useState();
  const [sol, setSol] = useState([]);

  const fetchData = async () => {
    const response = await Axios.get(
      'https://api.nasa.gov/insight_weather/?api_key=krJLSINhazAiDx73X4fZ6g15kNWYkglpUHkfU7kf&feedtype=json&ver=1.0',
    );
    setData(response.data);
    setSol(response.data.sol_keys.reverse());
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <WeatherContext.Provider value={{ data: data, sol: sol }}>
      {/* -----> <WeatherContext.Provider value={[data]}> */}
      {/* <WeatherContext.Provider value={([data, setData], [sol, setSol])}> */}
      {/* <WeatherContext.Provider value={({ data }, { sol })}> */}
      {props.children}
    </WeatherContext.Provider>
  );
};
