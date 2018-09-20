package com.app.Controller.entities;

import java.io.Serializable;

import javax.persistence.Embeddable;

@Embeddable
public class ProduitCommandeID implements Serializable {
	
	private int commandeID;
	private int produitID;
	public ProduitCommandeID(int commandeID, int produitID) {
		super();
		this.commandeID = commandeID;
		this.produitID = produitID;
	}
	public int getCommandeID() {
		return commandeID;
	}
	public void setCommandeID(int commandeID) {
		this.commandeID = commandeID;
	}
	public int getProduitID() {
		return produitID;
	}
	public void setProduitID(int produitID) {
		this.produitID = produitID;
	}
	public ProduitCommandeID() {
		super();
	}
	
	
	
	
}
