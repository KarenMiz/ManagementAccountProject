import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL + "/users";

export const login = async (userLogin) => {
  try {
    const response = await axios.post(apiUrl + "/login", userLogin);
    const data = response.data;
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const signup = async (normalizedUser) => {
  try {
    const { data } = await axios.post(apiUrl, normalizedUser);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getUserData = async (id) => {
  try {
    const { data } = await axios.get(apiUrl + "/" + id);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

