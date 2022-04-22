import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './app/navigation/mainNavigation';
import './app/assets/localization/i18n';
import {Provider} from 'react-redux';
import {store} from './app/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
