package com.fpt.job5project.controller;


import com.fpt.job5project.dto.JobInterestDTO;
import com.fpt.job5project.dto.ResponseObject;
import com.fpt.job5project.service.IJobInterestService;
import jakarta.validation.Valid;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@RequestMapping("api/jobInterest")
public class JobInterestController {
    IJobInterestService jobInterestService;

    @GetMapping("/{id}")
    public ResponseObject<List<JobInterestDTO>> listJobInterests(@PathVariable("id") Long id) {

        ResponseObject<List<JobInterestDTO>> responseObject = new ResponseObject<>();

        List<JobInterestDTO> listDTOs = jobInterestService.getJobInterest(id);
        responseObject.setData(listDTOs);
        return responseObject;
    }

    @PostMapping("/create")
    public ResponseObject<JobInterestDTO> addJobInterest(@ModelAttribute JobInterestDTO jobInterest) {
        ResponseObject<JobInterestDTO> responseObject = new ResponseObject<>();
        responseObject.setData(jobInterestService.addJobInterest(jobInterest));
        return responseObject;
    }

    @DeleteMapping("/delete/{id}")
    public ResponseObject<String> deleteJobInterest(@PathVariable("id") Long id) {

        ResponseObject<String> responseObject = new ResponseObject<>();
        jobInterestService.deleteJobInterest(id);
        responseObject.setMessage("Job interest has been deleted");
        return responseObject;
    }
}