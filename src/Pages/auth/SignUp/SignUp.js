import React from 'react';
import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

import SignUpLayout from '../../auth/SignUp/layout';

export default function SignUp() {
  const navigation = useNavigation();

  function handleReturnSignIn() {
    if (!navigation.canGoBack()) {
      return;
    }
    navigation.goBack();
  }

  const handleSignUp = async signInformation => {
    try {
      auth()
        .createUserWithEmailAndPassword(
          signInformation.email,
          signInformation.password,
        )
        .then(async authUser => {
          await authUser.user.updateProfile({
            displayName: signInformation.name,
          });
        });
      Alert.alert(
        'SUCCESSFULLY',
        'User created.Now you can sign in with your address',
      );
    } catch (error) {
      console.log(error);
      Alert.alert('WARNING', 'An error occurred');
    }
  };

  return <SignUpLayout onGoBack={handleReturnSignIn} onSignUp={handleSignUp} />;
}
