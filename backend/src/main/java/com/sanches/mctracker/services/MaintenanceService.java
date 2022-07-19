package com.sanches.mctracker.services;

import com.sanches.mctracker.entities.Maintenance;
import com.sanches.mctracker.repositories.MaintenanceRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;
import java.util.UUID;

@Service
public class MaintenanceService {

    private final MaintenanceRepository maintenanceRepository;

    public MaintenanceService(MaintenanceRepository maintenanceRepository) {
        this.maintenanceRepository = maintenanceRepository;
    }

    @Transactional
    public Maintenance saveMaintenance(Maintenance maintenance) {
        return maintenanceRepository.save(maintenance);
    }

    public Page<Maintenance> findAll(Pageable pageable) {
        return maintenanceRepository.findAll(pageable);
    }

    public Optional<Maintenance> findById(UUID id) {
        return maintenanceRepository.findById(id);
    }

    @Transactional
    public void delete(Maintenance maintenance) {
        maintenanceRepository.delete(maintenance);
    }
}
