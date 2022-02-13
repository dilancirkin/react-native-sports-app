import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import getCurrentWeather from '../../api/consultApi';

const Weather = ({coords, getLocation}) => {
  const [currentTemperature, setCurrentTemperature] = useState('31');

  async function setCurrentWeather() {
    await getLocation();
    const data = await getCurrentWeather(coords);

    setCurrentTemperature(convertKelvinToC(data[0]));
  }

  function convertKelvinToC(kelvin) {
    return parseInt(kelvin - 273);
  }

  useEffect(() => {
    setCurrentWeather();
  }, []);

  return (
    <View>
      <Text>{currentTemperature}</Text>
    </View>
  );
};

export default Weather;
