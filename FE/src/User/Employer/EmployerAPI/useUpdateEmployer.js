import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiUpdateEmployer } from "./apiUpdateEmployer";
import { useNavigate } from "react-router-dom";

export const useUpdateEmployer = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { mutateAsync: updateEmployer, isLoading } = useMutation({
        mutationFn: ({ id, formData }) => apiUpdateEmployer(id, formData),
        onSuccess: (result) => {
            toast.success("Cập nhật trạng thái thành công!");
            console.log(result);
            if (result.status === 200) {
                console.log("alo");
                queryClient.invalidateQueries({
                    // vô hiệu hoá bộ đệm để query lại (đồng bộ giao diện)
                    queryKey: ["Employer"],
                });
                navigate(`/employer-profile/${result.data.employerId}`);
            }
            return result;
        },
        onError: (err) =>
            toast.error("Cập nhật trạng thái thất bại đã có lỗi xảy ra."),
    });
    return { updateEmployer, isLoading };
};
