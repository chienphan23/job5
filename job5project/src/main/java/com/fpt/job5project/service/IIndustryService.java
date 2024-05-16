package com.fpt.job5project.service;

import java.util.List;

import com.fpt.job5project.dto.IndustryDTO;

public interface IIndustryService {
    public List<IndustryDTO> getAllIndustry();

    public IndustryDTO addIndustry(IndustryDTO newIndustryDTO);

    public IndustryDTO updateIndustry(long id, IndustryDTO newIndustryDTO);

    public void deleteIndustry(long id);
<<<<<<< HEAD
=======

>>>>>>> cb8abfcd526acec9924c808f0c58d2f994662a1f
    public IndustryDTO getIndustryID(long id);
}
