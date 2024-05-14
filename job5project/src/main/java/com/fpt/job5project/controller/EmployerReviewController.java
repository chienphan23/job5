package com.fpt.job5project.controller;

import com.fpt.job5project.dto.EmployerReviewDTO;
import com.fpt.job5project.dto.ResponseObject;
import com.fpt.job5project.service.IEmployerReviewService;
import jakarta.validation.Valid;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@RequestMapping("api/EmployerReview")
public class EmployerReviewController {

    IEmployerReviewService iEmployerReviewService;

    @GetMapping("/")
    public ResponseObject<List<EmployerReviewDTO>> listOfEmployerReviews() {

        ResponseObject<List<EmployerReviewDTO>> responseObject = new ResponseObject<>();

        List<EmployerReviewDTO> listDTOs = iEmployerReviewService.listOfEmployerReview();
        responseObject.setData(listDTOs);
        return responseObject;
    }

    @GetMapping("/{id}")
    public ResponseObject<EmployerReviewDTO> getEmployerReview(@PathVariable("id") long id) {

        ResponseObject<EmployerReviewDTO> responseObject = new ResponseObject<>();
        responseObject.setData(iEmployerReviewService.getEmployerReview(id));
        return responseObject;
    }


    @PostMapping("/Create")
    public ResponseObject<EmployerReviewDTO> addEmployerReview(@ModelAttribute @Valid EmployerReviewDTO newApplication) {

        ResponseObject<EmployerReviewDTO> responseObject = new ResponseObject<>();
        responseObject.setData(iEmployerReviewService.addEmployerReview(newApplication));
        return responseObject;
    }

    @DeleteMapping("/Delete/{id}")
    public ResponseObject<String> deleteEmployerReview(@PathVariable("id") Long id) {

        ResponseObject<String> responseObject = new ResponseObject<>();
        iEmployerReviewService.deleteEmployerReview(id);
        responseObject.setMessage("Employer review has been deleted");
        return responseObject;
    }

    @PutMapping("/Update/{id}")
    public ResponseObject<EmployerReviewDTO> updateEmployerReview(@PathVariable("id") Long id, @ModelAttribute EmployerReviewDTO employerReviewDTO) {

        ResponseObject<EmployerReviewDTO> responseObject = new ResponseObject<>();
        responseObject.setData(iEmployerReviewService.updateEmployerReview(id, employerReviewDTO));
        return responseObject;
    }
}
