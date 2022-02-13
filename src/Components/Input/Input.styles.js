import {StyleSheet} from 'react-native';
import spacing from '../../styles/spacing';
import radius from '../../styles/radius';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    margin: spacing.small,
  },
  input_container: {
    marginTop: spacing.tiny,
    backgroundColor: colors.medium,
    padding: spacing.small,
    borderRadius: radius.sharp,
  },
  label: {
    fontWeight: 'bold',
    color: colors.secondary,
  },
});
