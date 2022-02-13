import React from 'react';
import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

import routes from '../../../Navigation/routes';
import SignInLayout from '../../auth/SignIn/layout/SignInLayout';

export default function SignIn() {
  const navigation = useNavigation();

  function handleNavigateSignUp() {
    navigation.navigate(routes.SIGN_UP_PAGE);
  }

  function handleSignIn(signInformation) {
    try {
      auth().signInWithEmailAndPassword(
        signInformation.email,
        signInformation.password,
      );
      Alert.alert('SUCCESSFULLY', 'Signed In');
    } catch (error) {
      console.log(error);
      Alert.alert('WARNING', 'An error occurred');
    }
  }

  return (
    <SignInLayout onSignUp={handleNavigateSignUp} onSignIn={handleSignIn} />
  );
}
