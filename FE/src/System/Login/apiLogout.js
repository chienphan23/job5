import axios from "axios";
import Cookies from "js-cookie";

const apiPostLogOut = async () => {
  const formData = new FormData();
  const jwt = Cookies.get("AUTH_TOKEN");
  formData.append("token", jwt);
  const result = await axios.post(
    "http://localhost:8080/auth/logout",
    formData
  );
  if (result !== null) {
    // const user = await axios.get("http://localhost:8080/api/Users")
    console.log(result);
  }
  return null;
};
export { apiPostLogOut };
