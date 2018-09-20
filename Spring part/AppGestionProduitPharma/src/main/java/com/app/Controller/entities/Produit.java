package com.app.Controller.entities;

import java.io.Serializable;
import java.sql.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Produit implements Serializable {
	@Id
	@GeneratedValue
	private int code;
	private String nom;
	private String generique;
	private double prixA;
	private int quantite;
	
	
	@OneToMany(mappedBy = "produits")
	private List<ProduitCommande> produitCommandes;
	
	
	@OneToMany(mappedBy = "produit")
	private List<ProduitPharmacie> produitPharmacies; 
	
	public int getCode() {
		return code;
	}
	public void setCode(int code) {
		this.code = code;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getGenerique() {
		return generique;
	}
	public void setGenerique(String generique) {
		this.generique = generique;
	}
	
	public double getPrixA() {
		return prixA;
	}
	public void setPrixA(double prixA) {
		this.prixA = prixA;
	}
	public int getQuantite() {
		return quantite;
	}
	public void setQuantite(int quantite) {
		this.quantite = quantite;
	}
	public Produit(String nom, String generique, Date dfc, double prixA, int quantite) {
		super();
		this.nom = nom;
		this.generique = generique;
		this.prixA = prixA;
		this.quantite = quantite;
	}
	public Produit(String nom, String generique) {
		super();
		this.nom = nom;
		this.generique = generique;
	}
	public Produit() {
		super();
	}
	
	
	

}
