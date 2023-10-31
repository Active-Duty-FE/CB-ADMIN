import {
  AxiosRequestConfig,
  CreateAxiosDefaults,
  InternalAxiosRequestConfig,
} from "axios";

interface Interceptors<T = any> {
  onRequestFulfilled?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig;
  onRequestRejected?: (err: any) => any;
  onResponseFulfilled?: (res: T) => T;
  onResponseRejected?: (err: any) => any;
}
interface InterceptorsOmitHeaders<T = any> {
  onRequestFulfilled?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  onRequestRejected?: (err: any) => any;
  onResponseFulfilled?: (res: T) => T;
  onResponseRejected?: (err: any) => any;
}

export interface AppInternalAxiosRequestConfig<T = any>
  extends InternalAxiosRequestConfig {
  interceptors?: Interceptors<T>;
}

export interface AppCreateAxiosDefaults<T = any> extends CreateAxiosDefaults {
  interceptors?: Interceptors<T>;
}

export interface AppAxiosRequestConfig<T = any> extends AxiosRequestConfig {
  interceptors?: InterceptorsOmitHeaders<T>;
}
