package com.app.Controller.entities;

import java.io.Serializable;



import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.hibernate.validator.internal.util.IgnoreJava6Requirement;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
public class ProduitCommande implements Serializable{

	
	private int quantiteCom;
	private double prix;
	
	
	@EmbeddedId
	private ProduitCommandeID produitCommandeID;
	
	@ManyToOne
	@JsonIgnore
	@JoinColumn(name = "commandeID",referencedColumnName="id", insertable = false, updatable = false)
	private Commande commande;
	
	@ManyToOne
	@JsonIgnore
	@JoinColumn(name = "produitID",referencedColumnName="code", insertable = false, updatable = false)
	private Produit produits;

	public ProduitCommandeID getProduitCommandeID() {
		return produitCommandeID;
	}

	public void setProduitCommandeID(ProduitCommandeID produitCommandeID) {
		this.produitCommandeID = produitCommandeID;
	}

	public Commande getCommande() {
		return commande;
	}

	public void setCommande(Commande commande) {
		this.commande = commande;
	}

	
	public Produit getProduit() {
		return produits;
	}

	public void setProduit(Produit produit) {
		this.produits = produit;
	}

	public ProduitCommande(int quantiteCom, ProduitCommandeID produitCommandeID, Commande commande, Produit produit) {
		super();
		this.quantiteCom = quantiteCom;
		this.produitCommandeID = produitCommandeID;
		this.commande = commande;
		this.produits = produit;
	}

	public ProduitCommande() {
		super();
	}

	public int getQuantiteCom() {
		return quantiteCom;
	}

	public void setQuantiteCom(int quantiteCom) {
		this.quantiteCom = quantiteCom;
	}

	public double getPrix() {
		return prix;
	}

	public void setPrix(double prix) {
		this.prix = prix;
	}

	public ProduitCommande(int quantiteCom, double prix, ProduitCommandeID produitCommandeID, Commande commande,
			Produit produit) {
		super();
		this.quantiteCom = quantiteCom;
		this.prix = prix;
		this.produitCommandeID = produitCommandeID;
		this.commande = commande;
		this.produits = produit;
	}
	
	
	
	
}
