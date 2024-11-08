declare type APIError<T = any> = {
  message: string;
  enMessage?: string;
  data?: T;
  code: number;
  detail?: any;
};
