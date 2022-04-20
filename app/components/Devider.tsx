import React from 'react';
import {View} from 'react-native';

const Devider = ({width, height, flex}: any): JSX.Element => {
  return (
    <View
      style={{
        flex: flex,
        width: width,
        height: height,
      }}
    />
  );
};

export default Devider;
