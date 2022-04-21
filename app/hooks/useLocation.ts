import {useState} from 'react';
import RNLocation from 'react-native-location';
import {Point} from '../classes/classes';

const useLocation = (): any => {
  const [error, setError] = useState('');
  const [point, setPoint] = useState(new Point(25.0072013, 55.2552086));
  const getCurrentLocation = async () => {
    let permission = await RNLocation.checkPermission({
      ios: 'whenInUse', // or 'always'
      android: {
        detail: 'coarse', // or 'fine'
      },
    });
    if (!permission) {
      permission = await RNLocation.requestPermission({
        ios: 'whenInUse',
        android: {
          detail: 'coarse',
          rationale: {
            title: 'We need to access your location',
            message: 'We use your location to show where you are on the map',
            buttonPositive: 'OK',
            buttonNegative: 'Cancel',
          },
        },
      });
      if (permission) {
        const location = await RNLocation.getLatestLocation({timeout: 100});
        if (location === undefined) {
          setError('Location not available');
        } else {
          setPoint(new Point(location!!.latitude, location!!.longitude));
        }
      } else {
        setError('Permission not granted');
      }
    } else {
      const location = await RNLocation.getLatestLocation({timeout: 100});
      if (location === undefined) {
        setError('Location not available');
      } else {
        setPoint(new Point(location!!.latitude, location!!.longitude));
      }
    }
  };
  return {getCurrentLocation, point, error};
};

export default useLocation;
