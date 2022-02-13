import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';

import styles from './DashboardLayout.styles';
import UserProfile from '../../../Components/UserProfile';

const DashboardLayout = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Icon
        name="logout"
        style={styles.icon}
        size={30}
        onPress={() => auth().signOut()}
      />
      <UserProfile />
      <View style={styles.details}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}></View>
        <View style={styles.sum_container}>
          <Text style={styles.text}>TOTAL DISTANCE TRAVELED</Text>
          <Text style={styles.text}>25 KM</Text>
        </View>
        <View style={styles.sum_container}>
          <Text style={styles.text}>TOTAL TIME</Text>
          <Text style={styles.text}>5 HOURS</Text>
        </View>
        <View style={styles.sum_container}>
          <Text style={styles.text}>NUMBER OF ACTIVITIES</Text>
          <Text style={styles.text}>7</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DashboardLayout;
