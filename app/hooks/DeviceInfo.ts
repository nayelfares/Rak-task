import {useEffect, useState} from 'react';
import {Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';

export const useDeviceInfo = (): any => {
  const [deviceName, setDeviceName] = useState('');
  const [macAddress, setMacAddress] = useState('');
  const [imei, setImei] = useState('');
  const [ipAddress, setIpAddress] = useState('');
  const os = Platform.OS;
  const getData = async () => {
    setDeviceName(await DeviceInfo.getDeviceName());
    setMacAddress(await DeviceInfo.getMacAddress());
    setImei(await DeviceInfo.getSerialNumber());
    setIpAddress(await DeviceInfo.getIpAddress());
  };
  useEffect(() => {
    getData();
  }, []);
  return [os, deviceName, macAddress, imei, ipAddress];
};
