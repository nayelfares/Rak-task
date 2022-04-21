import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Back from '../../assets/icons/Back';
import LoginControl from './components/loginControl';
import LoginView from './components/loginView';
import {styles} from './style';

const baseKey = 'home';
function Home() {
  const [showLoginView, setShowLoginView] = useState(false);
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.parent}>
        <View style={styles.child}>
          {showLoginView && (
            <View style={styles.back}>
              <TouchableOpacity
                onPress={() => setShowLoginView(showLoginView ? false : true)}>
                <Back />
              </TouchableOpacity>
            </View>
          )}
          <Text>Hello World</Text>
        </View>
      </View>
      {!showLoginView ? (
        <LoginControl
          onLoginPress={() => setShowLoginView(true)}
          style={styles.loginControl}
          baseKey={baseKey}
        />
      ) : (
        <LoginView
          showLoginView={showLoginView}
          baseKey={baseKey}
          style={styles.loginControl}
        />
      )}
    </SafeAreaView>
  );
}
export default Home;
