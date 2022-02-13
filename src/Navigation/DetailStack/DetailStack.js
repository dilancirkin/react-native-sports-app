import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import routes from '../routes';

import ActivityHistory from '../../Pages/ActivityHistory';
import Detail from '../../Pages/Detail';

const Stack = createStackNavigator();

const DashboardStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name={routes.ACTIVITY_HISTORY}
        component={ActivityHistory}
      />
      <Stack.Screen name={routes.DETAIL} component={Detail} />
    </Stack.Navigator>
  );
};
export default DashboardStack;
