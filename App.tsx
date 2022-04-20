import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './app/navigation/mainNavigation';
import './app/assets/localization/i18n';

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default App;
