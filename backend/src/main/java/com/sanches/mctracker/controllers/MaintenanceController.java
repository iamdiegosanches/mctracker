package com.sanches.mctracker.controllers;

import com.sanches.mctracker.dto.MaintenanceDto;
import com.sanches.mctracker.entities.Maintenance;
import com.sanches.mctracker.services.MaintenanceService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/maintenance")
public class MaintenanceController {

    @Autowired
    private MaintenanceService maintenanceService;

    @PostMapping
    public ResponseEntity<Object> saveMaintenance(@RequestBody MaintenanceDto maintenanceDto) {
        var maintenance = new Maintenance();
        BeanUtils.copyProperties(maintenanceDto, maintenance);
        return ResponseEntity.status(HttpStatus.CREATED).body(maintenanceService.saveMaintenance(maintenance));
    }

    @GetMapping
    public ResponseEntity<Page<Maintenance>> findMaintenance(Pageable pageable) {
        return ResponseEntity.status(HttpStatus.OK)
                .body(maintenanceService.findMaintenance(pageable));
    }

}
