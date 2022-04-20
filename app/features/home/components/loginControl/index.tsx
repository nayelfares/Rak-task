import React from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import SubmitButton from '../../../../components/submitButton';

import styles from './styles';

const LoginControl = ({baseKey, style}: any): JSX.Element => {
  const {t} = useTranslation();
  return (
    <View style={style}>
      <SubmitButton
        title={t(`${baseKey}.loginWithUserId`)}
        style={styles.login}
      />
    </View>
  );
};

export default LoginControl;
