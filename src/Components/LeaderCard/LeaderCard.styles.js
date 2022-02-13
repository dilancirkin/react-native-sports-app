import {StyleSheet} from 'react-native';
import spacing from '../../styles/spacing';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: spacing.large,
    marginHorizontal: spacing.large,
    borderBottomColor: colors.black,
    borderBottomWidth: 1,
  },
  text: {
    fontWeight: 'bold',
    color: colors.secondary,
  },
  name: {
    color: colors.secondary,
  },
});
