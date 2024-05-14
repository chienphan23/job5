import axios from "../../Setup/setupAxios"
import { apiAddIndustry } from "./apiIndustry"

const apiJob = async (formdata, arrayDescription, arrayBenefit, arrayRequirement ,arrayIndustryId) => {
    const result = await axios.post("http://localhost:8080/api/job/create", formdata)
    let id = result.data.jobId
    
    // add JobDescription
    for (const i of arrayDescription) {
        let formdataNew = new FormData();
        formdataNew.append("jobId", id);
        formdataNew.append("description", i);
        await axios.post("http://localhost:8080/api/jobdecription/create", formdataNew);
    }
    for (const i of arrayBenefit) {
        let formdataNew = new FormData();
        formdataNew.append("jobId", id);
        formdataNew.append("description", i);
        await axios.post("http://localhost:8080/api/jobbenefit/create", formdataNew);
    }
    for (const i of arrayRequirement) {
        let formdataNew = new FormData();
        formdataNew.append("jobId", id);
        formdataNew.append("description", i);
        await axios.post("http://localhost:8080/api/jobrequirement/create", formdataNew);
    }

    await apiAddIndustry(arrayIndustryId, id)
    return result
}

export {apiJob}
