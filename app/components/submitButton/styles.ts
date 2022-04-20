import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

const styles = StyleSheet.create({
  button: {
    width: '80%',
    height: 60,
    alignContent: 'center',
    justifyContent: 'center',
    marginLeft: '10%',
    marginTop: '3%',
    marginRight: '10%',
    color: colors.textHint,
    borderRadius: 51,
    fontSize: 20,
    textAlign: 'center',
  },
  text: {
    flex: 1,
    color: colors.white,
    fontSize: 16,
    lineHeight: 38,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
    textAlignVertical: 'center',
  },
});

export default styles;
