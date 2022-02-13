import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Map from '../../../Components/Map';

import styles from './NewActivityLayout.styles';

const NewActivityLayout = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Map />
    </SafeAreaView>
  );
};

export default NewActivityLayout;
