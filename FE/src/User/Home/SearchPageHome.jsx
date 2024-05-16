import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { useGetSearchJob } from "./HomeAPI/useGetSearchJob";
import { LoadingPage } from "../../UI/LoadingPage";
import { useQueryClient } from "@tanstack/react-query";
import { JobCard } from "./HomeUI/JobCard";
import { SearchJobHome } from "./SearchJobHome";

export const SearchPageHome = () => {
  const queryClient = useQueryClient();
    const [searchParams, setSearchParams] = useSearchParams();
  // const [provinceName, setProvinceName] = useState('')
  // const [minSalary, setMinSalary] = useState(0);
  // const [maxSalary, setMaxSalary] = useState(0);
  // const [experience, setExperience] = useState(0)
  // const [industry, setIndustry] = useState(0)
  // const [searchKey, setSearchKey] = useState("")
  const location = useLocation();
  const {listJobs, isLoading} = useGetSearchJob({
      industry: searchParams.get('industryParam'),
      location: searchParams.get('provinceParam'),
      experience: searchParams.get('experienceParam') ? searchParams.get('experienceParam') : -1,
      minSalary: searchParams.get('minSalaryParam'),
      maxSalary: searchParams.get('maxSalaryParam'),
      searchValue: searchParams.get('searchKeyParam'),
      typeJob: searchParams.get("typeParam") === -1 ? 0 : searchParams.get("typeParam")
    })
  

    const [path, setPath] = useState("")
    useEffect(() => {
        setPath(location.pathname)
        if(path === "/search-page"){
          queryClient.invalidateQueries({
            queryKey: ["listJobResult"]
          })
        }
      }, [location,location.pathname,path,searchParams, queryClient]);
      if(isLoading) return <LoadingPage/>
    return(
        <>
        <SearchJobHome/>
        {console.log(listJobs)}
        {listJobs?.data.map(
          (job) => 
          <div style={{marginBottom: "50px"}}><JobCard job={job} key={job.jobId}/></div>
        )
        }
        </>
    )
} 