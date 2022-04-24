import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';
export const styles = StyleSheet.create({
  description: {
    flex: 3,
    fontWeight: '300',
    color: colors.purple,
  },
  dev: {
    flex: 1,
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
  },
  screen: {
    height: '90%',
    width: '80%',
    marginStart: '10%',
    marginEnd: '10%',
    marginTop: '5%',
  },
  title: {
    flex: 2,
    fontSize: 14,
    fontWeight: '600',
    color: colors.purple,
  },
});
