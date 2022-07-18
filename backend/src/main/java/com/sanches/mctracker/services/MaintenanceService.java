package com.sanches.mctracker.services;

import com.sanches.mctracker.entities.Maintenance;
import com.sanches.mctracker.repositories.MaintenanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
public class MaintenanceService {

    @Autowired
    private MaintenanceRepository maintenanceRepository;

    @Transactional
    public Maintenance saveMaintenance(Maintenance maintenance) {
        return maintenanceRepository.save(maintenance);
    }

    public Page<Maintenance> findMaintenance(Pageable pageable) {
        return maintenanceRepository.findAll(pageable);
    }

    public Optional<Maintenance> findById(long id) {
        return maintenanceRepository.findById(id);
    }
}
