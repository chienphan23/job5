import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { JobCard } from "./HomeUI/JobCard";
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom';
import { ProvinceNameSelect } from "../../UI/ProvinceNameSelect"
import { useEffect, useState } from "react";
import { ExperienceSelect } from "./HomeUI/ExperienceSelect";
import { SalarySelect } from "./HomeUI/SalarySelect";
import { IndustrySelect } from "../../UI/IndustrySelect";
import { useGetIndustry } from "../../API/useGetIndustry";
import { PageNotFound } from "../../UI/PageNotFound";
import { IndustryHomeSelect } from "../../UI/IndustryHomeSelect";
import { useQueryClient } from "@tanstack/react-query";
import { JobTypeSelect } from "../../UI/JobTypeSelect";
const supColor = "#f6f6f6";

export const SearchJobHome = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [provinceName, setProvinceName] = useState('')
  const [minSalary, setMinSalary] = useState(0);
  const [maxSalary, setMaxSalary] = useState(0);
  const [experience, setExperience] = useState(0)
  const [searchKey, setSearchKey] = useState("")
  const { listIndustry, isLoading } = useGetIndustry()
  const [industry, setIndustry] = useState(0)
  const [type, setType] = useState(0)
  


  const location = useLocation();
  const [path, setPath] = useState("")

  const handleOnclickSearch = () => {
      setSearchParams({provinceParam : provinceName, experienceParam: experience, minSalaryParam: minSalary, maxSalaryParam: maxSalary, searchKeyParam: searchKey, industryParam: industry, typeParam: type})
      
  }

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

  if (isLoading) return <PageNotFound />
  return (
    <div>

      <section
        className="section-main"
        style={{ backgroundColor: location.pathname.match(/\/job\//) || location.pathname.match(/\/home\//) ? "#f6f6f6" : "white" }}
      >
        <div className="container ">
          <div className="row ">
            <div className="col-lg-3 ">
              <div className="form-group">
                <ProvinceNameSelect provinceName={provinceName} setProvinceName={setProvinceName} />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="form-group">
                <ExperienceSelect experience={experience} setExperience={setExperience} />
              </div>
            </div>

            <div className="col-lg-3">
              <div className="form-group">
                <SalarySelect minSalary={minSalary} setMinSalary={setMinSalary} maxSalary={maxSalary} setMaxSalary={setMaxSalary} />
              </div>
            </div>

            <div className="col-lg-3">
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
                  {path !== "/search-page" ? <Link to={`/search-page?provinceParam=${provinceName}&minSalaryParam=${minSalary}&maxSalaryParam=${maxSalary}&industryParam=${industry}&experienceParam=${experience}&searchKeyParam=${searchKey}&typeParam=${type}`}>
                    <button className="btn btn-outline-info" type="button" >
                      <i style={{ padding: "0 10px" }}>
                        <FontAwesomeIcon icon={faSearch} className="me-2" />
                      </i>
                    </button>
                  </Link> :
                    <button className="btn btn-outline-info" type="button" onClick={handleOnclickSearch}>
                      <i style={{ padding: "0 10px" }}>
                        <FontAwesomeIcon icon={faSearch} className="me-2" />
                      </i>
                    </button>
                  }
                  {/* nếu path khác => làm thẻ link, nếu path giống thì dùng useSearchParam đưa lên url */}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
          <div className="col-lg-1"></div>
            <div className="col-lg-4">
              <div className="form-group">
                <IndustryHomeSelect listIndustry={listIndustry} industry={industry} setIndustry={setIndustry} />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="form-group">
                <JobTypeSelect type={type} setType={setType} />
              </div>
            </div>
          </div>
        </div>


      </section>

    </div>
  );
};
