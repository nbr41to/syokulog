import { useState } from 'react';
import styles from './index.module.scss';
import CurrentLoactionImage from '../../../assets/svg/current-location.svg';
import SunnyImage from '../../../assets/svg/sunny.svg';

const WeatherPage = () => {
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
        {disabled ? <Today /> : <ThreeHours />}
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
            <span>晴れ</span>
          </div>
        </div>
        <div className={styles.temperatureArea}>
          <div>
            <div>
              <span>最高</span>
              <b>15&deg;C</b>
              <span>[0]</span>
            </div>
            <div></div>
          </div>
          <div>
            <div>
              <span>最低</span>
              <b>10&deg;C</b>
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

  const ThreeHours = () => {
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
          <tr>
            <td>0</td>
            <td>
              <img src={SunnyImage} alt="weather logo" />
            </td>
            <td>10&deg;C</td>
            <td>0mm</td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              <img src={SunnyImage} alt="weather logo" />
            </td>
            <td>10&deg;C</td>
            <td>0mm</td>
          </tr>
          <tr>
            <td>6</td>
            <td>
              <img src={SunnyImage} alt="weather logo" />
            </td>
            <td>10&deg;C</td>
            <td>0mm</td>
          </tr>
          <tr>
            <td>9</td>
            <td>
              <img src={SunnyImage} alt="weather logo" />
            </td>
            <td>10&deg;C</td>
            <td>0mm</td>
          </tr>
          <tr>
            <td>12</td>
            <td>
              <img src={SunnyImage} alt="weather logo" />
            </td>
            <td>10&deg;C</td>
            <td>0mm</td>
          </tr>
          <tr>
            <td>15</td>
            <td>
              <img src={SunnyImage} alt="weather logo" />
            </td>
            <td>10&deg;C</td>
            <td>0mm</td>
          </tr>
          <tr>
            <td>18</td>
            <td>
              <img src={SunnyImage} alt="weather logo" />
            </td>
            <td>10&deg;C</td>
            <td>0mm</td>
          </tr>
          <tr>
            <td>21</td>
            <td>
              <img src={SunnyImage} alt="weather logo" />
            </td>
            <td>10&deg;C</td>
            <td>0mm</td>
          </tr>
        </tbody>
      </table>
    );
  };

  return (
    <>
      <section className={styles.currentInfoWrapper}>
        <div className={styles.currentLocation}>
          <img src={CurrentLoactionImage} alt="current location" />
          <span>東京</span>
        </div>
        <div className={styles.currentDate}>
          <time>2022年12月31日</time>
        </div>
      </section>
      <A />
    </>
  );
};

export default WeatherPage;
