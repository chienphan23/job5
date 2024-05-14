import { faContactBook, faEarth, faHourglass, faLocation, faLocationDot, faMoneyBill,  faStar,  faUser,  faWalking } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../Job/job.css";
import { SummaryDescJob } from "./JobUI/SummaryDescJob";
import { SummaryDescCompany } from "./JobUI/SummaryDescCompany";
import { IndexOfJob } from "./JobUI/IndexOfJob";
import { LineButtonSubmit } from "./JobUI/LineButtonSubmit";
import { CategoryListOfJob } from "./JobUI/CategoryListOfJob";
import { Link, useParams } from "react-router-dom";
import { useGetJob } from "./useGetJob";
import { LoadingPage } from "../../UI/LoadingPage";
import { formatCurrency } from "../../Utils/formatCurrency";
import { ContentDescJob } from "./JobUI/ContentDescJob";
import { CategoryTag } from "./JobUI/CategoryTag";
import { parseISO, format } from "date-fns";
import { formatDate, formatDateTime } from "../../Utils/formatDateTime";

export const DetailJob = () => {
    let {idJob} = useParams()
    const {job, arrayJobDescription, arrayJobRequirement, arrayJobBenefit ,employerOfJob ,arrayIndustriesOfJob ,isLoadingJob, isLoadingDescription ,isLoadingRequirement ,isLoadingBenefit ,isLoadingEmployer ,isLoadingIndustriesOfJob} = useGetJob(idJob)
    if(isLoadingJob || isLoadingDescription || isLoadingRequirement || isLoadingBenefit || isLoadingEmployer || isLoadingIndustriesOfJob) return <LoadingPage/>
    return(
        <>
        {console.log(employerOfJob)}
        <div className="default-background pb-5">
            <div className="container" >
                <div className="row mb-4 default-background ">
                    <div className="col-lg-8 default-background " >
                        <div className="border-main white-background " style={{padding: "20px 24px"}}>
                        <div  >
                            <h3 className="line-clamp" >{job?.data.jobName}</h3>
                        </div>

                        <div className="row mt-4">
                            <SummaryDescJob icon={faMoneyBill} title={"Mức lương"} detail={`${formatCurrency(job?.data.minSalary)} - ${formatCurrency(job?.data.maxSalary)}`}/>
                            <SummaryDescJob icon={faLocation} title={"Địa điểm"} detail={job?.data.location}/>
                            <SummaryDescJob icon={faHourglass} title={"Năm kinh nghiệm"} detail={`${job?.data.yearExperience} năm`}/>
                        </div>

                        <div className="row mt-4">
                            <div className="col-lg-12">
                            <i style={{ padding: "0 5px 0 0", fontSize: "18px" }}><FontAwesomeIcon icon={faWalking} className="me-2" /></i>
                            <span style={{fontSize: "16px", fontWeight: "600"}}>Hạn nộp hồ sơ: </span>
                            {job?.data?.acceptDate && <p>{format(parseISO(job?.data?.acceptDate),"dd/MM/yyyy")}</p>}
                            </div>
                        </div>
                        <LineButtonSubmit />
                        </div>
                    </div>
                    <div className="col-lg-4 default-background" >
                        <div className="border-main white-background" style={{ padding: "20px 24px"}}>
                            <div className="row mb-3" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                                <div >
                                    <img src="http://localhost:5173/logo.png" alt="logo" height={"75.5px"} width={"75.5px"}/>
                                </div>
                                <div style={{flex: 1, fontSize: "18px", fontWeight: "600"}} className="pl-2">
                                    {employerOfJob?.data.employerName}
                                </div>
                            </div>
                            <SummaryDescCompany icon={faStar} title={"Đánh giá"} desc={employerOfJob?.data.reviewScore}/>
                            <SummaryDescCompany icon={faLocationDot} title={"Địa chỉ"} desc={employerOfJob?.data.address}/>
                            <SummaryDescCompany icon={faContactBook} title={"Điện thoại"} desc={employerOfJob?.data.phone}/>
                            
                            <div className=" text-center mt-3" style={{width: "100%"}}>
                                <Link to={`/employerprofile/${employerOfJob?.data.employerId}`} className="btn btn-info" style={{fontWeight: "650"}}>Xem trang công ty</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row ">
                    <div className="col-lg-8 default-background">
                        <div className="border-main padding-card white-background">
                            <h5 style={{borderLeft: "7px solid #17A2B8", paddingLeft: "10px", fontWeight: "700"}}>Chi tiết tuyển dụng</h5>
                            <IndexOfJob title={"Mô tả công việc"} arrayContent={arrayJobDescription?.data ? arrayJobDescription.data : null}/>
                            <IndexOfJob title={"Yêu cần ứng viên"} arrayContent={arrayJobRequirement ? arrayJobRequirement.data : null}/>
                            <IndexOfJob title={"Quyền lợi"} arrayContent={arrayJobBenefit ? arrayJobBenefit.data : null}/>
                            <div className="row">
                                <h6 className="col-lg-12" style={{fontWeight: "500", margin: "18px 0"}}>Thời gian làm việc</h6>
                                    {console.log(job)}
                                    <ContentDescJob content={job?.data.typeId == "1" ? "Làm bán thời gian" : "Làm việc toàn thời gian"}/>
                            </div>
                            <div className="row">
                                <h6 className="col-lg-12" style={{fontWeight: "500", margin: "18px 0"}}>Địa điểm làm việc</h6>
                                
                                    <ContentDescJob  content={job?.data.address + " ,"+ job?.data.location}/>
                                
                            </div>
                            
                            <LineButtonSubmit col1={4} col2={3}/>
                        </div>
                    </div>
                    <div className="col-lg-4 default-background">
                        <div className="border-main padding-card white-background">
                            <CategoryListOfJob title={"Ngành nghề"} arrayIndustriesOfJob={arrayIndustriesOfJob}/>
                            <div className="row mb-3">
                                <h5 className="col-lg-12" style={{borderLeft: "7px solid #17A2B8", paddingLeft: "10px", fontWeight: "700", marginBottom: "18px"}}>Khu vực</h5>
                                <CategoryTag industry={job?.data.location} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}