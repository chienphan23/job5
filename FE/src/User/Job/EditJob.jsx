import { useEffect, useState } from "react"
import { apiJob } from "./apiJob"
import { Link, useNavigate, useParams } from "react-router-dom"
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
import { useGetJob } from "./useGetJob"
import { useUpdateJob } from "./useUpdateJob"
import { IndustrySelectEditJob } from "./IndustrySelectEditJob"
import { parseISO, format } from "date-fns";

export const EditJob = () => {
    let {idJob} = useParams()
    const {job, arrayJobDescription, arrayJobRequirement, arrayJobBenefit ,employerOfJob ,arrayIndustriesOfJob ,isLoadingJob, isLoadingDescription ,isLoadingRequirement ,isLoadingBenefit ,isLoadingEmployer ,isLoadingIndustriesOfJob} = useGetJob(idJob)
    const {updateJob, isLoading: isLoadingUpdateJob} = useUpdateJob()
    const {user, isLoadingUser} = useUser() // user hiện tại

    const {listIndustry, isLoading} = useGetIndustry()
    const [name, setName] = useState("")
    const postDate = "20-02-2024";
    const [typeId, setTypeId] = useState(2);
    const [jobPosition, setJobPosition] = useState("");
    const [numPosition, setNumPosition] = useState("");
    const [maxSalary, setMaxSalary] = useState(0);
    const [minSalary, setMinSalary] = useState(0);
    const [yearExpirence, setYearExpirence] = useState("");
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
    const handleOnChangeYearExpirence = (e) => {
        setYearExpirence(e.target.value)
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
        formdata.append("jobPosition", jobPosition);
        formdata.append("numPosition", numPosition);
        formdata.append("maxSalary", maxSalary);
        formdata.append("minSalary", minSalary);
        formdata.append("yearExpirence", yearExpirence);
        formdata.append("address", jobAddress);
        formdata.append("employerId", user.data.employerId)
        formdata.append("typeId", typeId)
        formdata.append("location", location);
        formdata.append("postDate", format(parseISO(job?.data?.postDate),"dd-MM-yyyy") );
        formdata.append("expirationDate",format(parseISO(job?.data?.expirationDate),"dd-MM-yyyy"))
        formdata.append("acceptDate",format(parseISO(job?.data?.acceptDate),"dd-MM-yyyy"))
       
        
        let arrayDescription = jobDescription && jobDescription.split("\n");
        console.log("alo")
        let arrayBenefit = jobBenefit && jobBenefit.split("\n");
        let arrayRequirement = jobRequirement && jobRequirement.split("\n");
        const formdataIndustry = new FormData();
        formdataIndustry.append("arrayIndustryIds", arrayIndustryId)
        console.log("alo" + idJob)
        const result = await updateJob({idJob,formdata, arrayDescription, arrayBenefit,arrayRequirement, arrayIndustryId})
        if(result.status === 200){
            setName("")
            setJobPosition("")
            setNumPosition("")
            setYearExpirence("")
            setJobAddress("")
            setLocation(0)
            setMinSalary(0)
            setMaxSalary(0)
            setTypeId(1)
            setJobDescription("")
            setJobRequirement("")
            setJobBenefit("")
            setArrayIndustryId([])
            setArrayIndustrys([])
        }
        // navigate("/home")
    }

    useEffect(() => {
        if(job && arrayJobBenefit && arrayJobDescription && arrayJobRequirement && arrayIndustriesOfJob){
            setName(job.data.jobName)
            setJobPosition(job.data.jobPosition)
            setNumPosition(job.data.numPosition)
            setYearExpirence(job.data.yearExpirence)
            setJobAddress(job.data.address)
            setLocation(job.data.location)
            setMinSalary(job.data.minSalary)
            setMaxSalary(job.data.maxSalary)
            setTypeId(job.data.typeId)
            let stringConvertArrayDescription  = arrayJobDescription ?  arrayJobDescription.data.map(i => i.description) : ""
            setJobDescription(stringConvertArrayDescription.join('\n')) 
            let stringConvertArrayRequirement  = arrayJobRequirement.data.map(i => i.description)
            setJobRequirement(stringConvertArrayRequirement.join('\n'))
            let stringConvertArrayBenefit  = arrayJobBenefit.data.map(i => i.description)
            setJobBenefit(stringConvertArrayBenefit.join('\n'))
            let arrayConverListIndustries = arrayIndustriesOfJob.data.map(i => i.industries_industryid)
            setArrayIndustryId(arrayConverListIndustries)
        }
    }, [job, arrayJobBenefit, arrayJobDescription, arrayJobRequirement, arrayIndustriesOfJob])    

    if(isLoading || isLoadingUser) return <LoadingPage/>
    if(!('employerId' in user.data ) || user.data.employerId != job?.data.employerId) return <PageNotAccess/>
    return(
        <>
            <div className="default-background pb-5">
            <div className="container" >
                <form onSubmit={(e) => handleSubmit(e)}>
                <div className="row">
                    <div className="col-lg-12" style={{padding: "48px 0"}}>
                        <h1 className="text-center" style={{fontWeight: "bold", color: "#666"}}>Sửa tin tuyển dụng của bạn</h1>
                    </div>
                </div>

                <div className="row">
                    <InputGroup label={"Tên công việc"} placeholder={"Nhập tên công việc"} inputValue={name} onChangeFns={handleOnChangeName} colLabel={3} colInput={9} require={true}/>
                    <InputGroup label={"Vị trí tuyển dụng"} placeholder={"Vị trí"} inputValue={jobPosition} onChangeFns={handleOnChangePosition} colLabel={3} colInput={9}  require={true}/>
                    <InputGroup label={"Số lượng tuyển"} placeholder={"Số lượng tuyển dụng"} inputValue={numPosition} onChangeFns={handleOnChangeNumPosition} colLabel={3} colInput={9} typeInput={"number"} require={true}/>
                    <InputGroup label={"Số năm kinh nghiệm"} placeholder={"Năm kinh nghiệm"} inputValue={yearExpirence} onChangeFns={handleOnChangeYearExpirence} colLabel={3} colInput={9} typeInput={"number"} require={true}/>
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

                                        <input type="radio" id="option1" name="gender"  className="mr-2" checked = {typeId == 2} onChange={() => setTypeId(2)}/>
                                        <label htmlFor="option1" style={{fontSize: "18px"}}>Làm toàn thời gian</label>
                                    </div>
                                    <div>

                                        <input type="radio" id="option2" name="gender"  className="mr-2" checked = {typeId == 1} onChange={() => setTypeId(1)}/>
                                        <label htmlFor="option2" style={{fontSize: "18px"}}>Làm bán thời gian</label>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                    <JobInformation label={"Mô tả công việc"} inputValue={jobDescription} onChangeFns={handleDescriptionChange}/>
                    <JobInformation label={"Yêu cần ứng viên"} inputValue={jobRequirement} onChangeFns={handleRequirementChange}/>
                    <JobInformation label={"Lợi ích"} inputValue={jobBenefit} onChangeFns={handleBenefitChange}/>
                    

                    <div className="col-lg-12 form-group">
                        <div className="row mb-3">
                            <div className="col-lg-3">
                                <label style={{fontSize: "18px",lineHeight: "38px"}}>Ngành nghề: </label>
                            </div>
                            <div className="col-lg-4 ">
                                <IndustrySelectEditJob arrayIndustryId = {arrayIndustryId} setArrayIndustryId = {setArrayIndustryId} arrayIndustrys = {arrayIndustrys} setArrayIndustrys = {setArrayIndustrys} isLoadingIndustriesOfJob= {isLoadingIndustriesOfJob}/>

                            </div>
                        </div>
                    </div>
                    

                    <div className="col-lg-12 form-group text-center">
                        <button type="submit" className="profile-edit-btn main-background text-white col-lg-4" style={{fontSize: "20px", fontWeight: "bold"}}>Sửa tin tuyển dụng</button>
                    </div>
                </div>     
                </form>       
            </div>
        </div>
        </>
    )
}