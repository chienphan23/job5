import { useMutation } from "@tanstack/react-query";
import { apiUpdateCandidate } from "./apiUpdateCandidate";
import toast from "react-hot-toast";

const useUpdateCandidate = () => {
    const { mutateAsync: updateCandidate, isLoading } = useMutation({
        mutationFn: ({ id, formData }) => apiUpdateCandidate(id, formData),
        onSuccess: (result) => {
            toast.success("Bạn đã chỉnh sửa thông tin thành công");
            return result;
        },
        onError: (error) => toast.error("Chỉnh sửa thông tin thất bại"),
    });
    return { updateCandidate, isLoading };
};
export { useUpdateCandidate };
