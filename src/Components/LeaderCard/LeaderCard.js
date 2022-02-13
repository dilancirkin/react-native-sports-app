import React from 'react';
import {View, Text} from 'react-native';
import styles from './LeaderCard.styles';

const LeaderCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Dilan</Text>
      <Text style={styles.text}>TOPLAM KM</Text>
    </View>
  );
};

export default LeaderCard;
