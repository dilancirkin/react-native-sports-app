import React, {useEffect} from 'react';
import Navigation from './Navigation/Navigation';
import SplashScreen from 'react-native-splash-screen';
import Geolocation from '@react-native-community/geolocation';
import ThemeProvider from './Context/ThemeContext/ThemeProvider';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  Geolocation.getCurrentPosition(
    info => console.log(info),
    error => console.log(error),
    {
      enableHighAccuracy: true,
    },
  );

  return (
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  );
}
