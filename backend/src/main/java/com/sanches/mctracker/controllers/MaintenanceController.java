package com.sanches.mctracker.controllers;

import com.sanches.mctracker.dto.MaintenanceDto;
import com.sanches.mctracker.entities.Maintenance;
import com.sanches.mctracker.services.MaintenanceService;
import org.springframework.beans.BeanUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping(value = "/maintenance")
public class MaintenanceController {

    private final MaintenanceService maintenanceService;

    public MaintenanceController(MaintenanceService maintenanceService) {
        this.maintenanceService = maintenanceService;
    }

    @PostMapping
    public ResponseEntity<Object> saveMaintenance(@RequestBody MaintenanceDto maintenanceDto) {
        var maintenance = new Maintenance();
        BeanUtils.copyProperties(maintenanceDto, maintenance);
        if(maintenance.getDate() == null) {
            maintenance.setDate(LocalDate.now());
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(maintenanceService.saveMaintenance(maintenance));
    }

    @GetMapping
    public ResponseEntity<Page<Maintenance>> findMaintenance(Pageable pageable) {
        return ResponseEntity.status(HttpStatus.OK)
                .body(maintenanceService.findAll(pageable));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteMaintenance(@PathVariable(value = "id") UUID id) {
        Optional<Maintenance> maintenanceOptional = maintenanceService.findById(id);
        if(!maintenanceOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Not found");
        }
        maintenanceService.delete(maintenanceOptional.get());
        return ResponseEntity.status(HttpStatus.OK).body("Deleted successfully");
    }

}
