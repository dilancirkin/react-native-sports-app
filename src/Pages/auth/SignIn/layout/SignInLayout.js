import React, {useState} from 'react';
import {SafeAreaView, Image} from 'react-native';

import Input from '../../../../Components/Input';
import Button from '../../../../Components/Button';

import styles from './SignInLayout.styles';

export default function SignIn({onSignIn, onSignUp}) {
  const [signInformation, setSignInformation] = useState({
    email: '',
    password: '',
  });

  return (
    <SafeAreaView>
      <Image
        style={styles.image}
        source={{
          uri: 'https://www.pngall.com/wp-content/uploads/4/Abstract-Running-Transparent-Background.png',
        }}
      />
      <Input
        label="Email"
        autoCapitalize="none"
        onChangeText={text =>
          setSignInformation({...signInformation, email: text})
        }
      />
      <Input
        label="Password"
        secureTextEntry
        onChangeText={text =>
          setSignInformation({...signInformation, password: text})
        }
      />
      <Button label="Sign In" onPress={() => onSignIn(signInformation)} />
      <Button label="Sign Up" theme="outline" onPress={onSignUp} />
    </SafeAreaView>
  );
}
