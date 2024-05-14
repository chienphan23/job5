package com.fpt.job5project.repository;

import com.fpt.job5project.dto.JobDTO;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;

import com.fpt.job5project.entity.Job;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface JobRepository extends JpaRepository<Job, Long> {
    @Query(value = "EXEC GetJobsByEmployer @numJobsToShow= :numJobs", nativeQuery = true)
    List<Job> getTopJobForHome(@Param("numJobs") int numJobs);

    @Query(value = "SELECT * FROM jobs WHERE employerId = :employerId ", nativeQuery = true)
    public List<Job> findByEmployerId(@Param("employerId") long employerId);

    @Query(value = "EXEC ResultSeachSQL @industryId = :industryId, @searchValue = :searchValue, @minSalary = :minSalary, @maxSalary = :maxSalary, @location =  :location, @experience = :experience, @typeJob = :typeJob", nativeQuery = true)
    public List<Job> resultSearch(@Param("industryId") long industryId, @Param("searchValue") String searchValue, @Param("minSalary") long minSalary, @Param("maxSalary") long maxSalary, @Param("location") String location, @Param("experience") int experience, @Param("typeJob") int typeJob );
}
