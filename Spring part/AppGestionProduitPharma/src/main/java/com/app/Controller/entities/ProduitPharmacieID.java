package com.app.Controller.entities;

import java.io.Serializable;

import javax.persistence.Embeddable;

@Embeddable
public class ProduitPharmacieID implements Serializable {
	
	private int produitID;
	private int pharmacieID;
	public int getProduitID() {
		return produitID;
	}
	public void setProduitID(int produitID) {
		this.produitID = produitID;
	}
	public int getPharmacieID() {
		return pharmacieID;
	}
	public void setPharmacieID(int pharmacieID) {
		this.pharmacieID = pharmacieID;
	}
	public ProduitPharmacieID(int produitID, int pharmacieID) {
		super();
		this.produitID = produitID;
		this.pharmacieID = pharmacieID;
	}
	public ProduitPharmacieID() {
		super();
	}
	
	
	
	
	
	
	
}
