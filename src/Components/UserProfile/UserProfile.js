import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import auth from '@react-native-firebase/auth';

import styles from './UserProfile.styles';

const UserProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setName(user?.displayName ?? '');
      setEmail(user?.email ?? '');
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={{
            uri: 'https://www.pngall.com/wp-content/uploads/4/Abstract-Running-Transparent-Background.png',
          }}
        />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
    </View>
  );
};

export default UserProfile;
