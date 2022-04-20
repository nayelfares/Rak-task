import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';
import FingerPrint from '../../../../assets/icons/FingerPrint';
import SubmitButton from '../../../../components/submitButton';

import styles from './styles';

const LoginControl = ({onLoginPress, baseKey, style}: any): JSX.Element => {
  const {t} = useTranslation();
  return (
    <View style={style}>
      <SubmitButton
        title={t(`${baseKey}.loginWithUserId`)}
        style={styles.login}
        onPress={onLoginPress}
      />
      <View style={styles.quickBalanceContainer}>
        <FingerPrint />
        <Text style={styles.quickBalanceText}>
          {t(`${baseKey}.quickBalance`)}
        </Text>
      </View>
    </View>
  );
};

export default LoginControl;
