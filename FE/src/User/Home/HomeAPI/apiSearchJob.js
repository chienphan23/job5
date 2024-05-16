import axios from "../../../Setup/setupLogin"

export const apiSearchJob = async (formData) => {
    const result = await axios.post(`http://localhost:8080/api/job/searchJob`, formData)
    return result;
}