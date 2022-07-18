package com.sanches.mctracker.repositories;

import com.sanches.mctracker.entities.Maintenance;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;

@Repository
public interface MaintenanceRepository extends JpaRepository<Maintenance, Long> {
    @Query("SELECT obj FROM Maintenance obj WHERE obj.date BETWEEN :min AND :max ORDER BY obj.price DESC")
    Page<Maintenance> findMaintenance(LocalDate min, LocalDate max, Pageable pageable);
}