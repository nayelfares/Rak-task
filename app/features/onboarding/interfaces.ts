export interface ResponseGenerator {
  data?: object;
  message?: string;
  status?: number | undefined;
  success?: boolean;
}

export interface LoginModel {
  userId: string;
  password: string;
  os: string;
  deviceName: string;
  macAddress: string;
  imei: string | null | undefined;
  ipAddress: string;
  longtude: string;
  latitude: string;
}

export const successResponse = [200, 201];
export const failedResponse = [400, 401];
