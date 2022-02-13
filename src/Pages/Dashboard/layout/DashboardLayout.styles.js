import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';
import spacing from '../../../styles/spacing';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  icon: {
    color: colors.primary,
    flexDirection: 'row-reverse',
  },
  details: {
    paddingHorizontal: spacing.huge,
    paddingTop: spacing.giant,
    paddingBottom: spacing.giant,
    backgroundColor: colors.primary,
    borderTopRightRadius: spacing.giant,
    borderTopLeftRadius: spacing.giant,
  },
  sum_container: {
    width: 370,
    height: 80,
    padding: spacing.large,
    margin: spacing.large,
    borderRadius: spacing.smooth,
    borderWidth: 0.8,
    backgroundColor: colors.secondary,
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
  },
});
