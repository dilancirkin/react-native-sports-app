import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './ActivityBar.styles';
import Weather from '../Weather';
import StopWatch from '../Stopwatch/StopWatch.js';

const ActivityBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.metric_main_container}>
        <View style={styles.metric_inner_container}>
          <View style={styles.metric_container}>
            <Icon name="check-outline" size={20} />
            <Text> 0</Text>
            <Text style={styles.metric}>Kilometers</Text>
          </View>
          <View style={styles.second_metric_container}>
            <Icon name="weather-cloudy" size={20} />
            <Weather />
            <Text style={styles.metric}>Weather</Text>
          </View>
        </View>

        <View style={styles.metric_inner_container}>
          <View style={styles.metric_container}>
            <Icon name="timer-outline" size={20} />
            <StopWatch />
            <Text style={styles.metric}>Time</Text>
          </View>
          <View style={styles.second_metric_container}>
            <Icon name="speedometer" size={20} />
            <Text>20.3</Text>
            <Text style={styles.metric}>Average Speed</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ActivityBar;
