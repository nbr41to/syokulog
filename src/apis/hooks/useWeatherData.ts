import axios from 'axios';
import { useState, useEffect } from 'react';
import { useGeoCoords } from './useGeoCoords';
import dayjs from 'dayjs';

//TODO: APIレスポンスの型定義
//TODO: anyにしている箇所の適切な型の付与
export const useWeatherData = () => {
  type currentWeatherDataType = {
    weather: string;
    weatherDescription: string;
    maxTemp: number;
    minTemp: number;
    area: string;
  };
  type dailyWeatherDataType = {
    date: dayjs.Dayjs;
    weather: string;
    chanceOfRain: number;
    maxTemp: number;
    minTemp: number;
  };

  type hourlyWeatherDataType = {
    weather: string;
    temp: number;
    rainVolume: number;
  };

  const [currentWeatherData, setCurrentWeatherData] =
    useState<currentWeatherDataType | null>(null);
  const [dailyWeatherData, setdailyWeatherData] = useState<
    dailyWeatherDataType[] | null
  >(null);
  const [hourlyWeatherData, setHourlyWeatherData] = useState<
    hourlyWeatherDataType[] | null
  >(null);
  const { latitude, longitude } = useGeoCoords();

  useEffect(() => {
    if (latitude && longitude) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=ja&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}`,
        )
        .then((response) => {
          //今日の天気を取得
          const data = response.data;
          setCurrentWeatherData({
            weather: data.weather[0].main,
            weatherDescription: data.weather[0].description,
            maxTemp: data.main.temp_max,
            minTemp: data.main.temp_min,
            area: data.name,
          });
        });
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,alerts&units=metric&lang=ja&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}`,
        )
        //一週間の天気を取得
        .then((response) => {
          const responseDailyData = response.data.daily;
          delete responseDailyData[6];
          delete responseDailyData[7];
          const tempDailyData: dailyWeatherDataType[] = [];
          const now: dayjs.Dayjs = dayjs();
          responseDailyData.map((dailyData: any, index: number) => {
            tempDailyData.push({
              date: now.add(index + 1, 'day'),
              weather: dailyData.weather[0].main,
              chanceOfRain: 20,
              maxTemp: dailyData.temp.max,
              minTemp: dailyData.temp.min,
            });
          });
          setdailyWeatherData(tempDailyData);
          //３時間ごとの天気を取得
          const responseHourlyData = response.data.hourly;
          const tempHourlyData: hourlyWeatherDataType[] = [];
          responseHourlyData.map((hourlyData: any, index: number) => {
            if (index <= 21 && index % 3 === 0) {
              tempHourlyData.push({
                weather: hourlyData.weather[0].main,
                temp: hourlyData.temp,
                rainVolume: hourlyData.rain ? hourlyData.rain['1h'] : 0,
              });
            }
          });
          setHourlyWeatherData(tempHourlyData);
        });
    }
  }, [latitude, longitude]);

  return { currentWeatherData, dailyWeatherData, hourlyWeatherData };
};
