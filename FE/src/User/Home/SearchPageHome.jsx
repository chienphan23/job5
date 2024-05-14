import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { useGetSearchJob } from "./HomeAPI/useGetSearchJob";
import { LoadingPage } from "../../UI/LoadingPage";

export const SearchPageHome = () => {
    const [searchParams, setSearchParams] = useSearchParams();
  const [provinceName, setProvinceName] = useState('')
  const [minSalary, setMinSalary] = useState(0);
  const [maxSalary, setMaxSalary] = useState(0);
  const [experience, setExperience] = useState(0)
  const [industry, setIndustry] = useState(0)
  const [searchKey, setSearchKey] = useState("")
  const [form, setForm] = useState({})
  const location = useLocation();
  const {listJobs, isLoading} = useGetSearchJob(form)
  

    const [path, setPath] = useState("")
    useEffect(() => {
        setPath(location.pathname)
        if(path === "/search-page"){
          setProvinceName(searchParams.get('provinceParam'))
          setExperience(searchParams.get('experienceParam'))
          setMinSalary(searchParams.get('minSalaryParam'))
          setMaxSalary(searchParams.get('maxSalaryParam'))
          setSearchKey(searchParams.get('searchKeyParam'))
          setIndustry(searchParams.get('industryParam'))

          const formData = new FormData()
          formData.append('industryId',industry)
          formData.append('location', provinceName)
          formData.append('minSalary', minSalary)
          formData.append('maxSalary', maxSalary)
          formData.append('searchValue', searchKey)
          setForm(formData)
        }
      }, [industry,location.pathname,maxSalary,minSalary,searchKey,provinceName,path,searchParams]);
      if(isLoading) return <LoadingPage/>
    return(
        <>
        {console.log(listJobs)}
            a
        </>
    )
} 