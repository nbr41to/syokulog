import { useState } from 'react';
import styles from './index.module.scss';
import CurrentLoactionImage from '../../../assets/svg/current-location.svg';
import SunnyImage from '../../../assets/svg/sunny.svg';
import Loading from '../../../assets/gif/loading.gif';
import { useWeatherData } from '../../../apis/hooks/useWeatherData';

const WeatherPage = () => {
  const { currentWeatherData, dailyWeatherData } = useWeatherData();

  const A = () => {
    const [disabled, setDisabled] = useState(true);
    return (
      <section className={styles.mainWeatherWrapper}>
        <div className={styles.buttonWrapper}>
          <button
            type="button"
            disabled={disabled}
            onClick={() => setDisabled(!disabled)}
          >
            今日
          </button>
          <button
            type="button"
            disabled={!disabled}
            onClick={() => setDisabled(!disabled)}
          >
            3時間
          </button>
        </div>
        {disabled ? <Today /> : <EveryThreeHours />}
      </section>
    );
  };

  const Today = () => {
    return (
      <div className={styles.todayWrapper}>
        <div className={styles.weatherArea}>
          <div className={styles.weatherImageWrapper}>
            <img src={SunnyImage} alt="weather image" />
          </div>
          <div>
            <span>{currentWeatherData.weather}</span>
          </div>
        </div>
        <div className={styles.temperatureArea}>
          <div>
            <div>
              <span>最高</span>
              <b>{currentWeatherData.maxTemp}&deg;C</b>
              <span>[0]</span>
            </div>
            <div></div>
          </div>
          <div>
            <div>
              <span>最低</span>
              <b>{currentWeatherData.minTemp}&deg;C</b>
              <span>[0]</span>
            </div>
            <div></div>
          </div>
          <div>
            <span>降水確率15&#037;</span>
          </div>
        </div>
      </div>
    );
  };

  const EveryThreeHours = () => {
    const hours = [0, 3, 6, 9, 12, 15, 18, 21];
    return (
      <table>
        <thead>
          <tr>
            <th>時間</th>
            <th>天気</th>
            <th>気温</th>
            <th>降水</th>
          </tr>
        </thead>
        <tbody>
          {hours.map((hour) => {
            return (
              <tr key={hour}>
                <td>{hour}</td>
                <td>
                  <img src={SunnyImage} alt="weather logo" />
                </td>
                <td>10&deg;C</td>
                <td>0mm</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  const OneWeek = () => {
    return (
      <section className={styles.weeklyWeatherWrapper}>
        <h3>一週間の天気</h3>
        <div>
          {dailyWeatherData.map((data, index) => {
            return (
              <div className={styles.weeklyWeatherItem} key={index}>
                <time>12月31日（月）</time>
                <img src={SunnyImage} alt="weather image" />
                <span>20%</span>
                <span>
                  {data.maxTemp} / {data.minTemp}
                </span>
              </div>
            );
          })}
        </div>
      </section>
    );
  };

  return currentWeatherData && dailyWeatherData ? (
    <>
      <section className={styles.currentInfoWrapper}>
        <div className={styles.currentLocation}>
          <img src={CurrentLoactionImage} alt="current location" />
          <span>{currentWeatherData.area}</span>
        </div>
        <div className={styles.currentDate}>
          <time>2022年12月31日</time>
        </div>
      </section>
      <A />
      <OneWeek />
    </>
  ) : (
    <div className={styles.loadingWrapper}>
      <img src={Loading} />
    </div>
  );
};

export default WeatherPage;
