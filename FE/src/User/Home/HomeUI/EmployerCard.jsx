import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const EmployerCard = ({ employer }) => {
    return (
        <>
            <div className="col-lg-4 col-sm-6">
                <div className="card border-main" style={{ width: "100%" }}>
                    Rank:
                    <i style={{ padding: "0 10px", flex: "1" }}>
                        <FontAwesomeIcon
                            icon={faHeart}
                            className="me-2"
                            style={{ fontSize: "24px" }}
                        />
                    </i>
                    <div className="card-body text-center">
                        <img
                            src={`http://localhost:8080/api/v1/files/${employer?.photo}`}
                            style={{
                                width: "120px",
                                height: "120px",
                                objectFit: "cover",
                                borderRadius: "50%",
                            }}
                            alt="Ảnh nhà cung cấp"
                        />
                        <h5 className="card-title mt-2 line-clamp">
                            {employer.employerName}
                        </h5>
                    </div>
                </div>
            </div>
        </>
    );
};
