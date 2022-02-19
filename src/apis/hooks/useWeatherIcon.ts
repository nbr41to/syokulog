import SunnyImage from '../../assets/svg/sunny.svg';
import RainyImage from '../../assets/svg/rainy.svg';
import CloudyImage from '../../assets/svg/cloudy.svg';
import SnowyImage from '../../assets/svg/snowy.svg';

//戻り値の型定義をする
//しかし、なぜかstringである
export const useWeatherIcon = (weather: string) => {
  switch (weather) {
    case 'Clear':
      return SunnyImage;
    case 'Rain':
      return RainyImage;
    case 'Clouds':
      return CloudyImage;
    case 'Snow':
      return SnowyImage;
    default:
      return SunnyImage;
  }
};
