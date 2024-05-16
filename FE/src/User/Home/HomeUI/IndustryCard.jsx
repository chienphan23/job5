import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { LoadingPage } from "../../../UI/LoadingPage"
import { useGetQuantityJobOfIndustry } from "../HomeAPI/useGetQuantityJobOfIndustry"

export const IndustryCard = ({industry}) => {
    return(
        <>
            <div className="">
              <div className="card border-main" style={{ width: "100%" }}>
                {/* <i style={{ padding: "0 10px", flex: "1" }}>
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="me-2"
                    style={{ fontSize: "24px" }}
                  />
                </i> */}
                <div className="card-body">
                  <h5 className="card-title">{industry.industryname}</h5>
                  <p className="card-text"><span style={{fontWeight: "bold"}}>{industry.quantity}</span> việc làm</p>
                </div>
              </div>
            </div>
        </>
    )
}