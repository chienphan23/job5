import axios from "../../../Setup/setupLogin"

<<<<<<< HEAD
export const apiSearchJob = async (industry, location, experience, minSalary, maxSalary, searchValue, typeJob) => {
    const formData = new FormData()
    formData.append('industryId', industry ? industry : 0)
    formData.append('location', location)
    // value năm kinh nghiệm = 6 đại diện cho không có kinh nghiệm
    formData.append('experience', experience == 6 ? 0 : experience)
    formData.append('minSalary', minSalary)
    formData.append('maxSalary', maxSalary)
    formData.append('searchValue', searchValue)
    formData.append('typeJob', typeJob)

    console.log("i" + industry + "\nl" + location + "\nex" + experience + "\nmin" + minSalary +"\nmax" + maxSalary + "\nsearch" + searchValue + "\ntype" + typeJob)

    
=======
export const apiSearchJob = async (formData) => {
>>>>>>> cb8abfcd526acec9924c808f0c58d2f994662a1f
    const result = await axios.post(`http://localhost:8080/api/job/searchJob`, formData)
    return result;
}