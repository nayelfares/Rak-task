import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Platform} from 'react-native';
import Package from '../assets/icons/Package';
import Message from '../assets/icons/Message';
import Token from '../assets/icons/Token';
import Gps from '../assets/icons/Gps';
import PackageSelected from '../assets/icons/PackageSelected';
import MessageSelected from '../assets/icons/MessageSelected';
import TokenSelected from '../assets/icons/TokenSelected';
import GpsSelected from '../assets/icons/GpsSelected';
import StackNav from './stackNav';
import Empty from '../features/Empty';
import colors from '../assets/colors';

const Tab = createBottomTabNavigator();
const screenOptions = {
  headerShown: false,
  tabBarOptions: {
    activeTintColor: colors.purple,
  },
  tabBarStyle: {
    activeTintColor: colors.purple,
    height: Platform.OS === 'ios' ? 85 : 60,
  },
};
const MainNavigator = (): React.ReactElement => (
  <Tab.Navigator screenOptions={screenOptions}>
    <Tab.Screen
      name="Products"
      component={StackNav}
      options={{
        tabBarActiveTintColor: colors.purple,
        tabBarIcon: ({focused}: any) => {
          if (focused) {
            return <PackageSelected />;
          } else {
            return <Package />;
          }
        },
      }}
    />
    <Tab.Screen
      name="Live chat"
      component={Empty}
      options={{
        tabBarActiveTintColor: colors.purple,
        tabBarIcon: ({focused}: any) => {
          if (focused) {
            return <MessageSelected />;
          } else {
            return <Message />;
          }
        },
      }}
    />
    <Tab.Screen
      name="RAKToken"
      component={Empty}
      options={{
        tabBarActiveTintColor: colors.purple,
        tabBarIcon: ({focused}: any) => {
          if (focused) {
            return <TokenSelected />;
          } else {
            return <Token />;
          }
        },
      }}
    />
    <Tab.Screen
      name="Locate us"
      component={Empty}
      options={{
        tabBarActiveTintColor: colors.purple,
        tabBarIcon: ({focused}: any) => {
          if (focused) {
            return <GpsSelected />;
          } else {
            return <Gps />;
          }
        },
      }}
    />
  </Tab.Navigator>
);

export default MainNavigator;
