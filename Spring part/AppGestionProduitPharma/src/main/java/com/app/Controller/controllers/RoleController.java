package com.app.Controller.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.Controller.entities.AppUser;
import com.app.Controller.entities.Role;
import com.app.Controller.repository.RoleRepository;

@RestController
@RequestMapping("/role")
@CrossOrigin(origins= "http://localhost:4200",maxAge=3600)
public class RoleController {
	@Autowired
	private RoleRepository roleRepository;
	
	@GetMapping("/{roleName}")
	public Role findByRoleName(@PathVariable(value="roleName") String roleName) {
		
		return roleRepository.findByRoleName(roleName);
	}
	
}
