import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EditEmployerInformation } from "./EmployerUI/EditEmployerInformation";
import { ProvinceNameSelect } from "../../UI/ProvinceNameSelect";
import { apiUpdateEmployer } from "../Employer/EmployerAPI/apiUpdateEmployer";
import { useUser } from "../../Context/UseContext";
import { useUpdateEmployer } from "./EmployerAPI/useUpdateEmployer";

export const EditProfileEmployer = () => {
    const { user: employerCurrent, isLoadingUser: isLoading } = useUser();
    const { updateEmployer } = useUpdateEmployer();
    const [employerName, setEmployerName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [provinceName, setProvinceName] = useState("");
    const [description, setDescription] = useState("");
    const [filePhoto, setFilePhoto] = useState("");
    const [fileBackground, setFileBackground] = useState("");
    const [rankId, setRankId] = useState(1);
    const navigate = useNavigate();

    const handleChangeEmployerName = (e) => {
        setEmployerName(e.target.value);
    };

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleChangePhone = (e) => {
        setPhone(e.target.value);
    };

    const handleChangeAddress = (e) => {
        setAddress(e.target.value);
    };

    const handleChangeDescription = (e) => {
        setDescription(e.target.value);
    };

    const onHandleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("employerName", employerName);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("address", address);
        formData.append("provinceName", provinceName);
        formData.append("description", description);
        formData.append("filePhoto", filePhoto);
        formData.append("fileBackground", fileBackground);
        formData.append("rankId", rankId);

        const result = updateEmployer({
            id: employerCurrent.data.employerId,
            formData,
        });
    };

    useEffect(() => {
        if (!isLoading) {
            setEmployerName(employerCurrent.data.employerName);
            setEmail(employerCurrent.data.email);
            setPhone(employerCurrent.data.phone);
            setAddress(employerCurrent.data.address);
            setDescription(employerCurrent.data.description ?? "");
            setProvinceName(employerCurrent.data.provinceName);
            setFilePhoto(employerCurrent.data.photo);
            setFileBackground(employerCurrent.data.background);
            setRankId(employerCurrent.data.rankId);
        }
    }, [isLoading]);

    if (isLoading) {
        return <div>Wait</div>;
    }

    return (
        <>
        {console.log(employerCurrent)}
            <div className="default-background">
                <div className="container pt-4 pb-4 default-background">
                    <form onSubmit={(e) => onHandleSubmit(e)}>
                        <EditEmployerInformation
                            employerCurrent={employerCurrent?.data}
                            filePhoto={filePhoto}
                            setFilePhoto={setFilePhoto}
                            fileBackground={fileBackground}
                            setFileBackground={setFileBackground}
                        />

                        <div className="row row-gap mt-5">
                            <div className="col-lg-12 form-group">
                                <div className="row mb-3">
                                    <div className="col-lg-3">
                                        <label
                                            style={{
                                                fontSize: "18px",
                                                lineHeight: "38px",
                                            }}
                                        >
                                            Tên công ty:
                                            <span className="text-danger">
                                                (*)
                                            </span>
                                        </label>
                                    </div>
                                    <div className="col-lg-9">
                                        <input
                                            type="text"
                                            className="form-control outline-input border-select"
                                            placeholder="Nhập tên công ty"
                                            style={{ fontSize: "16px" }}
                                            value={employerName}
                                            onChange={(e) =>
                                                handleChangeEmployerName(e)
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 form-group">
                                <div className="row mb-3">
                                    <div className="col-lg-3">
                                        <label
                                            style={{
                                                fontSize: "18px",
                                                lineHeight: "38px",
                                            }}
                                        >
                                            Email:
                                            <span className="text-danger">
                                                (*)
                                            </span>
                                        </label>
                                    </div>
                                    <div className="col-lg-9">
                                        <input
                                            type="text"
                                            className="form-control outline-input border-select"
                                            placeholder="Nhập email của công ty"
                                            style={{ fontSize: "16px" }}
                                            value={email}
                                            onChange={(e) =>
                                                handleChangeEmail(e)
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 form-group">
                                <div className="row mb-3">
                                    <div className="col-lg-3">
                                        <label
                                            style={{
                                                fontSize: "18px",
                                                lineHeight: "38px",
                                            }}
                                        >
                                            Số điện thoại:
                                            <span className="text-danger">
                                                (*)
                                            </span>
                                        </label>
                                    </div>
                                    <div className="col-lg-9">
                                        <input
                                            type="text"
                                            className="form-control outline-input border-select"
                                            placeholder="Nhập số liên hệ công ty"
                                            style={{ fontSize: "16px" }}
                                            value={phone}
                                            onChange={(e) =>
                                                handleChangePhone(e)
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 form-group">
                                <div className="row mb-3">
                                    <div className="col-lg-3">
                                        <label
                                            style={{
                                                fontSize: "18px",
                                                lineHeight: "38px",
                                            }}
                                        >
                                            Địa chỉ công ty:
                                            <span className="text-danger">
                                                (*)
                                            </span>
                                        </label>
                                    </div>
                                    <div className="col-lg-9">
                                        <input
                                            type="text"
                                            className="form-control outline-input border-select"
                                            placeholder="Nhập địa chỉ công ty"
                                            style={{ fontSize: "16px" }}
                                            value={address}
                                            onChange={(e) =>
                                                handleChangeAddress(e)
                                            }
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 form-group">
                                <div className="row mb-3">
                                    <div className="col-lg-3">
                                        <label
                                            style={{
                                                fontSize: "18px",
                                                lineHeight: "38px",
                                            }}
                                        >
                                            Tỉnh thành:
                                            <span className="text-danger">
                                                (*)
                                            </span>
                                        </label>
                                    </div>
                                    <div className="col-lg-4 ">
                                        <div className="form-group">
                                            <ProvinceNameSelect
                                                provinceName={provinceName}
                                                setProvinceName={
                                                    setProvinceName
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 form-group">
                                <div className="row mb-3">
                                    <div className="col-lg-12">
                                        <label
                                            style={{
                                                fontSize: "18px",
                                                lineHeight: "38px",
                                            }}
                                        >
                                            Mô tả công ty:
                                            <span className="text-danger">
                                                (*)
                                            </span>
                                        </label>
                                    </div>
                                    <div className="col-lg-12">
                                        <textarea
                                            className="form-control outline-input border-select"
                                            value={description}
                                            onChange={(e) =>
                                                handleChangeDescription(e)
                                            }
                                            style={{ height: "200px" }}
                                        ></textarea>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 form-group text-center">
                                <button
                                    className="profile-edit-btn main-background text-white col-lg-4"
                                    style={{
                                        fontSize: "20px",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Lưu thay đổi
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
