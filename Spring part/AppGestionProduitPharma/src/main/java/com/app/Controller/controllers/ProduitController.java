package com.app.Controller.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.app.Controller.entities.Produit;
import com.app.Controller.repository.ProduitRepository;



@RestController
@RequestMapping("/produit")
public class ProduitController {
	@Autowired
	ProduitRepository produitRespository;
	
	
	
	/*ajouter produit*/
	@PostMapping(value="/create", consumes = "application/json", produces = "application/json")
	public Produit createProduit(@RequestBody Produit produit) {
		return produitRespository.save(produit);
		
	}
	
	
	
	
	/*retourner la liste des produits*/
	@GetMapping(value="/listProduit", consumes = "application/json", produces = "application/json")
	public List<Produit> getAllProduits() {
		return produitRespository.findAll();
		
	}
	
	
	
	
	/*modifier produit*/
	/*@PutMapping("/update/{id}")
	public ResponseEntity<Produit> updateProduit(@PathVariable(value="id") int produitId ,@RequestBody Produit produit){
		Optional<Produit> p=produitRespository.findById(produitId);
		Produit prod=p.get();
		prod.setNom(produit.getNom());
		prod.setGenerique(produit.getGenerique());
		prod.setPrixA(produit.getPrixA());
		prod.setQuantite(produit.getQuantite());
		Produit produitUpdate=produitRespository.save(prod);
		return ResponseEntity.ok().body(produitUpdate);
	}*/
	
	
	
	
	/*rechercher produit byID*/
	/*@GetMapping("/find/{id}")
	public Optional<Produit> getProduitById(@PathVariable(value="id") int produitId) {
		return produitRespository.findById(produitId);
	}*/
	
	
	
	
	
	/*supprimer produit*/
	/*@DeleteMapping("/delete/{id}")
	public ResponseEntity< Produit> deleteProduit(@PathVariable(value="id") int produitId){
		produitRespository.deleteById(produitId);
		return ResponseEntity.ok().build();
	}*/
	
	
	
	
	
	
}
