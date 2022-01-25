import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './index.module.scss';
import currentLocationImage from '../../../assets/svg/current-location.svg';

//TODO: 降水確率を別のAPIから取得する
//TODO: 最低・最高気温の前日比を取得する(昨日の天気を取得する)
//TODO: 一週間の天気を取得する
//TODO: 3時間ごとの天気を取得する

const WeatherPage = () => {
  const [position, setPosition] = useState(undefined);
  const [weatherForToday, setWeatherForToday] = useState(undefined);

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
      const weatherApi = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/onecall?lat=${position.latitude}&lon=${position.longitude}&exclude=current,minutely,hourly,alerts&units=metric&appid=ffd4cbb59c5533b7bc189dd3f4f21005`,
      });
      const res = await weatherApi.get();
      console.log(res.data);
      setWeatherForToday({
        main: res.data.daily[0].weather[0].main,
        minTemperature: res.data.daily[0].temp.min,
        maxTemperature: res.data.daily[0].temp.max,
      });
    }
  }, [position]);
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
            {weatherForToday && (
              <div>
                <h3>{weatherForToday.main}</h3>
                <h3>{weatherForToday.minTemperature}&deg;C</h3>
                <h3>{weatherForToday.maxTemperature}&deg;C</h3>
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
