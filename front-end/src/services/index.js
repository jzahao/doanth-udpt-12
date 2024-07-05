import axios from "../axios.js";

const p = "http://localhost:8080/api";

export const login = async (email, password) => {
  return axios.post(`${p}/identity/auth/token`, { email, password });
};

export const introspect = async (token) => {
  return axios.post(`${p}/identity/auth/introspect`, { token });
};

export const getUserInfo = async (token) => {
  return axios({
    method: "get",
    url: `${p}/identity/users/my-info`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const logout = async (token) => {
  return axios.post(`${p}/identity/auth/logout`, { token });
};

export const getMyInfoCustomer = async (token) => {
  return axios.get(`${p}/customer/my-info`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateCustomerInfo = async (token, payload) => {
  return axios({
    method: "put",
    url: `${p}/customer/${payload.id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: payload,
  });
};

export const getListEvents = async () => {
  return axios({
    method: "get",
    url: `${p}/event/get`,
  });
};

export const getEvent = async (id) => {
  return axios({
    method: "get",
    url: `${p}/event/get/${id}`,
  });
};

export const getEnterprise = async (email) => {
  return axios({
    method: "get",
    url: `${p}/enterprise/get-enterprise/${email}`,
  });
};
