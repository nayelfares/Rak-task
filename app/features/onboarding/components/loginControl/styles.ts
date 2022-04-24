import {StyleSheet} from 'react-native';
import colors from '../../../../assets/colors';

const styles = StyleSheet.create({
  login: {
    backgroundColor: colors.grey,
  },
  quickBalanceContainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 16,
    justifyContent: 'center',
  },
  quickBalanceText: {
    fontSize: 14,
    marginStart: 12,
  },
});

export default styles;
