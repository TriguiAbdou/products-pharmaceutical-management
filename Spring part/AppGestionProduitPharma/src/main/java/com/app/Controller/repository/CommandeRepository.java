package com.app.Controller.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.Controller.entities.Commande;

public interface CommandeRepository extends JpaRepository<Commande,Integer> {
	
	public List<Commande> findByPharmacieId(int id);
	
}
