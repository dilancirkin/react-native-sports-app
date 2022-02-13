import {StyleSheet} from 'react-native';
import spacing from '../../styles/spacing';
import radius from '../../styles/radius';
import colors from '../../styles/colors';

export default {
  default: StyleSheet.create({
    container: {
      margin: spacing.small,
      backgroundColor: colors.primary,
      padding: spacing.large,
      borderRadius: radius.smooth,
      alignItems: 'center',
    },
    label: {
      fontWeight: 'bold',
      color: 'white',
    },
  }),
  outline: StyleSheet.create({
    container: {
      borderWidth: 1,
      margin: spacing.small,
      borderColor: colors.primary,
      padding: spacing.large,
      alignItems: 'center',
      borderRadius: radius.smooth,
    },
    label: {
      fontWeight: 'bold',
      color: colors.primary,
    },
  }),
  square: StyleSheet.create({
    container: {
      padding: spacing.large,
      margin: spacing.large,
      borderRadius: radius.smooth,
      borderWidth: 0.8,
      borderColor: '#EBEBEB',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      width: 100,
      height: 100,
      flexDirection: 'column',
    },
    label: {
      fontWeight: 'bold',
      color: 'blue',
      marginBottom: spacing.small,
    },
  }),
  logOut: StyleSheet.create({
    container: {
      padding: spacing.large,
      margin: spacing.large,
      borderRadius: radius.smooth,
      borderWidth: 0.8,
    },
    label: {
      fontWeight: 'bold',
      color: 'blue',
      marginBottom: spacing.small,
    },
  }),
  activity: StyleSheet.create({
    container: {
      padding: spacing.huge,
      borderRadius: radius.smooth,
      borderWidth: 0.8,
      backgroundColor: colors.primary,
    },
    label: {
      fontWeight: 'bold',
      color: colors.secondary,
      marginBottom: spacing.small,
    },
  }),
};
