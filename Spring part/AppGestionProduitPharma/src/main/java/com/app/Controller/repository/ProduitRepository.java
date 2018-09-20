package com.app.Controller.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.Controller.entities.Produit;

public interface ProduitRepository extends JpaRepository<Produit, Integer> {

}
