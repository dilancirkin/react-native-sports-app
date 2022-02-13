import React, {useEffect, useState, useContext} from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';

import SignIn from '../Pages/auth/SignIn';
import SignUp from '../Pages/auth/SignUp';
import DashboardStack from './DashboardStack';
import routes from './routes';
import {ThemeContext} from '../Context/ThemeContext/ThemeProvider';

const Stack = createStackNavigator();

export default function Navigator() {
  const {theme} = useContext(ThemeContext);
  const [hasSession, setHasSession] = useState(false);

  useEffect(() => {
    const subscribe = auth().onAuthStateChanged(setHasSession);
    return subscribe;
  }, []);

  return (
    <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!!hasSession ? (
          <Stack.Screen
            name={routes.DASHBOARD_STACK}
            component={DashboardStack}
          />
        ) : (
          <>
            <Stack.Screen name={routes.SIGN_IN_PAGE} component={SignIn} />
            <Stack.Screen name={routes.SIGN_UP_PAGE} component={SignUp} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
