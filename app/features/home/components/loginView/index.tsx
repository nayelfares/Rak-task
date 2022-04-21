import React, {useEffect, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {KeyboardAvoidingView, Platform, Text, View} from 'react-native';
import RNLocation from 'react-native-location';
import {Point} from '../../../../classes/classes';

import Devider from '../../../../components/Devider';
import EditText from '../../../../components/editText';
import SubmitButton from '../../../../components/submitButton';
import useLocation from '../../../../hooks/useLocation';
import {
  os ,
  deviceName,
  macAddress,
  imei,
  ipAddress,
} from '../../../../hooks/DeviceInfo';
import styles from './styles';

RNLocation.configure({
  distanceFilter: 500,
});
const LoginView = ({showLoginView, baseKey, style}: any): JSX.Element => {
  const {t} = useTranslation();
  const {getCurrentLocation, point}: any = useLocation();
  const [selectedLocation, setSelectedLocation] = useState<Point>(point);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      userId: '',
      password: '',
    },
  });

  useEffect(() => {
    getCurrentLocation();
  }, [getCurrentLocation]);
  useEffect(() => {
    setSelectedLocation(point);
  }, [point]);
  const onSubmit = (data: any) => {
    return console.log(data);
  };
  if (Platform.OS === 'ios') {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={style}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <EditText
              autoFocus={showLoginView}
              placeholder={t(`${baseKey}.userId`)}
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="userId"
        />
        {errors.userId && <Text style={styles.error}>This is required.</Text>}
        <Devider height={20} />
        <Controller
          control={control}
          rules={{
            maxLength: 100,
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <EditText
              placeholder={t(`${baseKey}.password`)}
              isPassword={true}
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="password"
        />
        {errors.password && <Text style={styles.error}>This is required.</Text>}
        <SubmitButton
          style={styles.login}
          title="Submit"
          onPress={handleSubmit(onSubmit)}
        />
      </KeyboardAvoidingView>
    );
  } else {
    return (
      <View style={style}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <EditText
              autoFocus={showLoginView}
              placeholder={t(`${baseKey}.userId`)}
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="userId"
        />
        {errors.userId && <Text style={styles.error}>This is required.</Text>}
        <Devider height={20} />
        <Controller
          control={control}
          rules={{
            maxLength: 100,
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <EditText
              placeholder={t(`${baseKey}.password`)}
              isPassword={true}
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="password"
        />
        {errors.password && <Text style={styles.error}>This is required.</Text>}
        <SubmitButton
          style={styles.login}
          title="Submit"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    );
  }
};

export default LoginView;
