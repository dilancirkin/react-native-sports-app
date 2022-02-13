import {StyleSheet} from 'react-native';
import spacing from '../../styles/spacing';
import colors from '../../styles/colors';
import radius from '../../styles/radius';

export default StyleSheet.create({
  container: {
    width: 370,
    height: 200,
    padding: spacing.large,
    margin: spacing.large,
    borderRadius: radius.smooth,
    borderWidth: 0.8,
    backgroundColor: colors.primary,
    alignItems: 'center',
  },
  inner_container: {
    width: 370,
    height: 200,
    padding: spacing.large,
    margin: spacing.large,
    borderRadius: radius.smooth,
    borderWidth: 0.8,
    backgroundColor: colors.secondary,
    alignItems: 'center',
  },
  email: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    fontWeight: 'bold',
  },
  name: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    fontWeight: 'bold',
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: radius.big,
    borderColor: colors.black,
    position: 'absolute',
    marginTop: spacing.huge,
    marginRight: spacing.bigger,
    justifyContent: 'center',
  },
});
