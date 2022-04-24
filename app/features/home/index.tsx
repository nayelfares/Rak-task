import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Devider from '../../components/Devider';
import {useLoginSelector} from '../onboarding/store/selectors';

import {styles} from './style';

function Home() {
  const {loginRes} = useLoginSelector();
  console.log(loginRes);

  return (
    <SafeAreaView style={styles.screen}>
      {loginRes !== undefined ? (
        Object.keys(loginRes).map((item: any) => {
          if (item !== 'password') {
            return (
              <>
                <View style={styles.row}>
                  <Text style={styles.title}> {item}</Text>
                  <Text style={styles.dev}> :</Text>
                  <Text style={styles.description}>{loginRes[item]}</Text>
                </View>
                <Devider height={16} />
              </>
            );
          }
        })
      ) : (
        <View />
      )}
    </SafeAreaView>
  );
}
export default Home;
