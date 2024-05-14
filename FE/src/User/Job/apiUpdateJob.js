import axios from "../../Setup/setupAxios"
import { apiAddIndustry } from "./apiIndustry"

export const apiUpdateJob = async (idJob,formdata, arrayDescription, arrayBenefit,arrayRequirement, arrayIndustryId) => {
    console.log(idJob)
    const result = await axios.put(`http://localhost:8080/api/job/update/${idJob}`, formdata)

    const deleteAllDescription = await axios.delete(`http://localhost:8080/api/jobdecription/deleteByJobId/${idJob}`)
    for (const i of arrayDescription) {
        let formdataNew = new FormData();
        formdataNew.append("jobId", idJob);
        formdataNew.append("description", i);
        await axios.post("http://localhost:8080/api/jobdecription/create", formdataNew);
    }

    const deleteAllRequirement = await axios.delete(`http://localhost:8080/api/jobrequirement/deleteByJobId/${idJob}`)
    for (const i of arrayRequirement) {
        let formdataNew = new FormData();
        formdataNew.append("jobId", idJob);
        formdataNew.append("description", i);
        await axios.post("http://localhost:8080/api/jobrequirement/create", formdataNew);
    }

    const deleteAllBenefit = await axios.delete(`http://localhost:8080/api/jobbenefit/deleteByJobId/${idJob}`)
    for (const i of arrayBenefit) {
        let formdataNew = new FormData();
        formdataNew.append("jobId", idJob);
        formdataNew.append("description", i);
        await axios.post("http://localhost:8080/api/jobbenefit/create", formdataNew);
    }
    const deleteAllIndustriesOfJob = await axios.delete(`http://localhost:8080/api/jobsIndustries/deleteByJobId/${idJob}`)
    await apiAddIndustry(arrayIndustryId, idJob)
    return result
}