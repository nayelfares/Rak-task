import React from 'react';
import {SafeAreaView} from 'react-native';
import Devider from '../../components/Devider';

import {styles} from './style';

function Home() {
  return (
    <SafeAreaView style={styles.screen}>
      <Devider />
    </SafeAreaView>
  );
}
export default Home;
