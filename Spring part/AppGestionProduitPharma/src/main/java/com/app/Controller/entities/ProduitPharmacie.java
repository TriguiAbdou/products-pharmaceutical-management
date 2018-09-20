package com.app.Controller.entities;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class ProduitPharmacie implements Serializable {
	
	private double prixVente;
	private int quantite;
	private String dfc;
	private int npr;
	
	
	@EmbeddedId
	private ProduitPharmacieID produitPharmacieID;
	
	
	@ManyToOne
	@JoinColumn(name = "pharmacieID",referencedColumnName="id", insertable = false, updatable = false)
	private Pharmacie pharmacie;
	
	@ManyToOne
	@JoinColumn(name ="produitID",referencedColumnName="code", insertable = false, updatable = false)
	private Produit produit;

	public ProduitPharmacieID getProduitPharmacieID() {
		return produitPharmacieID;
	}

	public void setProduitPharmacieID(ProduitPharmacieID produitPharmacieID) {
		this.produitPharmacieID = produitPharmacieID;
	}

	public Pharmacie getPharmacie() {
		return pharmacie;
	}

	public void setPharmacie(Pharmacie pharmacie) {
		this.pharmacie = pharmacie;
	}

	public Produit getProduit() {
		return produit;
	}

	public void setProduit(Produit produit) {
		this.produit = produit;
	}

	public ProduitPharmacie(ProduitPharmacieID produitPharmacieID, Pharmacie pharmacie, Produit produit) {
		super();
		this.produitPharmacieID = produitPharmacieID;
		this.pharmacie = pharmacie;
		this.produit = produit;
	}

	public ProduitPharmacie() {
		super();
	}

	public double getPrixVente() {
		return prixVente;
	}

	public void setPrixVente(double prixVente) {
		this.prixVente = prixVente;
	}

	public int getQuantite() {
		return quantite;
	}

	public void setQuantite(int quantite) {
		this.quantite = quantite;
	}


	public String getDfc() {
		return dfc;
	}

	public void setDfc(String dfc) {
		this.dfc = dfc;
	}

	public int getNpr() {
		return npr;
	}

	public void setNpr(int npr) {
		this.npr = npr;
	}

	
	public ProduitPharmacie(double prixVente, int quantite, int npr, ProduitPharmacieID produitPharmacieID,
			Pharmacie pharmacie, Produit produit) {
		super();
		this.prixVente = prixVente;
		this.quantite = quantite;
		this.npr = npr;
		this.produitPharmacieID = produitPharmacieID;
		this.pharmacie = pharmacie;
		this.produit = produit;
	}

	public ProduitPharmacie(double prixVente, int quantite, String dfc, int npr, ProduitPharmacieID produitPharmacieID,
			Pharmacie pharmacie, Produit produit) {
		super();
		this.prixVente = prixVente;
		this.quantite = quantite;
		this.dfc = dfc;
		this.npr = npr;
		this.produitPharmacieID = produitPharmacieID;
		this.pharmacie = pharmacie;
		this.produit = produit;
	}

	
	
	
	
	

}
