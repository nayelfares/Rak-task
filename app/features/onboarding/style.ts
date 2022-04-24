import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';
export const styles = StyleSheet.create({
  abstact: {
    position: 'absolute',
    top: 90,
    start: 30,
  },
  back: {
    top: 10,
    left: 10,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 2,
  },
  description: {
    color: colors.white,
    fontSize: 22,
    fontWeight: '100',
  },
  parent: {
    height: '60%',
    width: '100%',
    transform: [{scaleX: 2}],
    borderBottomStartRadius: 200,
    borderBottomEndRadius: 200,
    overflow: 'hidden',
  },
  register: {
    position: 'absolute',
    top: 16,
    end: 10,
  },
  title: {
    color: colors.white,
    fontSize: 36,
    fontWeight: '500',
  },
  child: {
    flex: 1,
    transform: [{scaleX: 0.5}],
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    height: '100%',
    width: '100%',
  },
  loginControl: {
    position: 'absolute',
    width: '100%',
    bottom: 50,
  },
});
