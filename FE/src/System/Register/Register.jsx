import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import {
  faUser,
  faEnvelope,
  faLock,
  faKey,
  faL,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { apiRegister } from "./apiRegister";
import { apiGetProvince } from "../../API/apiGetProvince";
import { useGetProvince } from "../../API/useGetProvince";
import "react-datepicker/dist/react-datepicker.css";
import { ProvinceNameSelect } from "../../UI/ProvinceNameSelect";
import apiGetMyIn4 from "../../API/apiGetMyIn4";
import { useRegister } from "./useRegister";

export const Register = () => {
  const {listProvince, isLoading} = useGetProvince()
  const {registerMutate, isLoading: isLoadingRegister} = useRegister()
  const [error, setError] = useState("")
  const [isCandidate, setIsCandidate] = useState(false);

  const [isEmployer, setIsEmployer] = useState(false);
  const [userName, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passwordRepeat, setPasswordRepeat] = useState("")
  const [birthDay, setBirthDay] = useState(new Date())

  const [email, setEmail] = useState("")
//   const [role, setRole] = useState("")
  const [name, setName] = useState("")
  const rank = 1
  const [provinceName, setProvinceName] = useState("")
  const [phone, setPhone] = useState("")
  const [address,setAddress] = useState("")

  const onChangeUserName = (e) => {
    setUsername(e.target.value)
  }
  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }
  const onChangePasswordRepeat = (e) => {
    setPasswordRepeat(e.target.value)
  }
  const onChangeName = (e) => {
    setName(e.target.value)
  }
  
  const onChangePhone = (e) => {
    setPhone(e.target.value)
  }
  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  const onChangeAddress = (e) => {
    setAddress(e.target.value)
  }
  const handleChangeSelect = (e) => {
    setProvinceName(e.target.value)
  }

  const handleChangeDate = (e) => {
    setBirthDay(e.target.value
    )
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  const onSubmitRegister = async (e) => {
      e.preventDefault()

    if(password !== passwordRepeat){
        setError("Mật khẩu không trùng khớp")
        return;
    }

    const formData = new FormData();
    formData.append("userName", userName);
    console.log(password)
    formData.append("password", password);
    if(isCandidate){
        formData.append("role", "candidate");

    }else{
        if(isEmployer){
            formData.append("role","employer")
        }
    }
    const formData2 = new FormData();
    formData2.append("phone", phone);
    formData2.append("email", email);
    formData2.append("address", address);
    formData2.append("provinceName", provinceName)
    if(isCandidate){
        formData2.append("fullName", name)
        formData2.append("birthDate", formatDate(birthDay))
      }else{
        formData2.append('location', provinceName)
        formData2.append("employerName", name)
    }
    registerMutate({formData, formData2})
    
  }

 

  

  if(isLoading || isLoadingRegister) return <>Wait</>
  
  return (
    <>
      <section className="pb-5 pt-3 main-background">
        <div
          className="container "
          style={{ paddingTop: "8px", paddingBottom: "8.5px" }}
        >
          <div className={`row d-flex justify-content-center align-items-center h-100 `}>
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div
                  className="card-body p-md-5 shadow "
                  style={{ borderRadius: "25px" }}
                >
                  <form className={`row justify-content-center align-items-${isCandidate || isEmployer ? "start" : "center"}`} onSubmit={e => onSubmitRegister(e)} >
                    <div className="col-md-10 col-lg-6 col-xl-5 order-1 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Đăng ký
                      </p>
                      <div className="mx-1 mx-md-4 mt-3">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i
                            style={{
                              paddingRight: "10px",
                              paddingLeft: "10px",
                            }}
                          >
                            <FontAwesomeIcon
                              icon={faUserCircle}
                              size="lg"
                              className="me-3"
                              style={{
                                fontSize: "25px",
                                paddingRight: "10px",
                                paddingLeft: "10px",
                              }}
                            />
                          </i>
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example1c1"
                            >
                              Tên tài khoản:
                            </label>
                            <input
                              type="text"
                              id="form3Example1c1"
                              className="form-control"
                              onChange={e => onChangeUserName(e)}
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i
                            style={{
                              paddingRight: "10px",
                              paddingLeft: "10px",
                            }}
                          >
                            <FontAwesomeIcon
                              icon={faUser}
                              size="lg"
                              className="me-3"
                              style={{
                                fontSize: "25px",
                                paddingRight: "10px",
                                paddingLeft: "10px",
                              }}
                            />
                          </i>
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              Tên của bạn:
                            </label>
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              onChange={e => onChangeName(e)}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i
                            style={{
                              paddingRight: "10px",
                              paddingLeft: "10px",
                            }}
                          >
                            <FontAwesomeIcon
                              icon={faEnvelope}
                              size="lg"
                              className="me-3"
                              style={{
                                fontSize: "25px",
                                paddingRight: "10px",
                                paddingLeft: "10px",
                              }}
                            />
                          </i>
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example3c"
                            >
                              Địa chỉ Email:
                            </label>
                            <input
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                              onChange={e => onChangeEmail(e)}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i
                            style={{
                              paddingRight: "10px",
                              paddingLeft: "10px",
                            }}
                          >
                            <FontAwesomeIcon
                              icon={faLock}
                              size="lg"
                              className="me-3"
                              style={{
                                fontSize: "25px",
                                paddingRight: "10px",
                                paddingLeft: "10px",
                              }}
                            />
                          </i>
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example4c"
                            >
                              Mật khẩu:
                            </label>
                            <input
                              type={"password"}
                              id="form3Example4c"
                              className="form-control"
                              onChange={e => onChangePassword(e)}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i  style={{
                              paddingRight: "10px",
                              paddingLeft: "10px",
                            }}
                          >
                            <FontAwesomeIcon
                              icon={faKey}
                              size="lg"
                              className="me-3"
                              style={{
                                fontSize: "25px",
                                paddingRight: "10px",
                                paddingLeft: "10px",
                              }}
                            />
                          </i>
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example4cd2"
                            >
                              Nhập lại mật khẩu:
                            </label>
                            <input
                              type={"password"}
                              id="form3Example4cd2"
                              className="form-control"
                              onChange={e => onChangePasswordRepeat(e)}
                            />
                          </div>
                          
                        </div>
                        <div className="text-danger col-lg-12  order-2 order-lg-2 pl-5">{error}</div>

                        

                      </div>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7  order-2 order-lg-2">
                      <div className="row"
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          width: "100%",
                          paddingTop: "5px",
                          paddingBottom: "6px",
                        }}
                      >
                        {!isCandidate && !isEmployer ? <p className="col-lg-12 text-center mb-4" style={{fontSize: "24px", fontWeight: "bold"}}>Tham gia với vai trò? </p> : ""}
                        <button
                          className={`btn ${
                            isCandidate ? "btn-info" : "btn-outline-info"
                          }`}
                          type="button"
                          onClick={() => {
                            setIsCandidate(true);
                            setIsEmployer(false);
                          }}
                        >
                          Ứng viên
                        </button>
                        <button
                          className={`btn ${
                            isEmployer ? "btn-info" : "btn-outline-info"
                          }`}
                          type="button"
                          onClick={() => {
                            setIsCandidate(false);
                            setIsEmployer(true);
                          }}
                        >
                          Nhà tuyển dụng
                        </button>
                      </div>

                      {isCandidate || isEmployer ? 
                        <div className="mt-3">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example4cd3"
                            >
                              Số điện thoại:
                            </label>
                            <input
                              type="text"
                              id="form3Example4cd3"
                              className="form-control"
                              onChange={e => onChangePhone(e)}
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example4cd"
                            >
                              Địa chỉ:
                            </label>
                            <input
                              type="text"
                              id="form3Example4cd"
                              className="form-control"
                              onChange={e => onChangeAddress(e)}
                            />
                          </div>
                        </div>

                        <div>
                          <div className="form-outline flex-fill mb-4">
                            <label
                              className="form-label"
                              htmlFor="form3Example4cd"
                            >
                              Thành phố:
                            </label>
                            <div className="form-group">
                              <ProvinceNameSelect provinceName={provinceName} setProvinceName={setProvinceName}/>
                            </div>
                          </div>
                        </div>

                        {isCandidate && (
                          <div className="d-flex flex-row align-items-center mb-3">
                            <div className="form-outline flex-fill mb-0">
                              <label
                                className="form-label"
                                htmlFor="form3Example4cd"
                              >
                                Ngày sinh:
                              </label>
                              {/* <input
                                type="date"
                                id="birthday"
                                name="birthday"
                                className="form-control"
                                value={""}
                                onChange={(e) => handleChangeDate(e)}
                                onFocus={(e) => (e.target.type = "date")}
                                onBlur={(e) => {
                                if (!e.target.value) {
                                    e.target.type = "text";
                                    e.target.value = "MM/DD/YYYY";
                                }
                                }}
                              /> */}
                                <DatePicker
                                
                                    dateFormat="dd/MM/yyyy"
                                    selected={birthDay}
                                    className="form-control w-full"
                                    style={{ width: '100%' }}
                                    onChange={date => setBirthDay(date)}
                                />
                            </div>
                          </div>
                        )}
                      </div>
                    : <></>
                      }
                      </div>


                <div className=" mx-1 mx-md-4 order-3">
                    <div className="ml-4 form-check d-flex mb-3">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example3c"
                      />

                      <label
                        className="form-check-label"
                        htmlFor="form2Example3"
                      >
                        Tôi đồng ý với các thông tin trong{" "}
                        <a
                          href="#!"
                          data-toggle="modal"
                          data-target="#registerModal"
                        >
                          điều khoản
                        </a>
                      </label>
                    </div>
                    <div className="ml-4 form-check d-flex mb-3">
                      <label
                        className="form-check-label"
                        htmlFor="form2Example3"
                      >
                        Nếu đã có tài khoản ?{" "}
                        <Link to={"/login"}>Đăng nhập</Link>
                      </label>
                    </div>

                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button
                        type="submit"
                        className="btn  btn-md btn-info"
                        style={{
                          fontWeight: "500",
                          fontSize: "16px",
                          borderRadius: "10px",
                        }}
                      >
                        Đăng ký
                      </button>
                    </div>
                  </div>
                  </form>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <div
        className="modal fade"
        id="registerModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="registerModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="registerModalLabel">
                Điều khoản
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              veritatis ut magni id labore, laborum dignissimos natus tempora,
              animi ullam eligendi error est accusantium. Quas cumque beatae
              odio ducimus distinctio!
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
