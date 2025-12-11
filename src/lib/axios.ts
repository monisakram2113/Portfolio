import axios, { AxiosRequestConfig } from 'axios';

const axiosInstance = async (
  path: string,
  options: AxiosRequestConfig = {}
) => {
  const baseURL = process.env.API_ENDPOINT || 'https://api.example.com';

  const isFormData = options.data instanceof FormData;

  try {
    const response = await axios({
      url: `${baseURL}${path}`,
      ...options,
      headers: {
        ...(isFormData
          ? {} // Let Axios set 'Content-Type' automatically for FormData
          : { 'Content-Type': 'application/json' }),
        ...(options.headers || {}),
      },
    });

    return response;
  } catch (error: any) {
    console.error('Axios error:', error?.response || error);
    throw error;
  }
};

export default axiosInstance;
