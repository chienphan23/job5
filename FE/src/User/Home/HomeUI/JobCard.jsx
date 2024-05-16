import { Link } from "react-router-dom"
import { useGetEmployer } from "../../Employer/EmployerAPI/useGetEmployer"
import { LoadingPage } from "../../../UI/LoadingPage"
export const JobCard = ({job}) => {
    const {employerCurrent, isLoading} = useGetEmployer(job?.employerId)
    if(isLoading) return <LoadingPage/>
    return(
        <>
        <div className="col-lg-4 col-sm-6 ">
        <Link to={`/job/${job.jobId}`} >
            <div style={{backgroundColor: "#d1f8ff", borderRadius: "8px", boxSizing: "border-box"}} className="card-hover">
              <div style={{alignItems: "center", display: "flex"}}>
                <img
                  className="card-img-top col-lg-3 p-2"
                  src={`http://localhost:8080/api/v1/files/${employerCurrent?.data?.photo}`}
                  alt="Card image cap"
                  style={{width: "100px",height: "100px", boxSizing: "border-box"}}
                />
                <div className=" col-lg-9 p-2">
                    <p style={{fontWeight: "bold"}} className="line-clamp">{job.jobName}</p>
                    <p style={{color: "#a9a5a5"}} className="line-clamp">{employerCurrent.data.employerName}</p>
                    <p className=" d-block rounded-lg line-clamp" ><span className=" p-2 rounded-lg bg-light" >{job.minSalary} ₫ - {job.maxSalary} ₫</span></p>

                    <p className=" d-block line-clamp mt-1" style={{}} ><span className=" p-2 rounded-lg bg-light" >{job.location}</span></p>

                </div>
              </div>
            </div>
            </Link>
            </div>
        </>
    )
}