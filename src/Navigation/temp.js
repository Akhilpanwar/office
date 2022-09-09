import React, { useEffect, useState } from 'react';
import WeatherCard from './weatherCard';
//import './style.css';


const Temp = () => {
  const [searchValue, setSearchValue] = useState("Chandigarh");
  const [tempInfo, setTempInfo] = useState({ })
  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=728aaec2ebeff0ef7a5863fda0ac987f`
      const res = await fetch(url);
      const data = await res.json();
      //object destructing 
      const { humidity, temp, pressure } = data.main;
  

      const { main: weatherMood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;
      const MyNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weatherMood,
        name,
        speed,
        country, 
        sunset
      }
      setTempInfo(MyNewWeatherInfo)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWeatherInfo();
},[]) 
  return (
    <>
    
      <div className='wrap ibody'>
        <div className='search'>
          <input type="search"
            placeholder='search...'
            autoFocus id='search'
            className='searchTerm'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)} />
          <button className='searchButton' type='button' onClick={getWeatherInfo}>
            search
          </button>
        </div>
      </div>
      <WeatherCard tempInfo = {tempInfo}/>
    </>
  ) 
}

export default Temp;
