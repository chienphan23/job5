import { useQuery } from "@tanstack/react-query";
import { apiGetEmployer } from "./apiGetEmployer";

export const useGetEmployer = (id) => {
    const {
        data: employerCurrent,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["Employer" + id],
        queryFn: () => apiGetEmployer(id),
    });

    return { employerCurrent, isLoading, error };
};
