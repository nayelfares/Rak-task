import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
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
  parent: {
    height: '60%',
    width: '100%',
    transform: [{scaleX: 2}],
    borderBottomStartRadius: 200,
    borderBottomEndRadius: 200,
    overflow: 'hidden',
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
