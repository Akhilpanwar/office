import React, { useEffect, useState } from 'react'

const WeatherCard = ({ tempInfo }) => {
  const [weatherState, setWeatherState] = useState("");
  const
    {
      temp,
      humidity,
      weatherMood,
      pressure,
      name,
      speed,
      country,
      sunset
    } = tempInfo;
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timerStr = `${date.getHours()}:${date.getMinutes()}`;


  useEffect(() => {
    if (weatherMood) {
      switch (weatherMood) {
        case "Clouds":
          setWeatherState("wi-day-cloudy-windy");
          break;
        case "Haze":
          setWeatherState("wi-day-fog");
          break;
        case "Clear":
          setWeatherState("wi-day-sunny");
          break;
        case "Mist":
          setWeatherState("wi-dust");
          break;
        case "Rain":
          setWeatherState("wi-day-rain");
          break;
        default:
          setWeatherState("wi-day-sunny")
          break;
      }
    }
  }, [weatherMood])

  return (
    <>
      <div className='widget'>
        <div className='weatherIcon'>
          <div className={`wi ${weatherState}`}></div>
        </div>
        <div className='weatherInfo'>
          <div className='temperature '>
            <span>{temp}&deg;</span>
          </div>
          <div className='description'>
            <div className='weatherCondition'>{weatherMood}</div>
            <div className='place'>{name},{country}</div>
          </div>
        </div>
        <div className='date'>{new Date().toLocaleString()}</div>
        {/*our 4 divded  section*/}
        <div className='extra-temp'>
          <div className='temp-info-minmax'>
            <div className='two-sided-section'>
              <p><i className={"wi wi-sunset"}></i></p>
              <p className='extra-info-leftside'>{timerStr} <br />Sunset</p>
            </div>
            <div className='two-sided-section'>
              <p><i className={"wi wi-humidity"}></i></p>
              <p className='extra-info-leftside'>{humidity}<br />Humidity</p>
            </div>

          </div>
          <div className='weather-extra-info'>
            <div className='two-sided-section'>
              <p><i className={"wi wi-rain"}></i></p>
              <p className='extra-info-leftside'>{pressure} <br />Pressure</p>
            </div>
            <div className='two-sided-section'>
              <p><i className={"wi wi-strong_wind"}></i></p>
              <p className='extra-info-leftside'>{speed}<br />Speed</p>
            </div> </div>
        </div>
      </div>
    </>
  )
}
export default WeatherCard;