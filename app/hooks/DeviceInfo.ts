import {Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';

export const os = Platform.OS;
export const deviceName = DeviceInfo.getDeviceName;
export const macAddress = DeviceInfo.getMacAddress;
export const imei = DeviceInfo.getSerialNumber;
export const ipAddress = DeviceInfo.getIpAddress;