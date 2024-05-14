import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiUpdateApplicationStatus } from "./apiUpdateApplicationSatus";

export const useUpdateApplicationStatus = () => {
    const queryClient = useQueryClient();
    const { mutateAsync: updateApplicationStatus, isLoadingUpdate } =
        useMutation({
            mutationFn: ({ id, formData }) =>
                apiUpdateApplicationStatus(id, formData),
            onSuccess: (result) => {
                toast.success("Cập nhật trạng thái thành công!");
                console.log(result);
                if (result.status === 200) {
                    console.log("alo");
                    queryClient.invalidateQueries({
                        // vô hiệu hoá bộ đệm để query lại (đồng bộ giao diện)
                        queryKey: ["ApplicationByJob" + result?.data.jobId],
                    });
                }
                return result;
            },
            onError: (err) =>
                toast.error("Cập nhật trạng thái thất bại đã có lỗi xảy ra."),
        });
    return { updateApplicationStatus, isLoadingUpdate };
};
