package com.fpt.job5project.service;

import com.fpt.job5project.Model.JobsIndustries;
import com.fpt.job5project.dto.QuantityJobDTO;
import com.fpt.job5project.entity.Job;

import java.io.Serializable;
import java.util.List;
import java.util.Objects;

public interface IJobsIndustriesService {
    public void addJobsIndustries(JobsIndustries jobsIndustries);
    public List<JobsIndustries> getJobIndustriesByJobId(long jobId);

    public void deleteIndustryOfJob(long jobId, long industryId);

    public void deleteIndustriesByJobId(long jobId);

    public List<QuantityJobDTO> quantityJobOfIndustryId();

    public void deleteIndustryJobByIndustryId(long industryId);
}
