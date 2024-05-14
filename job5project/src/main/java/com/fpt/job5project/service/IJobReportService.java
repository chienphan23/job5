package com.fpt.job5project.service;

import com.fpt.job5project.dto.CandidateDTO;
import com.fpt.job5project.dto.JobInterestDTO;
import com.fpt.job5project.dto.JobReportDTO;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface IJobReportService {
    public List<JobReportDTO> listOfJobReports();

    public JobReportDTO addJobReport(JobReportDTO jobReportDTO);

    public void deleteJobReport(long id);
}