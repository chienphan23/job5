import axios from "../../Setup/setupAxios";

const apiDeleteUser = async (userId) => {
  const url = `http://localhost:8080/api/users/${userId}`;
  const result = await axios.delete(url);
  return result;
};

export { apiDeleteUser };
