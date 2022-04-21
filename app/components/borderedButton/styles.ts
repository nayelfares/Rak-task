import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

const styles = StyleSheet.create({
  button: {
    height: 40,
    alignContent: 'center',
    justifyContent: 'center',
    color: colors.textHint,
    borderRadius: 16,
    borderColor: colors.white,
    borderWidth: 2,
    backgroundColor: '#ffffff55',
  },
  text: {
    flex: 1,
    color: colors.white,
    fontSize: 16,
    lineHeight: 34,
    textAlign: 'center',
    paddingStart: 8,
    paddingEnd: 8,
  },
});

export default styles;
