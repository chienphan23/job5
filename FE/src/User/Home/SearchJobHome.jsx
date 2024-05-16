import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
<<<<<<< HEAD
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { ProvinceNameSelect } from "../../UI/ProvinceNameSelect"
=======
import {  faSearch } from "@fortawesome/free-solid-svg-icons";
import { JobCard } from "./HomeUI/JobCard";
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom';
import {ProvinceNameSelect} from "../../UI/ProvinceNameSelect"
>>>>>>> cb8abfcd526acec9924c808f0c58d2f994662a1f
import { useEffect, useState } from "react";
import { ExperienceSelect } from "./HomeUI/ExperienceSelect";
import { SalarySelect } from "./HomeUI/SalarySelect";
import { useGetIndustry } from "../../API/useGetIndustry";
import { IndustryHomeSelect } from "../../UI/IndustryHomeSelect";
<<<<<<< HEAD
import { JobTypeSelect } from "../../UI/JobTypeSelect";
import { LoadingPage } from "../../UI/LoadingPage";
=======
import { useQueryClient } from "@tanstack/react-query";
const supColor = "#f6f6f6";
>>>>>>> cb8abfcd526acec9924c808f0c58d2f994662a1f

export const SearchJobHome = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [provinceName, setProvinceName] = useState('')
  const [minSalary, setMinSalary] = useState(0);
  const [maxSalary, setMaxSalary] = useState(0);
  const [experience, setExperience] = useState(0)
  const [searchKey, setSearchKey] = useState("")
  const {listIndustry, isLoading} = useGetIndustry()
  const [industry, setIndustry] = useState(0)
  const queryClient = useQueryClient();


  const location = useLocation();
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
        }

      }, [location.pathname, path, searchParams]);

<<<<<<< HEAD
  useEffect(() => {
    setPath(location.pathname)
    if (path === "/search-page") {
      setProvinceName(searchParams.get('provinceParam'))
      setExperience(searchParams.get('experienceParam'))
      setMinSalary(searchParams.get('minSalaryParam'))
      setMaxSalary(searchParams.get('maxSalaryParam'))
      setSearchKey(searchParams.get('searchKeyParam'))
      setIndustry(searchParams.get('industryParam'))
      setType(searchParams.get('typeParam'))
    }

  }, [location.pathname, path, searchParams]);

  if (isLoading) return <LoadingPage />
=======
  if(isLoading) return <PageNotFound/>
>>>>>>> cb8abfcd526acec9924c808f0c58d2f994662a1f
  return (
    <div>

      <section
        className="section-main"
        style={{ backgroundColor: location.pathname.match(/\/job\//) || location.pathname.match(/\/home\//) ? "#f6f6f6" : "white"}}
      >
        <div className="container ">
          <div className="row ">
            <div className="col-lg-3 ">
              <div className="form-group">
                <ProvinceNameSelect provinceName={provinceName} setProvinceName={setProvinceName}/>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="form-group">
                <ExperienceSelect  experience={experience} setExperience={setExperience}/>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="form-group">
                <SalarySelect minSalary={minSalary} setMinSalary={setMinSalary} maxSalary={maxSalary} setMaxSalary={setMaxSalary}/>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control outline-input border-select"
                  placeholder="Nhập từ khoá tìm kiếm"
                  style={{ fontSize: "16px" }}
                  onChange={e => setSearchKey(e.target.value)}
                />
                <div
                  className="input-group-append"
                  style={{ backgroundColor: "white" }}
                >
                  <Link to={`/search-page?provinceParam=${provinceName}&minSalaryParam=${minSalary}&maxSalaryParam=${maxSalary}&industryParam=${industry}&experienceParam=${experience}&searchKeyParam=${searchKey}`}>
                  <button className="btn btn-outline-info" type="button" onClick={() => 
                                queryClient.invalidateQueries({
                                  queryKey: ["listJobResult"]
                              })}>
                    <i style={{ padding: "0 10px" }}>
                      <FontAwesomeIcon icon={faSearch} className="me-2" />
                    </i>
                  </button>
                  </Link>
                  {/* nếu path khác => làm thẻ link, nếu path giống thì dùng useSearchParam đưa lên url */}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
              <div className="col-lg-4">
                <div className="form-group">
                  <IndustryHomeSelect listIndustry={listIndustry} industry={industry} setIndustry={setIndustry}/>
                </div>
              </div>
          </div>
        </div>

        
      </section>
   
    </div>
  );
};
