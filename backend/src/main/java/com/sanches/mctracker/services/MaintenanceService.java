package com.sanches.mctracker.services;

import com.sanches.mctracker.entities.Maintenance;
import com.sanches.mctracker.repositories.MaintenanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;

@Service
public class MaintenanceService {

    @Autowired
    private MaintenanceRepository maintenanceRepository;

    public Page<Maintenance> findMaintenance(String minDate, String maxDate, Pageable pageable) {

        LocalDate today = LocalDate.ofInstant(Instant.now(), ZoneId.systemDefault());

        LocalDate min = minDate.equals("") ? today.minusDays(365) : LocalDate.parse(maxDate);
        LocalDate max = minDate.equals("") ? today : LocalDate.parse(maxDate);

        return maintenanceRepository.findMaintenance(min, max, pageable);
    }
}
