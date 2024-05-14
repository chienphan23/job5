import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiCreateCv } from "./apiCreateCv";
import { useNavigate } from "react-router-dom";

const useCreateCv = () => {
    const navigate = useNavigate();
    const { mutateAsync: createCv, isLoading } = useMutation({
        mutationFn: (formdata) => apiCreateCv(formdata),
        onSuccess: (result) => {
            toast.success("Hồ sơ của bạn đã thêm thành công");
            if (result) navigate("/manage-cv");
            return result;
        },
        onError: (err) => {

            if(err.status===602){
                toast.error("Thêm hồ sơ thất bại, kích thước file không vượt quá 5MB")
                
            }else{
                
                toast.error("Thêm hồ sơ thất bại đã có lỗi xảy ra.")
            }
        }
    });
    return { createCv, isLoading };
};
export { useCreateCv };
