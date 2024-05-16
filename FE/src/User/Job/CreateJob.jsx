import { useEffect, useState } from "react"
import { apiJob } from "./apiJob"
import { Link, useNavigate } from "react-router-dom"
import {useGetIndustry} from "../../API/useGetIndustry"
import { JobInformation } from "./JobUI/JobInformation"
import { apiAddIndustry } from "./apiIndustry"
import { ProvinceNameSelect } from "../../UI/ProvinceNameSelect"
import { IndustrySelect } from "../../UI/IndustrySelect"
import { LoadingPage } from "../../UI/LoadingPage"
import { InputGroup } from "../../UI/InputGroup"
import { useCreateJob } from "./useCreateJob"
import { useUser } from "../../Context/UseContext"
import { PageNotAccess } from "../../UI/PageNotAccess"
import { PageError } from "../../UI/PageError"
import {useGetOneRank} from "../../User/Employer/Rank/RankAPI/useGetOneRank"
import { formatDate } from "../../Utils/formatDateTime"
import { IndustrySelectEditJob } from "./IndustrySelectEditJob"

export const CreateJob = () => {
    const {user, isLoadingUser} = useUser()
    const {rank, isLoading: isLoadingRank} = useGetOneRank(user?.data?.rankId)
    const {createJob, isLoading: isLoadingCreateJob} = useCreateJob()
    const {listIndustry, isLoading} = useGetIndustry()
    const [name, setName] = useState("")
    const [typeId, setTypeId] = useState(2);
    const [jobPosition, setJobPosition] = useState("");
    const [numPosition, setNumPosition] = useState("");
    const [maxSalary, setMaxSalary] = useState(0);
    const [minSalary, setMinSalary] = useState(0);
    const [yearExperience, setYearExperience] = useState("");
    const [jobAddress, setJobAddress] = useState("")
    const [location, setLocation] = useState("")

    const [jobDescription, setJobDescription] = useState('');
    const [jobRequirement, setJobRequirement] = useState('');
    const [jobBenefit, setJobBenefit] = useState('');
    const [arrayIndustrys, setArrayIndustrys] = useState([]) 
    const [arrayIndustryId, setArrayIndustryId] = useState([])
    const handleOnChangeName = (e) => {
        setName(e.target.value)
    }
    const handleOnChangePosition = (e) => {
        setJobPosition(e.target.value)
    }
    const handleOnChangeNumPosition = (e) => {
        setNumPosition(e.target.value)
    }
    const handleOnChangeYearExperience = (e) => {
        setYearExperience(e.target.value)
    }
    const handleOnChangeJobAddress = (e) => {
        setJobAddress(e.target.value)
    }
    const handleOnChangeMinSalary = (e) => {
        setMinSalary(e.target.value)
    }
    const handleOnChangeMaxSalary = (e) => {
        setMaxSalary(e.target.value)
    }

    const handleDescriptionChange = (event) => {
        setJobDescription(event.target.value);
    };
    const handleRequirementChange = (event) => {
        setJobRequirement(event.target.value);
    };
    const handleBenefitChange = (event) => {
        setJobBenefit(event.target.value);
    };


    const handleSubmit = async (e) => {
        e.preventDefault()
        const formdata = new FormData();
        formdata.append("jobName", name);
        // formdata.append("postDate", postDate);
        formdata.append("jobPosition", jobPosition);
        formdata.append("numPosition", numPosition);
        formdata.append("maxSalary", maxSalary);
        formdata.append("minSalary", minSalary);
        formdata.append("yearExperience", yearExperience);
        formdata.append("address", jobAddress);
        formdata.append("employerId", user.data.employerId)
        formdata.append("typeId", typeId)
        formdata.append("location", location);
        const now = new Date()
        formdata.append("postDate", formatDate(now))
        formdata.append("expirationDate", formatDate(now, rank?.data?.displayTime))
        formdata.append("reupTimesLeft", rank?.data?.reupTimes)
       
        
        let arrayDescription = jobDescription.split("\n");
        let arrayBenefit = jobBenefit.split("\n");
        let arrayRequirement = jobRequirement.split("\n");
        const formdataIndustry = new FormData();
        formdataIndustry.append("arrayIndustryIds", arrayIndustryId)
        const result = await createJob({formdata, arrayDescription, arrayBenefit, arrayRequirement,arrayIndustryId})
        // if(result.status === 200){
        //     setName("")
        //     setJobPosition("")
        //     setNumPosition("")
        //     setYearExperience("")
        //     setJobAddress("")
        //     setLocation(0)
        //     setMinSalary(0)
        //     setMaxSalary(0)
        //     setTypeId(1)
        //     setJobDescription("")
        //     setJobRequirement("")
        //     setJobBenefit("")
        //     setArrayIndustryId([])
        //     setArrayIndustrys([])
        // }
        // navigate("/home")
    }

    

    if(isLoading || isLoadingUser || isLoadingRank || isLoadingRank) return <LoadingPage/>
    if(user && !('employerId' in user.data)) return <PageNotAccess/>
    if(!user) return <PageError/>
    const useEffect=(() => {

    }, [user,rank,isLoadingRank, isLoadingUser])
    return(
        <>
            <div className="default-background pb-5">
            <div className="container" >
                <form onSubmit={(e) => handleSubmit(e)}>
                <div className="row">
                    <div className="col-lg-12" style={{padding: "48px 0"}}>
                        <h1 className="text-center" style={{fontWeight: "bold", color: "#666"}}>Tạo tin tuyển dụng của bạn</h1>
                    </div>
                </div>

                <div className="row">
                    <InputGroup label={"Tên công việc"} placeholder={"Nhập tên công việc"} inputValue={name} onChangeFns={handleOnChangeName} colLabel={3} colInput={9} require={true}/>
                    <InputGroup label={"Vị trí tuyển dụng"} placeholder={"vị trí"} inputValue={jobPosition} onChangeFns={handleOnChangePosition} colLabel={3} colInput={9}  require={true}/>
                    <InputGroup label={"Số lượng tuyển"} placeholder={"Số lượng tuyển dụng"} inputValue={numPosition} onChangeFns={handleOnChangeNumPosition} colLabel={3} colInput={9} typeInput={"number"} require={true}/>
                    <InputGroup label={"Số năm kinh nghiệm"} placeholder={"Năm kinh nghiệm"} inputValue={yearExperience} onChangeFns={handleOnChangeYearExperience} colLabel={3} colInput={9} typeInput={"number"} require={true}/>
                    <InputGroup label={"Địa điểm làm việc"} placeholder={"Địa chỉ"} inputValue={jobAddress} onChangeFns={handleOnChangeJobAddress} colLabel={3} colInput={9} require={true}/>
                    <div className="col-lg-12 form-group">
                        <div className="row mb-3">
                            <div className="col-lg-3">
                                <label style={{fontSize: "18px",lineHeight: "38px"}}>Thành phố: </label>
                            </div>
                            <div className="col-lg-4 ">
                                <div className="form-group">
                                    <ProvinceNameSelect provinceName={location} setProvinceName = {setLocation} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 form-group">
                        <div className="row mb-3">
                            <div className="col-lg-3">
                                <label style={{fontSize: "18px",lineHeight: "38px"}}>Mức lương thoả thuận: </label>
                            </div>
                            <div className="col-lg-3">
                            <input type="number"
                                    className="form-control outline-input border-select"
                                    placeholder="Mức lương thấp nhất"
                                    style={{ fontSize: "16px" }}
                                    value = {minSalary}
                                    onChange={handleOnChangeMinSalary}
                                    />
                                    

                            </div>
                            <div className="col-lg-1">
                                <label style={{fontSize: "18px",lineHeight: "38px"}}>đến: </label>
                            </div>
                            <div className="col-lg-3">
                            <input type="number"
                                    className="form-control outline-input border-select"
                                    placeholder="Mức lương cao nhất"
                                    style={{ fontSize: "16px" }}
                                    value={maxSalary}
                                    onChange={handleOnChangeMaxSalary}
                                    />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 form-group">
                        <div className="row mb-3 ">
                            <div className="col-lg-3">
                                <label style={{fontSize: "18px",lineHeight: "38px"}}>Chọn kiểu làm việc: </label>
                            </div>
                            <div className="col-lg-8">
                                <div className="row col-lg-12" style={{alignItems: "center"}}>
                                    <div className="mr-5">

                                        <input type="radio" id="option1" name="gender" value="2" className="mr-2" checked onChange={() => setTypeId(2)}/>
                                        <label htmlFor="option1" style={{fontSize: "18px"}}>Làm toàn thời gian</label>
                                    </div>
                                    <div>

                                        <input type="radio" id="option2" name="gender" value="1" className="mr-2" onChange={() => setTypeId(1)}/>
                                        <label htmlFor="option2" style={{fontSize: "18px"}}>Làm bán thời gian</label>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                    <JobInformation label={"Mô tả công việc"} inputValue={jobDescription} onChangeFns={handleDescriptionChange}/>
                    <JobInformation label={"Yêu cầu ứng viên"} inputValue={jobRequirement} onChangeFns={handleRequirementChange}/>
                    <JobInformation label={"Lợi ích"} inputValue={jobBenefit} onChangeFns={handleBenefitChange}/>
                    

                    <div className="col-lg-12 form-group">
                        <div className="row mb-3">
                            <div className="col-lg-3">
                                <label style={{fontSize: "18px",lineHeight: "38px"}}>Ngành nghề: </label>
                            </div>
                            <div className="col-lg-4 ">
                                {/* <IndustrySelect arrayIndustryId = {arrayIndustryId} setArrayIndustryId = {setArrayIndustryId} arrayIndustrys = {arrayIndustrys} setArrayIndustrys = {setArrayIndustrys}/> */}
                                <IndustrySelectEditJob arrayIndustryId = {arrayIndustryId} setArrayIndustryId = {setArrayIndustryId} arrayIndustrys = {arrayIndustrys} setArrayIndustrys = {setArrayIndustrys} isLoadingIndustriesOfJob= {null}/>
                            </div>
                        </div>
                    </div>
                    

                    <div className="col-lg-12 form-group text-center">
                        <button type="submit" className="profile-edit-btn main-background text-white col-lg-4" style={{fontSize: "20px", fontWeight: "bold"}}>Đăng tin</button>
                    </div>
                </div>     
                </form>       
            </div>
        </div>
        </>
    )
}