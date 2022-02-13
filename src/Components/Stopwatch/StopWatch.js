import React, {useState} from 'react';

import {SafeAreaView, View} from 'react-native';
import {Stopwatch, Timer} from 'react-native-stopwatch-timer';
import styles from './Stopwatch.styles';

const StopWatch = () => {
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.section_style}>
          <Stopwatch
            laps
            msecs
            start={isStopwatchStart}
            reset={resetStopwatch}
            options={options}
            getTime={time => {}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default StopWatch;

const options = {
  container: {
    width: 100,
  },
  text: {
    color: 'black',
  },
};
