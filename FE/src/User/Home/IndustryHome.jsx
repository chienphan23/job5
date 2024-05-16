import { useGetIndustriesForHome } from "./HomeAPI/useGetIndustriesForHome";
import { IndustryCard } from "./HomeUI/IndustryCard";
import {LoadingPage} from "../../UI/LoadingPage" 
import { Link } from "react-router-dom";
const mainColor = "#7ed9e7";
export const IndustryHome = () => {
  const {listIndustries, isLoading} = useGetIndustriesForHome()

  if(isLoading) return <LoadingPage/>
  return (
    <>
    {console.log(listIndustries)}
      <section
        className="section-main mt-5"
        style={{ backgroundColor: `${mainColor}` }}
      >
        <div className="container">
          <div className="row row-gap">
            <div className="col-lg-12">
              <h2
                style={{
                  textAlign: "center",
                  color: "#2B3940",
                  fontWeight: "800",
                }}
              >
                Danh mục việc làm
              </h2>
            </div>
          </div>

          <div className="row mt-5 row-gap">
            
            {listIndustries?.data?.map((industry, index) => 
            <Link style={{display: "block"}} className="col-lg-4 main-color-bold" to={`/search-page?provinceParam=''&minSalaryParam=0&maxSalaryParam=0&industryParam=${industry.industryId}&experienceParam=0&searchKeyParam=''&typeParam=0`}>
               <IndustryCard industry={industry} key={index}/>
              </Link> 
            )}
          </div>
        </div>
      </section>
    </>
  );
};
