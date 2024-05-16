package com.fpt.job5project.service.impl;

import com.fpt.job5project.Model.JobsIndustries;
import com.fpt.job5project.dto.QuantityJobDTO;
import com.fpt.job5project.repository.JobsIndustriesRepository;
import com.fpt.job5project.service.IJobsIndustriesService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class JobsIndustriesImpl implements IJobsIndustriesService {

    JobsIndustriesRepository jobsIndustriesRepository;
    @Override
    public void addJobsIndustries(JobsIndustries jobsIndustries) {
        System.out.println(jobsIndustries);
        int checkExists = jobsIndustriesRepository.checkExists(jobsIndustries.getIndustries_industryid(), jobsIndustries.getJob_jobid());
        if(checkExists == 0){
            jobsIndustriesRepository.insertJobsIndustries(jobsIndustries.getIndustries_industryid(), jobsIndustries.getJob_jobid());
        }

    }

    @Override
    public List<JobsIndustries> getJobIndustriesByJobId(long jobId) {
        List<JobsIndustries> listIndustries = jobsIndustriesRepository.findIndustriesByJobId(jobId);
        return  listIndustries;
    }

    @Override
    public void deleteIndustryOfJob(long jobId, long industryId) {
        jobsIndustriesRepository.deleteIndustryOfJob(jobId, industryId);
    }

    @Override
    public void deleteIndustriesByJobId(long jobId) {
        jobsIndustriesRepository.deleteIndustryByJobId((jobId));
    }

    @Override
    public void deleteIndustryJobByIndustryId(long industryId) {
        jobsIndustriesRepository.deleteIndustryJobByIndustryId(industryId);
    }

    public List<QuantityJobDTO> quantityJobOfIndustryId(){
        List<Object[]> results = jobsIndustriesRepository.quantityJobOfIndustryId();
        List<QuantityJobDTO> quantityJobDTOs = new ArrayList<>();
        for (Object[] result : results) {
            QuantityJobDTO quantityJobDTO = new QuantityJobDTO();
            quantityJobDTO.setIndustryid((Long) result[0]);
            quantityJobDTO.setIndustryname((String) result[1]);
            quantityJobDTO.setQuantity((Integer) result[2]);
            quantityJobDTOs.add(quantityJobDTO);
        }
        return quantityJobDTOs;
    }
}
