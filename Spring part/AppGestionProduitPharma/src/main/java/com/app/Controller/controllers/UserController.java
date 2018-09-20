package com.app.Controller.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.Controller.entities.AppUser;
import com.app.Controller.entities.Produit;
import com.app.Controller.repository.UserRepository;



@RestController
@RequestMapping("/users")
@CrossOrigin(origins= "http://localhost:4200",maxAge=3600)
public class UserController {

	@Autowired
	private UserRepository userRepository;
	/*
	@GetMapping("/find/{id}")
	public AppUser findByUsername( @PathVariable(value="id") int produitId) {
		return userRepository.findOne(produitId);
		
	}*/
	
	
	@GetMapping("/{username}")
	public AppUser findByUsername(@PathVariable(value="username") String username) {
		
		return userRepository.findByUsername(username);
	}
	
	
	
	@GetMapping("/IDpharmacie/{username}")
	public int findByUsername1(@PathVariable(value="username") String username) {
		
		AppUser user=userRepository.findByUsername(username);
		
		return user.getPharmacie().getId();
	}
}
