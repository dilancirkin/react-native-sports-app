import React from 'react';
import {KeyboardAvoidingView} from 'react-native';
import {View, Text, Pressable, Keyboard} from 'react-native';
import styles from './Detail.styles';

const Detail = () => {
  return (
    <Pressable style={styles.main_Container} onPress={() => Keyboard.dismiss()}>
      <Text style={styles.subheading}>HİSTORY</Text>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'padding' : 'height'}
        style={{flex: 1}}
        keyboardVerticalOffset={-100}>
        <View style={{flex: 1}}>
          <View style={{marginTop: 12}}>
            <Text style={styles.kilometer_value}>2</Text>
            <Text style={styles.kilometer_metric}>Kilometers</Text>
          </View>

          <View style={styles.metri_container}>
            <View>
              <Text style={styles.metric_value}>100</Text>
              <Text style={styles.metric}>Pace</Text>
            </View>
            <View>
              <Text style={styles.metric_value}>1.10</Text>
              <Text style={styles.metric}>Time</Text>
            </View>
            <View>
              <Text style={styles.metric_value}>20</Text>
              <Text style={styles.metric}>Average Speed</Text>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Pressable>
  );
};

export default Detail;
