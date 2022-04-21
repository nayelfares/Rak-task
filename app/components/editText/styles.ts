import {Platform, StyleSheet} from 'react-native';
import colors from '../../assets/colors';
const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: Platform.OS === 'ios' ? 65 : 75,
    paddingStart: '5%',
    marginStart: '10%',
    borderRadius: 8,
    backgroundColor: colors.white,
  },
  ph: {
    height: 20,
    marginBottom: Platform.OS === 'ios' ? 6 : 0,
    marginTop: Platform.OS === 'ios' ? 8 : 0,
  },
  line: {
    width: '100%',
    height: Platform.OS === 'ios' ? 2 : 0,
    backgroundColor: '#ACF75F',
  },
  text: {
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    color: colors.textHint,
    borderColor: colors.black,
    borderWidth: 0.5,
    fontSize: 16,
    height: Platform.OS === 'ios' ? 60 : 10,
    textAlign: 'center',
    backgroundColor: 'white',
  },
});

export default styles;
