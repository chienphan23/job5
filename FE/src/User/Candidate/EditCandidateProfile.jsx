import { useEffect, useState } from "react";
import { parseISO, format } from "date-fns";
import { ProvinceNameSelect } from "../../UI/ProvinceNameSelect";
import { useGetCandidate } from "../Candidate/CandidateAPI/useGetCandidate";
import { LoadingPage } from "../../UI/LoadingPage";
import { useUpdateCandidate } from "../Candidate/CandidateAPI/useUpdateCandidate";
import { useUser } from "../../Context/UseContext";
export const EditCandidateProfile = () => {
    const [filePhoto, setFilePhoto] = useState("");
    const { user, isLoadingUser } = useUser(); // user hiện tại
    const [bio, setBio] = useState("");
    const [name, setName] = useState("");
    const [currentJob, setCurrentJob] = useState("");
    const [exp, setExp] = useState(0);
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [dob, setDob] = useState("");
    const [address, setAddress] = useState("");
    const [province, setProvince] = useState("");
    const { updateCandidate, isLoading: isLoadingCandidate } =
        useUpdateCandidate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append("fullName", name);
        formData.append("birthDate", dob);
        formData.append("yearExperience", exp);
        formData.append("bio", bio);
        formData.append("currentJob", currentJob);
        formData.append("phone", phone);
        formData.append("email", email);
        formData.append("file", filePhoto);
        formData.append("provinceName", province);
        formData.append("address", address);

        await updateCandidate({ id: user.data.candidateId, formData });
    };
    useEffect(() => {
        if (user) {
            setName(user.data.fullName);
            setDob(format(parseISO(user.data.birthDate), "dd-MM-yyyy"));
            // setDob(user.data.birthDate);
            setExp(user.data.yearExperience);
            setBio(user.data.bio);
            setCurrentJob(user.data.currentJob);
            setPhone(user.data.phone);
            setEmail(user.data.email);
            setProvince(user.data.provinceName);
            setAddress(user.data.address);
            setFilePhoto(user.data.photo);
        }
    }, [user]);
    if (isLoadingUser || isLoadingCandidate) return <LoadingPage />;
    return (
        <>
            <div className="border border-light mt-3 bg-white p-3 rounded pb-5">
                <div className="border-bottom pb-3">
                    <h5>Thông tin cá nhân</h5>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="row border-bottom pt-3 pb-3">
                        <div className="col-lg-2">
                            {typeof filePhoto === "object" ? (
                                <img
                                    src={URL?.createObjectURL(filePhoto)}
                                    style={{
                                        width: "100px",
                                        borderRadius: "50%",
                                        height: "100px",
                                        objectFit: "cover",
                                        position: "relative",
                                    }}
                                />
                            ) : (
                                <img
                                    src={`http://localhost:8080/api/v1/files/${filePhoto}`}
                                    // src="./b3.png"
                                    style={{
                                        width: "100px",
                                        borderRadius: "50%",
                                        height: "100px",
                                        objectFit: "cover",
                                        position: "relative",
                                    }}
                                />
                            )}
                            <label
                                htmlFor="filePhoto"
                                className="btn main-color-bold col-lg-3 p-0 m-0 rounded-circle bg-transparent"
                                style={{
                                    position: "absolute",
                                    bottom: "-6px",
                                    right: "26px",
                                }}
                            >
                                <i className="fa fa-camera"></i>
                            </label>

                            <input
                                id="filePhoto"
                                type="file"
                                onChange={(e) =>
                                    setFilePhoto(...e.target.files)
                                }
                                accept="image/*"
                                encType="multipart/form-data"
                                className="d-none"
                            />
                        </div>
                        <div className="col-lg-10">
                            <div className="form-group col-lg-12 h-100">
                                <label>Giới thiệu:</label>
                                <br />
                                <textarea
                                    className="w-100 h-75"
                                    value={bio}
                                    onChange={(e) => setBio(e.target.value)}
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="form-group col-lg-6">
                            <label>Họ và tên:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group col-lg-4">
                            <label>Công việc hiện tại:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={currentJob}
                                onChange={(e) => setCurrentJob(e.target.value)}
                            />
                        </div>
                        <div className="form-group col-lg-2">
                            <label>Kinh nghiệm:</label>
                            <input
                                type="number"
                                className="form-control"
                                value={exp}
                                onChange={(e) => setExp(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-lg-6">
                            <label>Email:</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group col-lg-6">
                            <label>Số điện thoại:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-lg-6">
                            <label>Ngày sinh:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                            />
                        </div>
                        <div className="form-group col-lg-6">
                            <label>Địa chỉ:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-lg-6">
                            <label>Tỉnh / Thành phố:</label>
                            <ProvinceNameSelect
                                provinceName={province}
                                setProvinceName={setProvince}
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        style={{ display: "flex", float: "right" }}
                    >
                        Lưu thông tin
                    </button>
                </form>
            </div>
        </>
    );
};
