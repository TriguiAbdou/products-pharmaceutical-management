package com.app.Controller.entities;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;



@Entity
public class Role implements Serializable {
	@Id
	@GeneratedValue
	private int id;
	private String roleName;
	
	@OneToMany(mappedBy="role",fetch=FetchType.EAGER)
	private List<AppUser> users;
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	public String getRoleName() {
		return roleName;
	}
	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}
	public Role(int id, String roleName) {
		super();
		this.id = id;
		this.roleName = roleName;
	}
	public Role(String roleName) {
		super();
		this.roleName = roleName;
	}
	public Role() {
		
	}
	
	
	
	
}
