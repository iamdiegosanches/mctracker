package com.sanches.mctracker.entities;

import lombok.Data;

import javax.persistence.*;
import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.UUID;

@Entity
@Data
@Table(name = "TB_MAINTENANCE")
public class Maintenance implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    private String mechanicsName;
    private String workshopName;
    private String workshopLocation;
    private Double price;
    private Double piecePrice;
    @Column(columnDefinition = "TEXT")
    private String description;
    private LocalDate date;
}
