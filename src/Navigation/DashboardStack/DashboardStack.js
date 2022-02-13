import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import routes from '../routes';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Dashboard from '../../Pages/Dashboard';
import NewActivity from '../../Pages/NewActivity';
import Leaderboard from '../../Pages/Leaderboard';
import DetailStack from '../DetailStack';

import colors from '../../styles/colors';

const Tab = createBottomTabNavigator();

const DashboardStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        headerTintColor: colors.primary,
      }}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon name="run-fast" color={color} size={20} />
          ),
        }}
        name={routes.DASHBOARD_PAGE}
        component={Dashboard}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => <Icon name="plus" color={color} size={20} />,
        }}
        name={routes.NEW_ACTIVITY_PAGE}
        component={NewActivity}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon name="history" color={color} size={20} />
          ),
        }}
        name={routes.DETAIL_STACK}
        component={DetailStack}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon name="crown-outline" color={color} size={20} />
          ),
        }}
        name={routes.LEADERBOARD_PAGE}
        component={Leaderboard}
      />
    </Tab.Navigator>
  );
};
export default DashboardStack;
