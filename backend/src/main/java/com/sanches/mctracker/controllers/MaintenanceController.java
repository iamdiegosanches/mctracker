package com.sanches.mctracker.controllers;

import com.sanches.mctracker.entities.Maintenance;
import com.sanches.mctracker.services.MaintenanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/maintenance")
public class MaintenanceController {

    @Autowired
    private MaintenanceService maintenanceService;

    @GetMapping
    public Page<Maintenance> findMaintenance(@RequestParam(value = "minDate", defaultValue = "") String minDate,
                                             @RequestParam(value = "maxDate", defaultValue = "") String maxDate,
                                             Pageable pageable) {
        return maintenanceService.findMaintenance(minDate, maxDate, pageable);
    }

}
