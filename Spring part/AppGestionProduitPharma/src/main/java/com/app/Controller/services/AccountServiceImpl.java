package com.app.Controller.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.Controller.entities.AppUser;
import com.app.Controller.entities.Pharmacie;
import com.app.Controller.entities.Role;
import com.app.Controller.repository.PharmacieRepository;
import com.app.Controller.repository.RoleRepository;
import com.app.Controller.repository.UserRepository;

@Service
@Transactional
@RestController
@RequestMapping("/users")
public class AccountServiceImpl implements AccountService {
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private RoleRepository roleRepository;
	
	@Autowired
	private PharmacieRepository pharmacieRepository;
	
	
	@Override
	@PostMapping(value="/createUser", produces = "application/json")
	public AppUser save(@RequestBody AppUser user) {
		String hashPWD = bCryptPasswordEncoder.encode(user.getPassword());
		user.setPassword(hashPWD);
		Role role=roleRepository.findByRoleName("user");
		user.setRole(role);
		Pharmacie pharmacie = pharmacieRepository.findOne(75);
		user.setPharmacie(pharmacie);
		return userRepository.save(user);
	}


	@Override
	@PostMapping(value="/createRole", produces = "application/json")
	public Role save(@RequestBody Role role) {
		// TODO Auto-generated method stub
		return roleRepository.save(role);
	}
	
	
	

	@Override
	public void addRoleToUser(String username, String roleName) {
		// TODO Auto-generated method stub
		Role role=roleRepository.findByRoleName(roleName);
		AppUser user=userRepository.findByUsername(username);
		user.setRole(role);
	}

	@Override
	public AppUser findUserByUsername(String username) {
		// TODO Auto-generated method stub
		return userRepository.findByUsername(username);
	}
	
	

}
