import {StyleSheet} from 'react-native';

const styles = ({backColor}: any) =>
  StyleSheet.create({
    loadingView: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      zIndex: 2,
      bottom: 0,
      backgroundColor: backColor,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default styles;
