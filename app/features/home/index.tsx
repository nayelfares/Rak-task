import React from 'react';
import {Text, View} from 'react-native';
import LoginControl from './components/loginControl';
import {styles} from './style';

const baseKey = 'home';
function Home() {
  return (
    <View style={styles.screen}>
      <View style={styles.parent}>
        <View style={styles.child}>
          <Text>Hello World</Text>
        </View>
      </View>
      <LoginControl style={styles.loginControl} baseKey={baseKey} />
    </View>
  );
}
export default Home;
