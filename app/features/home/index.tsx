import React, {useEffect, useState} from 'react';
import {Keyboard, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Back from '../../assets/icons/Back';
import BorderedButton from '../../components/borderedButton';
import Devider from '../../components/Devider';
import LoginControl from './components/loginControl';
import LoginView from './components/loginView';
import {styles} from './style';

const baseKey = 'home';
function Home() {
  const [showLoginView, setShowLoginView] = useState(false);
  const onKeyboardDidHide = () => {
    setShowLoginView(false);
  };
  useEffect(() => {
    if (showLoginView) {
      Keyboard.addListener('keyboardDidHide', onKeyboardDidHide);
      Keyboard.dismiss();
    }
  }, [showLoginView]);
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
          <BorderedButton style={styles.register} title={'Register'} />
          <View style={styles.abstact}>
            <Text style={styles.title}>RAKBank</Text>
            <Devider height={24} />
            <Text style={styles.description}>
              Everything you love about{'\n'} Digital banking in a smarter,
              {'\n'}
              design
            </Text>
          </View>
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
