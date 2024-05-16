import axios from "../../../Setup/setupAxios";

const apiGetEmployer = async (id) => {
    const result = await axios.get(`http://localhost:8080/api/employer/${id}`);
    return result;
};

export { apiGetEmployer };
