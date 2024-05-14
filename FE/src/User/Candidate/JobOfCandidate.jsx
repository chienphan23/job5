import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import { faCheck, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useGetOnlyJob } from "../Job/JobAPI/useGetOnlyJob";
import { LoadingPage } from "../../UI/LoadingPage";
import { useGetEmployer } from "../Employer/EmployerAPI/useGetEmployer";
import { useDeleteJobInterested } from "./CandidateAPI/useDeleteJobInterested";

export const JobOfCandidate = ({ idJob, idInterested }) => {
    // const location = useLocation();
    // const [path, setPath] = useState("");
    // useEffect(() => {
    //     setPath(location.pathname);
    // }, [location.pathname]);

    const { job, isLoadingJob } = useGetOnlyJob(idJob);
    const { employerCurrent, isLoading } = useGetEmployer(job?.data.employerId);
    let ngayHetHan = new Date(job?.data.expirationDate);
    const [soNgayConLai, setSoNgayConLai] = useState(0);
    const { deleteJobInterested } = useDeleteJobInterested();
    useEffect(() => {
        const tinhSoNgayConLai = () => {
            const ngayHienTai = new Date();
            const soNgay = Math.floor(
                (ngayHetHan - ngayHienTai) / (1000 * 3600 * 24)
            );
            setSoNgayConLai(soNgay);
        };

        tinhSoNgayConLai();

        // Cập nhật số ngày còn lại mỗi giây
        const timer = setInterval(tinhSoNgayConLai, 1000);

        return () => clearInterval(timer);
    }, [ngayHetHan]);
    async function handleDelete(id) {
        await deleteJobInterested(id);
    }
    if (isLoadingJob || isLoading) return <LoadingPage />;
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
                    <h6 className="card-title">{job?.data.jobName}</h6>
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
                            <span className="d-inline-block white-background border-main main-color-bold p-1">
                                {soNgayConLai < 0
                                    ? "Đã hết hạn tuyển dụng"
                                    : `Còn ${soNgayConLai} ngày để tuyển dụng `}
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
                                <button
                                    className="btn border-main col-lg-3 col-sm-3"
                                    onClick={() => handleDelete(idInterested)}
                                >
                                    <i style={{}}>
                                        <FontAwesomeIcon
                                            icon={faHeart}
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
