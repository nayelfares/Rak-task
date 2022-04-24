import React, {ReactElement} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../features/home';
import Onboarding from '../features/onboarding';
const Stack = createNativeStackNavigator();
export const ONBOARDING_SCREEN = 'ONBOARDING_SCREEN';
export const HOME_SCREEN = 'HOME_SCREEN';
const StackNav = (): ReactElement => {
  return (
    <Stack.Navigator
      initialRouteName={ONBOARDING_SCREEN}
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_bottom',
      }}>
      <Stack.Screen name={ONBOARDING_SCREEN} component={Onboarding} />
      <Stack.Screen name={HOME_SCREEN} component={Home} />
    </Stack.Navigator>
  );
};

export default StackNav;
