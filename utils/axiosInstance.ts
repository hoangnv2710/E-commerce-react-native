import axios from "axios";


const axiosInstance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});

axiosInstance.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error

  if (error?.response?.data?.message) {
    console.log(error.response);
    return error.response;
    // return message;
  }

  return Promise.reject(error);
});

export default axiosInstance

