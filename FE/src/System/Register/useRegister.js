import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import apiGetMyIn4 from "../../API/apiGetMyIn4";
import { apiRegister } from "./apiRegister";
import toast from "react-hot-toast";

export const useRegister =  () => {
    const [cookies, setCookie] = useCookies(['jwtToken']);
    const queryClient = useQueryClient()
    const navigate = useNavigate();
    const {mutate: registerMutate, isLoading, error} = useMutation({
        mutationFn: async ({formData, formData2}) => await apiRegister(formData, formData2),
        onSuccess: async (result) => {

            console.log(result)
            // eslint-disable-next-line no-cond-assign
            if(result?.status === 200){
                const newUser = await apiGetMyIn4()
                console.log(newUser)
              }
            if(result.data.role === "employer"){
                toast.success("Bạn đã đăng ký tài khoản nhà tuyển dụng, vui lòng đợi được xác nhận tài khoản.")
            }
            if(result.data.role === "admin"){
                navigate("/admin")
            }else{
                if(result.data.role === "candidate")
                navigate("/home")
            }
        },
        onError: (e) => {
            return e;
        }
        
    })
    return {registerMutate, isLoading, error}
}