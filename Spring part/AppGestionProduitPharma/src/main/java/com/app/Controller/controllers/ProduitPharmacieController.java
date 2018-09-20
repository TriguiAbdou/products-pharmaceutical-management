package com.app.Controller.controllers;



import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.Controller.entities.Pharmacie;
import com.app.Controller.entities.Produit;
import com.app.Controller.entities.ProduitPharmacie;
import com.app.Controller.entities.ProduitPharmacieID;
import com.app.Controller.entities.Region;
import com.app.Controller.repository.PharmacieRepository;
import com.app.Controller.repository.ProduitPharmacieRepository;
import com.app.Controller.repository.ProduitRepository;



@RestController
@RequestMapping("/produitPharmacie")
@CrossOrigin(origins= "http://localhost:4200",maxAge=3600)
public class ProduitPharmacieController {
	@Autowired
	ProduitRepository produitRespository;
	
	@Autowired
	ProduitPharmacieRepository produitPharmacieRepository;
	
	@Autowired
	ProduitRepository produitRepository;
	
	@Autowired
	PharmacieRepository pharmacieRepository;
	
	/*ajouter produit*/
	@PostMapping(value="/create", consumes = "application/json", produces = "application/json")
	public ProduitPharmacie createProduit(@RequestBody ProduitPharmacie produitPharmacie) {
		ProduitPharmacieID produitPharmacieID=new ProduitPharmacieID();
		Produit produit=produitRepository.findOne(21);
		Pharmacie pharmacie=pharmacieRepository.findOne(76);
		produitPharmacieID.setPharmacieID(pharmacie.getId());
		produitPharmacieID.setProduitID(produit.getCode());
		ProduitPharmacie produitPharmacie2=new ProduitPharmacie(produitPharmacie.getPrixVente(), produitPharmacie.getQuantite(),produitPharmacie.getDfc(), produitPharmacie.getNpr(), produitPharmacieID, pharmacie, produit);
		return produitPharmacieRepository.save(produitPharmacie2);
		
	}
	
	
	//rechercher pharmacie byID
	@GetMapping("/find/{idPharmacie}")
	public List<ProduitPharmacie> getProduitByPharmacie(@PathVariable(value="idPharmacie") int pharmacieId) {
		return produitPharmacieRepository.findByPharmacieId(pharmacieId);
	}	
	
	
	/*modifier pharmacie*/
	@PutMapping("/reserver/{idProduit}/{idPharmacie}")
	public ResponseEntity<ProduitPharmacie> reserverProduit(@PathVariable(value="idProduit") int produitId ,@PathVariable(value="idPharmacie") int pharmacieId,@RequestBody ProduitPharmacie produitPharmacie){
		ProduitPharmacie prod=produitPharmacieRepository.findByProduitCodeAndPharmacieId(produitId, pharmacieId);
		prod.setNpr(prod.getNpr()+1);
		ProduitPharmacie prodUpdate=produitPharmacieRepository.save(prod);
		return ResponseEntity.ok().body(prodUpdate);
	}
	
	
	/*modifier pharmacie*/
	@PutMapping("/vendureserver/{idProduit}/{idPharmacie}")
	public ResponseEntity<ProduitPharmacie> diminuerreserverProduit(@PathVariable(value="idProduit") int produitId ,@PathVariable(value="idPharmacie") int pharmacieId,@RequestBody ProduitPharmacie produitPharmacie){
		ProduitPharmacie prod=produitPharmacieRepository.findByProduitCodeAndPharmacieId(produitId, pharmacieId);
		prod.setNpr(prod.getNpr()-1);
		ProduitPharmacie prodUpdate=produitPharmacieRepository.save(prod);
		return ResponseEntity.ok().body(prodUpdate);
	}
	
	
	
	//rechercher pharmacie byID
	@GetMapping("/findProduit/{nomProduit}/{regionName}")
	public List<ProduitPharmacie> getProduitByidetRegion(@PathVariable(value="nomProduit") String produitNom,@PathVariable(value="regionName") String region) {
		return produitPharmacieRepository.findByProduitNomAndPharmacieRegionNom(produitNom, region);
	}	
		
	
	//retourner liste des produit réservé d'une pharmacie 
	@GetMapping("/findProduitReserve/{id}")
	public List<ProduitPharmacie> getProduitReserve(@PathVariable(value="id") int idPharmacie) {
		List<ProduitPharmacie> list= produitPharmacieRepository.findByPharmacieId(idPharmacie);
		List<ProduitPharmacie> listfinal=new ArrayList<>();
		for(ProduitPharmacie ls:list) {
			if(ls.getNpr()>0) {
				listfinal.add(ls);
			}
		}
		return listfinal;
	}
	
	//retourner si la quantité de pharmacie centrale est supérieur à zero ou nn!
	@GetMapping("/findQuantite/{id}/{idPharmacie}")
	public int getProduitByidProduit(@PathVariable(value="id") int idProduit,@PathVariable(value="idPharmacie") int idpharma) {
		int test=0;
		ProduitPharmacie produit= produitPharmacieRepository.findByProduitCodeAndPharmacieId(idProduit, idpharma);
		System.out.println(produit.getProduit().getQuantite());

		if ((produit.getQuantite())>0) {
			test=1;
			return test;
		}
		else {
			return test;
		}
		
	}
	
	
	
}
