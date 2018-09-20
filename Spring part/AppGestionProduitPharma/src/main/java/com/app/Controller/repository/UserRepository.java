package com.app.Controller.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.Controller.entities.AppUser;

public interface UserRepository extends JpaRepository<AppUser,Integer> {
	
	public AppUser findByUsername(String username);
	
	public AppUser findByNom(String nom);
	
}
