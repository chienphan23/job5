import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export const JobOfCompany = ({employer, job}) => {
    const location = useLocation();
    const [path, setPath] = useState("");
    useEffect(() => {
        setPath(location.pathname);
    }, [location.pathname]);
    return (
        <>
            {console.log(path)}
            <div className="card flex-row border-main background-card align-items-center mb-4">
                <img
                    className="card-img-top"
                    src={employer?.photo ?? "/logo.png"}
                    alt="Card image"
                    style={{ width: "100px", height: "100px" }}
                />
                <div className="card-body">
                    <h4 className="card-title">
                        {job?.jobName ?? "Công việc ..."}
                    </h4>
                    <p className="d-block card-text">
                        {employer?.employerName ?? "Tên công ty"}
                    </p>
                    <p className="card-text">
                        {console.log(job)}
                        <b>{`${job?.minSalary ?? "2.000.000"} - ${
                            job?.maxSalary ?? "3.000.000"
                        }`}</b>
                    </p>
                    <br />
                    <div className="row body-info align-items-center">
                        <div className="col-lg-8 label-info mt-3 mb-2">
                            <span className="d-inline-block white-background border-main main-color-bold p-1 mr-2 mb-1 ">
                                {employer?.provinceName ?? "Tỉnh thành"}
                            </span>
                            <span className="d-inline-block white-background border-main main-color-bold p-1">
                                {"Còn bao nhiêu ngày để ứng tuyển"}
                            </span>
                        </div>
                        <div className="col-lg-4 mt-1">
                            <div className="row justify-content-around align-items-center row-gap">
                                <Link
                                    to={"/job/1"}
                                    className="btn btn-info col-lg-8 col-sm-7"
                                    style={{ fontSize: "14px" }}
                                >
                                    Xem chi tiết
                                </Link>
                                {path === "/job-applied" ? (
                                    <span>Đã ứng tuyển</span>
                                ) : (
                                    <button className="btn border-main col-lg-3 col-sm-3">
                                        <i style={{}}>
                                            <FontAwesomeIcon
                                                icon={faHeart}
                                                className="me-2  main-color-bold"
                                                style={{ fontSize: "15px" }}
                                            />
                                        </i>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
