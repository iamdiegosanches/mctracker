package com.sanches.mctracker.entities;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Data
@Table(name = "TB_MAINTENANCE")
public class Maintenance {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String mechanicsName;
    private String workshopName;
    private Double price;
    @Column(columnDefinition = "TEXT")
    private String description;
    private LocalDate date;


}
