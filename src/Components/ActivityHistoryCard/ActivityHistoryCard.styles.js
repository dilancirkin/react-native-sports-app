import {StyleSheet} from 'react-native';
import spacing from '../../styles/spacing';
import radius from '../../styles/radius';
import colors from '../../styles/colors';

export default StyleSheet.create({
  header: {
    paddingVertical: spacing.huge,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: spacing.huge,
  },
  card: {
    height: 100,
    elevation: 15,
    borderRadius: radius.smooth,
    backgroundColor: colors.secondary,
    marginVertical: spacing.large,
    marginHorizontal: spacing.huge,
    paddingHorizontal: spacing.large,
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    width: 80,
    height: 40,
    backgroundColor: colors.primary,
    borderRadius: radius.large,
    paddingHorizontal: spacing.small,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  button_container: {marginRight: spacing.huge, alignItems: 'center'},
  text: {fontSize: 17, fontWeight: 'bold'},
});
