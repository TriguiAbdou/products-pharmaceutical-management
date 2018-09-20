package com.app.Controller.entities;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Pharmacie implements Serializable{
	@Id
	@GeneratedValue
	private int id;
	private String nom;
	private String adresse;
	private Long tel;
	private String mail;
	
	
	@ManyToOne
	private AppUser userAdmin;
	
	@OneToMany(mappedBy="pharmacie")
	private List<AppUser> usersGphs ;
	
	@OneToMany(mappedBy="pharmacie")
	private List<Commande> commandes  ;
	
	@ManyToOne
	private Region region;
	
	@OneToMany(mappedBy = "pharmacie")
	private List<ProduitPharmacie> produitPharmacies; 
	
	
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getAdresse() {
		return adresse;
	}
	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}
	public Long getTel() {
		return tel;
	}
	public void setTel(Long tel) {
		this.tel = tel;
	}
	public String getMail() {
		return mail;
	}
	public void setMail(String mail) {
		this.mail = mail;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public Pharmacie(int id, String nom, String adresse, Long tel, String mail) {
		super();
		this.id = id;
		this.nom = nom;
		this.adresse = adresse;
		this.tel = tel;
		this.mail = mail;
	}
	public Pharmacie() {
		super();
	}
	public Region getRegion() {
		return region;
	}
	public void setRegion(Region region) {
		this.region = region;
	}
	
	
}
