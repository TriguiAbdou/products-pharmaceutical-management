package com.app.Controller.entities;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Region implements Serializable {

	@Id
	@GeneratedValue
	private int id ;
	private String nom;
	
	
	@OneToMany(mappedBy="region")
	private List<Pharmacie> pharmacies ;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public Region(int id, String nom) {
		super();
		this.id = id;
		this.nom = nom;
	}
	public Region() {
		super();
	}
	
	
}
