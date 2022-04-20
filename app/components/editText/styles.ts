import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';
const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: 60,
    paddingStart: '5%',
    paddingEnd: '5%',
    marginStart: '10%',
    marginEnd: '10%',
    borderRadius: 8,
    backgroundColor: colors.white,
  },
  ph: {
    marginBottom: 6,
    marginTop: 8,
  },
  line: {
    width: '100%',
    height: 2,
    backgroundColor: '#ACF75F',
  },
  text: {
    width: '100%',
    height: 50,
    alignContent: 'center',
    justifyContent: 'center',
    color: colors.textHint,
    borderColor: colors.black,
    borderWidth: 0.5,
    fontSize: 16,
    textAlign: 'center',
    backgroundColor: 'white',
  },
});

export default styles;
