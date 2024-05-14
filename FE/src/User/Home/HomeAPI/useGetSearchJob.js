import { useQuery } from "@tanstack/react-query"
import { apiGetTopJobForHome } from "./apiGetTopJobForHome"
import { apiSearchJob } from "./apiSearchJob"

export const useGetSearchJob = (formData) => {
    const {data: listJobs, isLoading, error} = useQuery({
        queryKey: ['listJobResult'],
        queryFn: () => apiSearchJob(formData)
    })
    return {listJobs, isLoading, error}
}