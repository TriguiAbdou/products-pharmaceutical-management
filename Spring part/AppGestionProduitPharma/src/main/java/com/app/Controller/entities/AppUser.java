package com.app.Controller.entities;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="users")
public class AppUser implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -4198798702045085583L;
	
	@Id
	@GeneratedValue
	private Integer id;
	private String username;
	private String password;
	private String nom;
	private String prenom;
	
	
	
	@ManyToOne
	private Role role;
	
	@OneToMany(mappedBy="userAdmin")
	private List<Pharmacie> pharmacies_create ;
	
	
	@ManyToOne
	private Pharmacie pharmacie ;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getPrenom() {
		return prenom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}
	
	
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public AppUser(String username, String nom, String prenom, String mdp, Role role) {
		this.username = username;
		this.nom = nom;
		this.prenom = prenom;
		this.password = mdp;
		this.role = role;
	}
	public AppUser(int id, String username, String nom, String prenom, String mdp, Role role) {
		this.id = id;
		this.username = username;
		this.nom = nom;
		this.prenom = prenom;
		this.password = mdp;
		this.role = role;
	}
	
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public Role getRole() {
		return role;
	}
	public void setRole(Role role) {
		this.role = role;
	}
	
	public AppUser() {
	}
	public Pharmacie getPharmacie() {
		return pharmacie;
	}
	public void setPharmacie(Pharmacie pharmacie) {
		this.pharmacie = pharmacie;
	}
	
	
}
