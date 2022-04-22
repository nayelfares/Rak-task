import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import styles from './styles';
const ProgressBar = ({
  isLoading = false,
  backColor = '#bbbbbb88',
  progressColor = 'red',
}: any): JSX.Element => {
  const {loadingView} = styles(backColor);
  return isLoading ? (
    <View style={loadingView}>
      <ActivityIndicator color={progressColor} size={60} />
    </View>
  ) : (
    <></>
  );
};

export default ProgressBar;
