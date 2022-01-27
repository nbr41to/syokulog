import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './index.module.scss';
import currentLocationImage from '../../../assets/svg/current-location.svg';

//TODO: 降水確率を別のAPIから取得する
//TODO: 最低・最高気温の前日比を取得する(昨日の天気を取得する)
//TODO: 昨日の最低気温・最高気温はhistoricalのAPIを叩く
//TODO: 一週間の天気を取得する
//TODO: 3時間ごとの天気を取得する

const WeatherPage = () => {
  const [position, setPosition] = useState(undefined);
  const [weatherDataForToday, setWeatherDataForToday] = useState(undefined);
  const API_KEY = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY;
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (currentPosition) => {
        const { latitude, longitude } = currentPosition.coords;
        setPosition({ latitude: latitude, longitude: longitude });
      },
      (error) => {
        switch (error.code) {
          case 1:
            alert('位置情報の利用が許可されていません');
            break;
          case 2:
            alert('現在位置が取得できませんでした');
            break;
          case 3:
            alert('タイムアウトになりました');
            break;
          default:
            alert('その他のエラー(エラーコード:' + error.code + ')');
            break;
        }
      },
    );
  }, []);

  useEffect(async () => {
    if (position) {
      const apiWeatherDataForToday = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${position.latitude}&lon=${position.longitude}&exclude=minutely,hourly,daily,alerts&units=metric&lang=ja&appid=${API_KEY}`,
      });
      const responseDataForToday = await apiWeatherDataForToday.get();
      console.log(responseDataForToday.data);
      setWeatherDataForToday({
        main: responseDataForToday.data.weather[0].main,
        minTemp: responseDataForToday.data.main.temp_min,
        maxTemp: responseDataForToday.data.main.temp_max,
      });
    }
  }, [position]);

  useEffect(async () => {
    if (position && weatherDataForToday) {
      const date = new Date();
      date.setDate(date.getDate() - 1);
      const unixTimestampPerMillisecond = date.getTime();
      const unixTImestampPerSecond = Math.floor(
        unixTimestampPerMillisecond / 1000,
      );
      const apiWeatherDataForYesterday = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${position.latitude}&lon=${position.longitude}&dt=${unixTImestampPerSecond}&units=metric&appid=${API_KEY}`,
      });
      const responseDataForYesterday = await apiWeatherDataForYesterday.get();
      const hourlyTemps = [];
      responseDataForYesterday.data.hourly.map((data) => {
        hourlyTemps.push(data.temp);
      });
      const maxTempForYesterday = Math.max(...hourlyTemps);
      const minTempForYesterday = Math.min(...hourlyTemps);
      const changeOfMaxTempFromYesterday =
        weatherDataForToday.maxTemp - maxTempForYesterday;
      const changeOfMinTempFromYesterday =
        weatherDataForToday.minTemp - minTempForYesterday;
      setWeatherDataForToday({
        ...weatherDataForToday,
        changeOfMaxTempFromYesterday: changeOfMaxTempFromYesterday,
        changeOfMinTempFromYesterday: changeOfMinTempFromYesterday,
      });
    }
  }, [weatherDataForToday]);

  return (
    <>
      {position ? (
        <section className={styles.currentInfoArea}>
          <div className={styles.currentInfo}>
            <img src={currentLocationImage} />
            <span>東京</span>
            <span>2021年12月1日</span>
          </div>
          <div>
            {weatherDataForToday && (
              <div>
                <h3>{weatherDataForToday.main}</h3>
                <h3>{weatherDataForToday.minTemp}&deg;C</h3>
                <h3>{weatherDataForToday.maxTemp}&deg;C</h3>
                <h3>{weatherDataForToday.changeOfMaxTempFromYesterday}</h3>
                <h3>{weatherDataForToday.changeOfMinTempFromYesterday}</h3>
              </div>
            )}
          </div>
        </section>
      ) : (
        <h1>Now Loading...</h1>
      )}
    </>
  );
};

export default WeatherPage;
