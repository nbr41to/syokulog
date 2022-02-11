import { useState, useEffect } from 'react';

export const useGeoCoords = () => {
  type PositionType = {
    latitude: number | undefined;
    longitude: number | undefined;
  };
  const [position, setPosition] = useState<PositionType>({
    latitude: undefined,
    longitude: undefined,
  });
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
  return position;
};
