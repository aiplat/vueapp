import axios from 'axios';
import apis from '@/builds/apis';
import Cmapp from '@/plugins/cmapp.class';
import axiosRetryTimeout from '@/plugins/axios-retry-timeout';

const cmapp = new Cmapp();

const axiosInstance = axios.create({
  baseURL: apis.server.API,
  timeout: 20000,
  withCredentials: false,
  params: {
    mtime: new Date().valueOf(),
  },
});
axiosInstance.interceptors.request.use((rq: any) => {
  if (!rq || !rq.baseURL || !rq.url || rq.url === rq.baseURL) {
    const source = axios.CancelToken.source();
    rq.params.cancelToken = source.token;
    source.cancel('canceled axios request bug');
    console.log('canceled axios request bug');
    return false;
  }
  const tk = window.localStorage.getItem('token') || cmapp.getCookie('Oauth2Token');
  rq.headers = {
    Oauth2Token: tk,
  };
  return rq;
}, (error: any) => {
  console.log(error);
  return Promise.reject(error);
});
axiosInstance.interceptors.response.use(...axiosRetryTimeout);
axiosInstance.interceptors.response.use((rs: any) => {
  let a = null;
  if (rs && rs.status && rs.status === 200 && rs.data) {
    a = rs.data;
  }
  return a;
}, (error: any) => {
  console.log(error);
  return Promise.reject(error);
});
export default axiosInstance;
