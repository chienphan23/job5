import axios from "../../../Setup/setupLogin"

export const apiSearchJob = async (industry, location, experience, minSalary, maxSalary, searchValue, typeJob) => {
    const formData = new FormData()
    console.log(experience)
    formData.append('industryId', industry ? industry : 0)
    formData.append('location', location)
    formData.append('experience', experience)
    formData.append('minSalary', minSalary)
    formData.append('maxSalary', maxSalary)
    formData.append('searchValue', searchValue)
    formData.append('typeJob', typeJob)

    
    const result = await axios.post(`http://localhost:8080/api/job/searchJob`, formData)
    return result;
}