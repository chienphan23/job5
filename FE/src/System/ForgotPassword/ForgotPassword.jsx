import { useState } from "react"
import { Link } from "react-router-dom"
import { apiForgotPassword } from "./ForgotPasswordApi/apiForgotPassword"
import { useForgotPassword } from "./ForgotPasswordApi/useForgotPassword"

export const ForgotPassword = () => {
    const {sendEmail, isLoading} = useForgotPassword()
    const [email, setEmail] = useState("")
    const handleSubmidForm = async (e) => {
        e.preventDefault()
        const result = sendEmail(email)
        console.log(result)
    }
    return (
        <>
            <div className="card text-center" style={{display: "flex",justifyContent: "center", alignItems: "center", backgroundColor: "#ddd", height: "100vh"}}>
                <div className="shadow" style={{width: "450px",borderRadius: "18px", overflow: "hidden", backgroundColor: "white"}}>  
                <div className="card-header h5 text-white bg-primary">Đặt lại mật khẩu</div>
                <div className="card-body px-5">
                    <p className="card-text py-2" style={{fontWeight: "600", fontSize: "16px"}}>
                        {"Nhập địa chỉ email của bạn và chúng tôi sẽ gửi cho bạn một email kèm theo hướng dẫn để đặt lại mật khẩu của bạn."}
                    </p>
                        <form onSubmit={(e) => handleSubmidForm(e)}>
                    <div className="form-outline">
                        <label className="form-label" style={{width: "100%", textAlign: "left", fontWeight: "800", fontSize: "18px"}} htmlFor="typeEmail">Địa chỉ email:</label>
                        <input type="email" id="typeEmail" className="form-control mb-2" onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary w-100" style={{fontWeight: "500", fontSize: "16px"}}>Xác nhận</button>
                        </form>
                    <div className="d-flex justify-content-between mt-4">
                        <Link className="" to={"/login"} style={{fontWeight: "600"}}>Đăng nhập</Link>
                        <Link className="" to={"/register"} style={{fontWeight: "600"}}>Đăng ký</Link>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}