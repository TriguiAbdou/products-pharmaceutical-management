package com.app.Controller.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.Controller.entities.Pharmacie;

public interface PharmacieRepository extends JpaRepository<Pharmacie, Integer> {
	public List<Pharmacie> findByRegionNom(String NomRegion); 
}
