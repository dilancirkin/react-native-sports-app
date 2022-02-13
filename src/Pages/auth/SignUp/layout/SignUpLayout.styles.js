import {StyleSheet} from 'react-native';
import colors from '../../../../styles/colors';
import radius from '../../../../styles/radius';
import spacing from '../../../../styles/spacing';

export default StyleSheet.create({
  title: {
    color: colors.primary,
  },
  image: {
    marginTop: spacing.grand,
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    width: 280,
    borderRadius: radius.big,
    marginLeft: spacing.description_spacing,
  },
});
