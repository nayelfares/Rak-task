import React from 'react';
import {SafeAreaView} from 'react-native';
import IsEmpty from '../../assets/icons/IsEmpty';

import {styles} from './style';

function Empty() {
  return (
    <SafeAreaView style={styles.screen}>
      <IsEmpty />
    </SafeAreaView>
  );
}
export default Empty;
