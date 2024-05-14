import { useQuery } from "@tanstack/react-query"
import { apiGetEmployerOfJob, apiGetIndustriesOfJob, apiGetJob, apiGetJobDescription, apiGetJobRequirement, apiGetjobBenefit } from "./apiGetJob"

export const useGetJob = (id) => {
    const {data: job, isLoading: isLoadingJob, error: errorJob} = useQuery({
        queryKey: ['jobDetail'],
        queryFn: () => apiGetJob(id)
    })
    const {data: arrayJobDescription, isLoading: isLoadingDescription, error: errorDescription} = useQuery({
        queryKey: ['jobDetailDescription'],
        queryFn: () => apiGetJobDescription(id)
    })
    const {data: arrayJobRequirement, isLoading: isLoadingRequirement, error: errorRequirement} = useQuery({
        queryKey: ['jobDetailRequirement'],
        queryFn: () => apiGetJobRequirement(id)
    })
    const {data: arrayIndustriesOfJob, isLoading: isLoadingIndustriesOfJob, error: errorIndustriesOfJob} = useQuery({
        queryKey: ['jobDetailIndustriesOfJob'],
        queryFn: () => apiGetIndustriesOfJob(id)
    })
    const {data: arrayJobBenefit, isLoading: isLoadingBenefit, error: errorBenefit} = useQuery({
        queryKey: ['jobDetailBenefit'],
        queryFn: () => apiGetjobBenefit(id)
    })
        const {data: employerOfJob, isLoading: isLoadingEmployer, error: errorEmployer} = useQuery({
            queryKey: ['employerOfJob'],
            queryFn: () => { 
                if(job && job.status === 200){
                    const result = apiGetEmployerOfJob(job.data.employerId)
                    return result;
                }else{
                    throw new Error('none')
                }
            }
        })
    return {job, arrayJobDescription, arrayJobRequirement, arrayJobBenefit, employerOfJob ,arrayIndustriesOfJob ,isLoadingJob ,isLoadingDescription, isLoadingRequirement, isLoadingBenefit, isLoadingEmployer ,isLoadingIndustriesOfJob ,errorJob, errorDescription, errorRequirement ,errorBenefit, errorEmployer ,errorIndustriesOfJob}
}