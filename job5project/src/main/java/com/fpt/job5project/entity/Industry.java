package com.fpt.job5project.entity;

import jakarta.persistence.*;
import org.hibernate.annotations.Nationalized;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "industries")
public class Industry {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "industryid", nullable = false)
    private long industryId;

    @Nationalized
    @Column(name = "industryname")
    private String industryName;

    @ManyToMany(mappedBy = "industries")
    private Set<Job> jobs;

}