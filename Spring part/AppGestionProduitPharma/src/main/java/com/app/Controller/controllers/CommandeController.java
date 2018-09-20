package com.app.Controller.controllers;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Collection;
import java.util.Collections;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.Controller.Comparator.CommandeComparatorDCommande;
import com.app.Controller.Comparator.CommandeComparatorDLivraison;
import com.app.Controller.Comparator.CommandeComparatorID;
import com.app.Controller.entities.Commande;
import com.app.Controller.entities.Pharmacie;
import com.app.Controller.entities.Produit;
import com.app.Controller.entities.ProduitCommande;
import com.app.Controller.repository.CommandeRepository;
import com.app.Controller.repository.PharmacieRepository;
import com.app.Controller.repository.ProduitCommandeRepository;
import com.app.Controller.services.SentMailService;

@RestController
@RequestMapping("/commande")
@CrossOrigin(origins= "http://localhost:4200",maxAge=3600)
public class CommandeController {
	
	@Autowired
	CommandeRepository commandeRepository;
	
	@Autowired
	PharmacieRepository pharmacieRepository;
	
	@Autowired
	ProduitCommandeRepository produitCommandeRepository;
	
	@Autowired
	SentMailService sentMailService;
	
	/*ajouter commande*/
	@PostMapping(value="/create/{idpharmacie}", consumes = "application/json", produces = "application/json")
	public Commande createCommande(@RequestBody Commande commande,@PathVariable(value="idpharmacie") int Idpharmacie) {
		Pharmacie pharmacie=pharmacieRepository.findOne(Idpharmacie);
		commande.setPharmacie(pharmacie);
		commande.setLivraison("non");
		return commandeRepository.save(commande);
	}
	
	/*retourner la liste des commandes*/
	@GetMapping(value="/listCommande", consumes = "application/json", produces = "application/json")
	public List<Commande> getAllCommandes() {
		return commandeRepository.findAll();
		
	}
	
	
	
	/*modifier commande*/
	@PutMapping("/update/{id}")
	public ResponseEntity<Commande> updateCommande(@PathVariable(value="id") int commandeId ,@RequestBody Commande commande){
		Commande commandeUpdate=commandeRepository.findOne(commandeId);
		commandeUpdate.setDateLivraison(commande.getDateLivraison());
		commandeUpdate.setPharmacie(commande.getPharmacie());
		commandeUpdate.setQuantite(commande.getQuantite());
		commandeUpdate.setLivraison(commande.getLivraison());
		DateFormat df = new SimpleDateFormat("dd/MM/yyyy");
		Date today = Calendar.getInstance().getTime();  
		String reportDate = df.format(today);
		commandeUpdate.setDateCommande(reportDate);
		Commande CommandeUpdatee =commandeRepository.save(commandeUpdate);
		try {
			List<ProduitCommande> list=produitCommandeRepository.findByCommandeId(commandeId);
			String Newligne=System.getProperty("line.separator"); 
			String header="Commande ID    :    "+commandeUpdate.getId();
			String donneePharmacie="Nom pharmacie     :   "+commandeUpdate.getPharmacie().getNom();
			String donne2="Adresse    :    "+commandeUpdate.getPharmacie().getAdresse()+" , "+commandeUpdate.getPharmacie().getRegion().getNom();
			String donne3="Telephone     :     "+commandeUpdate.getPharmacie().getTel();
			String messageMil = "Code produit    |    Nom Produit    |      Generique   |       Quantité commandée      |    Prix total (en DT) "+ Newligne + Newligne;
			String ligne; 
			for (ProduitCommande s : list)
			{
				ligne=s.getProduit().getCode()+"                      |       "+s.getProduit().getNom()+"        |       "+s.getProduit().getGenerique()+"             |               "+s.getQuantiteCom()+"                          |                    "+s.getPrix();
			    messageMil += ligne + Newligne + Newligne;
			}
			String footerMessage="Date de la commande :   "+commandeUpdate.getDateCommande();
			String footerMessage2="Date de la livraison :   "+commandeUpdate.getDateLivraison();
			String footMessage3="Prix total de la commande (en DT) :   "+commandeUpdate.getQuantite();
			
			String mailFinal=header+Newligne+Newligne+donneePharmacie+Newligne+Newligne+donne2+Newligne+Newligne+donne3+Newligne+Newligne+Newligne+Newligne+messageMil+ Newligne + Newligne+Newligne+footerMessage+Newligne + Newligne+footerMessage2+Newligne + Newligne+footMessage3;
			sentMailService.sendMail(commandeId,mailFinal);
		} catch (MailException e) {
			// TODO: handle exception
		}
		return ResponseEntity.ok().body(CommandeUpdatee);
	}
	
	/*rechercher commande byID*/
	@GetMapping("/find/{id}")
	public Commande getCommandeById(@PathVariable(value="id") int commandeId) {
		return commandeRepository.findOne(commandeId);
	}
	
	
	/*supprimer commande*/
	@DeleteMapping("/delete/{id}")
	public ResponseEntity< Commande> deleteCommande(@PathVariable(value="id") int commandeId){
		Commande commande =commandeRepository.findOne(commandeId);
		commandeRepository.delete(commande);
		return ResponseEntity.ok().build();
	}
	

	
	//recherche commande By id pharmacie
	@GetMapping("/findallcommande/{id}")
	public List<Commande> findByPharmacieId(@PathVariable(value="id") int pharmacieId) {
		return commandeRepository.findByPharmacieId(pharmacieId);
	}
	
	
	/*confirmer livraison*/
	@PutMapping("/confirmer/{id}")
	public ResponseEntity<Commande> confirmerCommande(@PathVariable(value="id") int commandeId ,@RequestBody Commande commande){
		Commande commandeUpdate=commandeRepository.findOne(commandeId);
		commandeUpdate.setDateLivraison(commande.getDateLivraison());
		commandeUpdate.setPharmacie(commande.getPharmacie());
		commandeUpdate.setQuantite(commande.getQuantite());
		commandeUpdate.setLivraison("oui");
		commandeUpdate.setDateCommande(commande.getDateCommande());
		Commande CommandeUpdatee =commandeRepository.save(commandeUpdate);
		return ResponseEntity.ok().body(CommandeUpdatee);
	}
	
	
	//recherche commande By id pharmacie
	@GetMapping("/findByDateCommande/{id}")
	public List<Commande> findByPharmacieByDateCommande(@PathVariable(value="id") int pharmacieId) {
		List<Commande> list= commandeRepository.findByPharmacieId(pharmacieId);
		Collections.sort(list,new CommandeComparatorDCommande());
		return list;
	}
	
	//recherche commande By id pharmacie
	@GetMapping("/findByDateLivraison/{id}")
	public List<Commande> findByPharmacieByDatelivraison(@PathVariable(value="id") int pharmacieId) {
		List<Commande> list= commandeRepository.findByPharmacieId(pharmacieId);
		Collections.sort(list,new CommandeComparatorDLivraison());
		return list;
	}
	
	//recherche commande By id pharmacie
	@GetMapping("/findByEtat/{id}")
	public List<Commande> findByPharmacieByEtat(@PathVariable(value="id") int pharmacieId) {
		List<Commande> list= commandeRepository.findByPharmacieId(pharmacieId);
		Collections.sort(list,new 	CommandeComparatorID());
		return list;
		}
	
	
}
