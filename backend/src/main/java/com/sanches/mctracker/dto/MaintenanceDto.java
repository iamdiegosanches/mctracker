package com.sanches.mctracker.dto;

import lombok.Data;

import java.time.LocalDate;

@Data
public class MaintenanceDto {
    private String mechanicsName;
    private String workshopName;
    private String workshopLocation;
    private Double price;
    private String description;
    private LocalDate date;

}
