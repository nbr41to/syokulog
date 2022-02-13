import axios from 'axios';
import { useState, useEffect } from 'react';
import { useGeoCoords } from './useGeoCoords';
import dayjs from 'dayjs';

//TODO: APIレスポンスの型定義
//TODO: anyにしている箇所の適切な型の付与
//TODO: 週間天気データのスプレッド構文を用いた渡し方
export const useWeatherData = () => {
  type currentWeatherDataType = {
    weather: string;
    maxTemp: number;
    minTemp: number;
    area: string;
  };
  type dailyWeatherType = {
    weather: string;
    chanceOfRain: number;
    maxTemp: number;
    minTemp: number;
  };
  const [currentWeatherData, setCurrentWeatherData] =
    useState<currentWeatherDataType | null>(null);
  const [dailyWeatherData, setdailyWeatherData] = useState<
    dailyWeatherType[] | null
  >(null);
  const { latitude, longitude } = useGeoCoords();

  useEffect(() => {
    if (latitude && longitude) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=ja&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}`,
        )
        .then((response) => {
          const data = response.data;
          setCurrentWeatherData({
            weather: data.weather[0].main,
            maxTemp: data.main.temp_max,
            minTemp: data.main.temp_min,
            area: data.name,
          });
        });
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,alerts&units=metric&lang=ja&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}`,
        )
        .then((response) => {
          const responseDailyData = response.data.daily;
          delete responseDailyData[6];
          delete responseDailyData[7];
          type dailyWeatherType = {
            date: dayjs.Dayjs;
            weather: string;
            chanceOfRain: number;
            maxTemp: number;
            minTemp: number;
          };
          const tempWeatherData: dailyWeatherType[] = [];
          const now: dayjs.Dayjs = dayjs();
          responseDailyData.map((dailyDatum: any, index: number) => {
            tempWeatherData.push({
              date: now.add(index + 1, 'day'),
              weather: dailyDatum.weather[0].main,
              chanceOfRain: 20,
              maxTemp: dailyDatum.temp.max,
              minTemp: dailyDatum.temp.min,
            });
          });
          setdailyWeatherData(tempWeatherData);
        });
    }
  }, [latitude, longitude]);

  return { currentWeatherData, dailyWeatherData };
};
