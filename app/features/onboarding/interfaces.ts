export interface ResponseGenerator {
  data?: object;
  message?: string;
  status?: number | undefined;
  success?: boolean;
}

export const successResponse = [200, 201];
export const failedResponse = [400, 401];
