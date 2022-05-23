import axios from 'axios';
import { serverUrl, serverUrlFront } from '../utils/dinamcsRoutes';

const globalApiVariables = () => {
  const { id: userId, token } = JSON.parse(localStorage.getItem('user'));
  
  const config = {
    headers: {
      authorization: token,
    },
  };
  return { userId, config };
}

const expireTokenCaseError = ({ message }) => {
  if (message === 'Request failed with status code 401') {
    localStorage.clear()

    return window.location.replace(serverUrlFront)
  }
}

const apiLogin = async (user) => {
  try {
    const url = `${serverUrl}login`;
    const fetchApi = await axios.post(url, user);
    const response = await fetchApi.data;

    return response;
  } catch (error) {
    return { error };
  }
}

const apiRegister = async (newUser) => {
  try {
    const url = `${serverUrl}register`;

    const fetchApi = await axios.post(url, newUser);
    const response = await fetchApi.data;

    return response;
  } catch (error) {
    return { error };
  }
}

const getProducts = async () => {
  try {
    const { config } = globalApiVariables();
    const url = `${serverUrl}customer/products`;

    const fetchApi = await axios.get(url, config);
    const response = await fetchApi.data;

    return response;
  } catch (error) {
    console.log(error)
    return expireTokenCaseError(error);
  }
};

const getOrdersByUser = async () => {
  try {
    const { userId, config } = globalApiVariables();
    const url = `${serverUrl}customer/order/${userId}`;

    const fetchAPI = await axios.get(url, config);
    const response = await fetchAPI.data;

    return response;
  } catch (error) {
    return { error };
  }
};

const getOrderById = async (id) => {
  try {
    const { config } = globalApiVariables();
    const url = `${serverUrl}customer/order/sales/${id}`;

    const fetchAPI = await axios.get(url, config);
    const response = await fetchAPI.data;

    return response;
  } catch (error) {
    return { error };
  }
};

const getSellers = async () => {
  try {
    const { config } = globalApiVariables();
    const url = `${serverUrl}register`;
    const fetchAPI = await axios.get(url, config);
    const response = await fetchAPI.data;

    return response;
  } catch (error) {
    return { error };
  }
};

const createOrder = async (order) => {
  try {
    const { config } = globalApiVariables();
    const url = `${serverUrl}customer/order`;

    const fetchAPI = await axios.post(url, order, config);
    const response = await fetchAPI.data;

    return response;
  } catch (error) {
    return { error };
  }
};

const apiRegisterByAdmin = async (newUser) => {
  try {
    const { config } = globalApiVariables();
    const url = `${serverUrl}adminRegister`;

    const fetchAPI = await axios.post(url, newUser, config);
    const response = await fetchAPI.data;
    return response;
  } catch (error) {
    return { error };
  }
};

const getUsers = async () => {
  try {
    const { config } = globalApiVariables();
    const url = `${serverUrl}adminRegister`;

    const fetchApi = await axios.get(url, config);
    const response = await fetchApi.data;

    return response;
  } catch (error) {
    return { error };
  }
};

const removeUser = async (id) => {
  try {
    const { config } = globalApiVariables();
    const url = `${serverUrl}adminRegister/${id}`;

    const fetchApi = await axios.post(url, config);
    const response = await fetchApi.data;

    return response;
  } catch (error) {
    return { error };
  }
};

export {
  apiLogin,
  apiRegister,
  getProducts,
  getOrdersByUser,
  getOrderById,
  getSellers,
  createOrder,
  apiRegisterByAdmin,
  getUsers,
  removeUser,
};
