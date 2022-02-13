import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import spacing from '../../styles/spacing';

export default StyleSheet.create({
  main_Container: {
    backgroundColor: 'white',
    flex: 1,
    borderTopWidth: 1,
    borderColor: colors.primary,
    padding: spacing.huge,
  },
  subheading: {fontSize: 16, color: colors.primary},
  kilometer_value: {fontSize: 80, fontWeight: 'bold', color: colors.primary},
  kilometer_metric: {fontSize: 16, color: colors.primary},
  metric_container: {
    color: colors.primary,
    marginTop: spacing.big,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  metric_value: {fontSize: 24, fontWeight: 'bold', color: colors.primary},
  metric: {color: colors.primary, fontSize: 16},
});
