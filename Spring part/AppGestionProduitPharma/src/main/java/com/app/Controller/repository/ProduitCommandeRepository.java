package com.app.Controller.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.Controller.entities.ProduitCommande;
import com.app.Controller.entities.ProduitCommandeID;

public interface ProduitCommandeRepository extends JpaRepository<ProduitCommande,ProduitCommandeID>{

	public List<ProduitCommande> findByCommandeId(int idCommande);
	
	public ProduitCommande findByCommandeIdAndProduitsCode(int idCommande,int idProduit);
	
	
}
