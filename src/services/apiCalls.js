import axios from 'axios';
import { serverUrl } from '../utils/dinamcsRoutes'



async function apiLogin(user) {
  try {

    const url = `${serverUrl}login`;
    console.log(url)
    const fetchApi = await axios.post(url, user);
    const response = await fetchApi.data;

    return response;
  } catch (error) {
    return { error };
  }
}

async function apiRegister(newUser) {
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
    const { token } = JSON.parse(localStorage.getItem('user'));
    const url = `${serverUrl}customer/products`;
    const config = {
      headers: {
        authorization: token,
      },
    };

    const fetchApi = await axios.get(url, config);
    const response = await fetchApi.data;
    
    return response;
  } catch (error) {
    console.log(error.message)
    return { error };
  }
};

const getOrdersByUser = async () => {
  try {
    const { id, token } = JSON.parse(localStorage.getItem('user'));
    console.log(serverUrl)
    const url = `${serverUrl}customer/order/${id}`;
    const config = {
      headers: {
        authorization: token,
      },
    };

    const fetchAPI = await axios.get(url, config);
    const response = await fetchAPI.data;

    return response;
  } catch (error) {
    return { error };
  }
};

const getOrderById = async (id) => {
  try {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const url = `${serverUrl}customer/order/sales/${id}`;
    const config = {
      headers: {
        authorization: token,
      },
    };

    const fetchAPI = await axios.get(url, config);
    const response = await fetchAPI.data;

    return response;
  } catch (error) {
    return { error };
  }
};

const getSellers = async () => {
  try {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const url = `${serverUrl}register`;
    const config = {
      headers: {
        authorization: token,
      },
    };
    const fetchAPI = await axios.get(url, config);
    const response = await fetchAPI.data;

    return response;
  } catch (error) {
    return { error };
  }
};

const createOrder = async (order) => {
  try {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const url = `${serverUrl}customer/order`;
    const config = {
      headers: {
        authorization: token,
      },
    };

    const fetchAPI = await axios.post(url, order, config);
    const response = await fetchAPI.data;

    return response;
  } catch (error) {
    return { error };
  }
};

const apiRegisterByAdmin = async (newUser) => {
  try {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const url = `${serverUrl}adminRegister`;
    const config = {
      headers: {
        authorization: token,
      },
    };

    const fetchAPI = await axios.post(url, newUser, config);
    const response = await fetchAPI.data;
    return response;
  } catch (error) {
    return { error };
  }
};

const getUsers = async () => {
  try {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const url = `${serverUrl}adminRegister`;
    const config = {
      headers: {
        authorization: token,
      },
    };

    const fetchApi = await axios.get(url, config);
    const response = await fetchApi.data;

    return response;
  } catch (error) {
    return { error };
  }
};

const removeUser = async (id) => {
  try {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const url = `${serverUrl}adminRegister/${id}`;
    const config = {
      headers: {
        authorization: token,
      },
    };

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
