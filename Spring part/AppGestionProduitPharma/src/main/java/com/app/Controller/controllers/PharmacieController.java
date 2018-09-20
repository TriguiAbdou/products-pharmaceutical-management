package com.app.Controller.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.Controller.entities.Pharmacie;
import com.app.Controller.entities.Region;
import com.app.Controller.repository.PharmacieRepository;
import com.app.Controller.repository.RegionRepository;

@RestController
@RequestMapping("/pharmacie")
@CrossOrigin(origins= "http://localhost:4200",maxAge=3600)
public class PharmacieController {
	@Autowired
	PharmacieRepository pharmacieRepository;
	
	@Autowired
	RegionRepository regionRepository;
	
	/*ajouter pharmacie*/
	@PostMapping(value="/create", consumes = "application/json", produces = "application/json")
	public Pharmacie createPharmacie(@RequestBody Pharmacie pharmacie) {
		Region region =regionRepository.findOne(6);
		pharmacie.setRegion(region);
		return pharmacieRepository.save(pharmacie);
		
	}
	
	
	
	
	/*retourner la liste des pharmacies*/
	@GetMapping(value="/listPharmacie", consumes = "application/json", produces = "application/json")
	public List<Pharmacie> getAllPharmacies() {
		return pharmacieRepository.findAll();
		
	}
	
	
	/*retourner la liste des pharmacies situés dans une région donnée en paramétre */
	@GetMapping(value="/PharmaciesSelonRegion/{nomRegion}/{id}")
	public List<Pharmacie> getPharmaciesRegion(@PathVariable(value="nomRegion") String nom,@PathVariable(value="id") int idPharmacie) {
		List<Pharmacie> list=pharmacieRepository.findByRegionNom(nom);	
		Pharmacie pharmacie=pharmacieRepository.findOne(idPharmacie);
		List<Pharmacie> listeCorrecte=new ArrayList<>();
		for(Pharmacie ls:list) {
            if((ls.getId() ) != (pharmacie.getId())) {
            	listeCorrecte.add(ls);
            }
		}
		
		return listeCorrecte;
		
		
	}
	
	
	
	
	/*modifier pharmacie*/
	@PutMapping("/update/{id}")
	public ResponseEntity<Pharmacie> updatePharmacie(@PathVariable(value="id") int pharmacieId ,@RequestBody Pharmacie pharmacie){
		Pharmacie ph=pharmacieRepository.findOne(pharmacieId);
		ph.setAdresse(pharmacie.getAdresse());
		ph.setMail(pharmacie.getMail());
		ph.setNom(pharmacie.getNom());
		ph.setTel(pharmacie.getTel());
		Region region =regionRepository.findOne(6);
		ph.setRegion(region);
		Pharmacie pharmacieUpdate=pharmacieRepository.save(ph);
		return ResponseEntity.ok().body(pharmacieUpdate);
	}
	
	
	
	
	//rechercher pharmacie byID
	@GetMapping("/find/{id}")
	public Pharmacie getPharmacieById(@PathVariable(value="id") int pharmacieId) {
		return pharmacieRepository.findOne(pharmacieId);
	}
	
	
	
	
	
	/*supprimer pharmacie*/
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Pharmacie> deletePharmacie(@PathVariable(value="id") int pharmacieId){
		Pharmacie pharma=pharmacieRepository.findOne(pharmacieId);
		pharmacieRepository.delete(pharma);
		return ResponseEntity.ok().build();
	}
	
	
	
	
	

}
