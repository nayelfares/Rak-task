import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const BorderedButton = ({title, style, ...props}: any): JSX.Element => {
  const {button, text} = styles;
  return (
    <TouchableOpacity style={[button, style]} {...props}>
      <Text style={text}> {title} </Text>
    </TouchableOpacity>
  );
};

export default BorderedButton;
