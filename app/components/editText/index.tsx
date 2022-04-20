import React, {useState} from 'react';
import {Text} from 'react-native';
import {TextInput, View} from 'react-native';
import styles from './styles';

const EditText = ({
  autoFocus = false,
  placeholder,
  keyboardType,
  isPassword = false,
  onBlur,
  ...props
}: any): JSX.Element => {
  const [focus, setFocus] = useState(false);
  const {container, ph, line, text} = styles;
  return (
    <View style={container}>
      {focus ? <Text style={ph}>{placeholder}</Text> : <View style={ph} />}
      <TextInput
        autoFocus={autoFocus}
        keyboardType={keyboardType}
        placeholder={focus ? '' : placeholder}
        secureTextEntry={isPassword}
        style={text}
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => {
          onBlur();
          setFocus(false);
        }}
        {...props}
      />
      <View style={line} />
    </View>
  );
};

export default EditText;
