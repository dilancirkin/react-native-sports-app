import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import spacing from '../../styles/spacing';
import radius from '../../styles/radius';

export default StyleSheet.create({
  container: {
    width: 370,
    height: 200,
    borderWidth: 0.5,
    borderRadius: radius.smooth,
    backgroundColor: colors.secondary,
    marginRight: spacing.huge,
    marginBottom: spacing.huge,
  },
  metric_main_container: {
    padding: spacing.giant,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  metric_inner_container: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  metric_value: {fontSize: 32, fontWeight: 'bold'},
  metric_container: {alignItems: 'center'},
  metric: {color: colors.medium},
  second_metric_container: {alignItems: 'center', marginTop: spacing.big},
});
