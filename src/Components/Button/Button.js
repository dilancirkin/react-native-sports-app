import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './Button.styles';

export default function Input({label, theme = 'default', ...otherProps}) {
  return (
    <TouchableOpacity style={styles[theme].container} {...otherProps}>
      <Text style={styles[theme].label}>{label}</Text>
    </TouchableOpacity>
  );
}
