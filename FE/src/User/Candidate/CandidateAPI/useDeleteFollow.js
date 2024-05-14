import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiDeleteFollow } from "./apiDeleteFollow";

const useDeleteFollow = () => {
    const queryClient = useQueryClient();
    const { mutateAsync: deleteFollow, isLoading } = useMutation({
        mutationFn: (id) => apiDeleteFollow(id),
        onSuccess: (result) => {
            queryClient.invalidateQueries({
                // vô hiệu hoá bộ đệm để query lại (đồng bộ giao diện)
                queryKey: ["follows"],
            });
            toast.success("Bạn đã hủy theo dõi công ty");
            return result;
        },
        onError: (error) => toast.error("Đã xảy ra lỗi"),
    });
    return { deleteFollow, isLoading };
};
export { useDeleteFollow };
