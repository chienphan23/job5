import { useGetTopJobForHome } from "./HomeAPI/useGetTopJobForHome"
import {LoadingPage} from "../../UI/LoadingPage"
import { JobCard } from "./HomeUI/JobCard"

export const ListJobHome = () => {
  const {listJobs, isLoading} = useGetTopJobForHome(6)
  if(isLoading) return <LoadingPage/>
    return(
        <>
            <div className="container" >
          <div className="row row-gap">
            {listJobs?.data?.map((i,index) => 
              <JobCard job={i} key={index}/>
            )}
          </div>
        </div>
        </>
    )
}