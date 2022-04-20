import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Platform} from 'react-native';
import Package from '../assets/icons/Package';
import Message from '../assets/icons/Message';
import Token from '../assets/icons/Token';
import Gps from '../assets/icons/Gps';
import Home from '../features/home';

const Tab = createBottomTabNavigator();
const screenOptions = {
  headerShown: false,
  tabBarStyle: {
    height: Platform.OS === 'ios' ? 85 : 60,
  },
};
const MainNavigator = (): React.ReactElement => (
  <Tab.Navigator screenOptions={screenOptions}>
    <Tab.Screen
      name="Products"
      component={Home}
      options={{
        tabBarIcon: () => <Package />,
      }}
    />
    <Tab.Screen
      name="Live chat"
      component={Home}
      options={{
        tabBarIcon: () => <Message />,
      }}
    />
    <Tab.Screen
      name="RAKToken"
      component={Home}
      options={{
        tabBarIcon: () => <Token />,
      }}
    />
    <Tab.Screen
      name="Locate us"
      component={Home}
      options={{
        tabBarIcon: () => <Gps />,
      }}
    />
  </Tab.Navigator>
);

export default MainNavigator;
