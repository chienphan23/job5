import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useGetOnlyJob } from "../Job/JobAPI/useGetOnlyJob";
import { useGetEmployer } from "../Employer/EmployerAPI/useGetEmployer";
import { LoadingPage } from "../../UI/LoadingPage";

export const JobAppliedItem = ({ idJob }) => {
    const { job, isLoadingJob } = useGetOnlyJob(idJob);
    const { employerCurrent, isLoading } = useGetEmployer(job?.data.employerId);
    if ((isLoadingJob, isLoading)) return <LoadingPage />;
    return (
        <>
            <div className="card flex-row border-main background-card align-items-center mb-2">
                <img
                    className="card-img-top"
                    src={employerCurrent?.data.photo ?? "/logo.png"}
                    alt="Card image"
                    style={{ width: "80px", height: "80px" }}
                />
                <div className="card-body p-3">
                    <h6 className="card-title">
                        {job?.data.jobName ?? "Tên công việc"}
                    </h6>
                    <p className="d-block card-text m-0">
                        {employerCurrent?.data.employerName ?? "Tên công ty"}
                    </p>
                    <p className="card-text">
                        <b>{`${job?.data.minSalary} - ${job?.data.maxSalary}`}</b>
                    </p>
                    <div className="row body-info align-items-center">
                        <div className="col-lg-8 label-info mt-1 mb-1">
                            <span className="d-inline-block white-background border-main main-color-bold p-1 mr-2 mb-1 ">
                                {job?.data.location ?? "Tỉnh thành"}
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
                                <button className="btn border-main col-lg-3 col-sm-3">
                                    <i style={{}}>
                                        <FontAwesomeIcon
                                            icon={faCheck}
                                            className="me-2  main-color-bold"
                                            style={{ fontSize: "15px" }}
                                        />
                                    </i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
