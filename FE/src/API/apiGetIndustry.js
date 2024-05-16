import axios from "../Setup/setupAxios"

const apiGetIndustry = async () => {
    const result = await axios.get("http://localhost:8080/api/industry");
    return result;
}

export{apiGetIndustry}