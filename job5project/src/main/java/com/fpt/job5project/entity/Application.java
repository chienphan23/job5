package com.fpt.job5project.entity;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "applications")
public class Application {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "applicationid", nullable = false)
    private long applicationId;

    @ManyToOne(targetEntity = Job.class)
    @JoinColumn(name = "jobid", insertable = false, updatable = false)
    private Job job;

    @Column(name = "jobid", nullable = false)
    private long jobId;

    @ManyToOne(targetEntity = Candidate.class)
    @JoinColumn(name = "candidateid", insertable = false, updatable = false)
    private Candidate candidate;

    @Column(name = "candidateid", nullable = false)
    private long candidateId;

    @Column(name = "applicationdate")
    private Date applicationDate;

    @ManyToOne(targetEntity = ApplicationStatus.class)
    @JoinColumn(name = "status", insertable = false, updatable = false)
    private ApplicationStatus applicationStatus;

    @Column(name = "status", nullable = false)
    private long status;

    @Column(name = "cv")
    private String cv;

}