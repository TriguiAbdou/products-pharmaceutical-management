package com.app.Controller.entities;

import java.io.Serializable;
import java.sql.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;



@Entity
public class Commande implements Serializable {
	@Id
	@GeneratedValue
	private int id;
	private String dateLivraison ;
	private int quantite;
	private String livraison;
	private String dateCommande;
	
	
	@ManyToOne
	private Pharmacie pharmacie;
	
	@OneToMany(mappedBy = "commande")
	private List<ProduitCommande> produitCommandes;

	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	
	public int getQuantite() {
		return quantite;
	}
	public void setQuantite(int quantite) {
		this.quantite = quantite;
	}
	public Commande(int id,String dateLivraison, int quantite) {
		super();
		this.id = id;
		this.dateLivraison = dateLivraison;
		this.quantite = quantite;
	}
	public Pharmacie getPharmacie() {
		return pharmacie;
	}
	public void setPharmacie(Pharmacie pharmacie) {
		this.pharmacie = pharmacie;
	}
	public List<ProduitCommande> getProduitCommandes() {
		return produitCommandes;
	}
	public void setProduitCommandes(List<ProduitCommande> produitCommandes) {
		this.produitCommandes = produitCommandes;
	}
	public Commande() {
		super();
	}
	public String getDateLivraison() {
		return dateLivraison;
	}
	public void setDateLivraison(String dateLivraison) {
		this.dateLivraison = dateLivraison;
	}
	public String getLivraison() {
		return livraison;
	}
	public void setLivraison(String livraison) {
		this.livraison = livraison;
	}
	public String getDateCommande() {
		return dateCommande;
	}
	public void setDateCommande(String dateCommande) {
		this.dateCommande = dateCommande;
	}
	
	
	
	
	
}
