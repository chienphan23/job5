import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const IndustryCard = () => {
    return(
        <>
            <div className="col-lg-4 col-sm-6">
              <div className="card border-main" style={{ width: "100%" }}>
                <i style={{ padding: "0 10px", flex: "1" }}>
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="me-2"
                    style={{ fontSize: "24px" }}
                  />
                </i>
                <div className="card-body">
                  <h5 className="card-title">Marketing</h5>
                  <p className="card-text">Quantity</p>
                </div>
              </div>
            </div>
        </>
    )
}