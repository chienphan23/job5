import axios from "../../Setup/setupAxios";

const apiBlockUser = async (userId) => {
  const url = `http://localhost:8080/api/users/lock/${userId}`;
  const result = await axios.post(url);
  return result;
};

export { apiBlockUser };
