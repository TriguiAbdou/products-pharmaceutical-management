package com.app.Controller.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.Controller.entities.Commande;
import com.app.Controller.entities.Pharmacie;
import com.app.Controller.entities.Produit;
import com.app.Controller.entities.ProduitCommande;
import com.app.Controller.entities.ProduitCommandeID;
import com.app.Controller.repository.CommandeRepository;
import com.app.Controller.repository.ProduitCommandeRepository;
import com.app.Controller.repository.ProduitRepository;

@RestController
@RequestMapping("/produitcommande")
@CrossOrigin(origins= "http://localhost:4200",maxAge=3600)
public class ProduitCommandeController {

	@Autowired
	ProduitCommandeRepository produitCommandeRepository;
	
	@Autowired
	ProduitRepository produitRepository;
	
	@Autowired
	CommandeRepository commandeRepository;
	
	
	/*ajouter ProduitCommande*/
	@PostMapping(value="/create/{idproduit}/{idcommande}")
	public ProduitCommande createProduitCommande(@RequestBody ProduitCommande produitCommande,@PathVariable(value="idproduit") int IdProduit,@PathVariable(value="idcommande") int IdCommande) {
		ProduitCommandeID produitCommandeID=new ProduitCommandeID();
		Produit produit=produitRepository.findOne(IdProduit);
		Commande commande=commandeRepository.findOne(IdCommande);
		produitCommandeID.setCommandeID(commande.getId());
		produitCommandeID.setProduitID(produit.getCode());
		ProduitCommande produitCommandetest=new ProduitCommande(produitCommande.getQuantiteCom(),produitCommande.getPrix(), produitCommandeID, commande, produit);
		return produitCommandeRepository.save(produitCommandetest);
		
	}
	
	
	/*supprimer une commande compléte*/
	/*@DeleteMapping("/delete/{id}")
	public ResponseEntity<ProduitCommande> deleteProduitCommande(@PathVariable(value="id") int IdCommande){
		List<ProduitCommande>  produitCommandes =produitCommandeRepository.findByCommandeId(IdCommande);
		for(ProduitCommande ls:produitCommandes) {
			produitCommandeRepository.delete(ls);
		}
		return ResponseEntity.ok().build();
	}*/
	
	
	
	
	/*supprimer une ligne d'une commande*/
	@DeleteMapping("/delete/{idcommande}")
	public ResponseEntity<ProduitCommande> deleteOneProduitParCommande(@PathVariable(value="idcommande") int IdCommande){
		List<ProduitCommande> list=produitCommandeRepository.findByCommandeId(IdCommande);
		for(ProduitCommande ls:list) {
			produitCommandeRepository.delete(ls);
		}
		return ResponseEntity.ok().build();
	}
	
	
	//recherche liste des produits commander by id commande
	@GetMapping("/produitscommander/{id}")
	public List<ProduitCommande> findByCommandeid(@PathVariable(value="id") int idCommande) {
		return produitCommandeRepository.findByCommandeId(idCommande);
	}
	
	
	
}
