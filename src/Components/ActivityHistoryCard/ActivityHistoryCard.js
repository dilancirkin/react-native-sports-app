import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './ActivityHistoryCard.styles';
import routes from '../../Navigation/routes';

const ActivityHistoryCard = () => {
  const navigation = useNavigation();

  const handleCardDetail = () => {
    navigation.navigate(routes.DETAIL);
  };
  return (
    <View style={styles.card}>
      <View
        style={{
          height: 100,
          marginLeft: 10,
          paddingVertical: 20,
          flex: 1,
        }}>
        <Text style={styles.text}>02.01.2022</Text>
        <Text style={styles.text}>2 KM</Text>
      </View>
      <View style={styles.button_container}>
        <TouchableOpacity onPress={handleCardDetail}>
          <View style={styles.button}>
            <Text>GO TO DETAIL</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ActivityHistoryCard;
