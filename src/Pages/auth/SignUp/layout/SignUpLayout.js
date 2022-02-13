import React, {useState} from 'react';
import {Alert, SafeAreaView, Image} from 'react-native';
import uuid from 'react-native-uuid';

import Input from '../../../../Components/Input';
import Button from '../../../../Components/Button';

import styles from './SignUpLayout.styles';

export default function SignUp({onSignUp, onGoBack}) {
  const [signInformation, setSignInformation] = useState({
    email: '',
    password: '',
    repassword: '',
    name: '',
    id: uuid.v4(),
  });

  function handleSignUp() {
    if (signInformation.password !== signInformation.repassword) {
      return Alert.alert('WARNING', 'Passwords are not matched');
    }
    onSignUp(signInformation);
  }

  return (
    <SafeAreaView>
      <Image
        style={styles.image}
        source={{
          uri: 'https://www.pngall.com/wp-content/uploads/4/Abstract-Running-Transparent-Background.png',
        }}
      />
      <Input
        label="Name"
        onChangeText={text =>
          setSignInformation({...signInformation, name: text})
        }
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
      <Input
        label="Password Again"
        secureTextEntry
        onChangeText={text =>
          setSignInformation({...signInformation, repassword: text})
        }
      />
      <Button label="Sign Up" onPress={handleSignUp} />
      <Button label="Back" theme="outline" onPress={onGoBack} />
    </SafeAreaView>
  );
}
