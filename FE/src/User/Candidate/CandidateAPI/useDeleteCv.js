import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiDeleteCv } from "./apiDeleteCv";
import { useNavigate } from "react-router-dom";

const useDeleteCv = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { mutateAsync: deleteCv, isLoading } = useMutation({
        mutationFn: (id) => apiDeleteCv(id),
        onSuccess: (result) => {
            queryClient.invalidateQueries({
                // vô hiệu hoá bộ đệm để query lại (đồng bộ giao diện)
                queryKey: ["cv"],
            });
            toast.success("Hủy file thành công");
            if (result) navigate("/manage-cv");
            return result;
        },
        onError: (error) => toast.error("Hủy file thất bại"),
    });
    return { deleteCv, isLoading };
};
export { useDeleteCv };
