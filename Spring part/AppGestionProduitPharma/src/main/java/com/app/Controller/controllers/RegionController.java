package com.app.Controller.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.Controller.entities.Region;
import com.app.Controller.repository.RegionRepository;

@RestController
@RequestMapping("/region")
@CrossOrigin(origins= "http://localhost:4200",maxAge=3600)
public class RegionController {

	@Autowired
	RegionRepository regionRepository;
	
	@PostMapping(value="/create", consumes = "application/json", produces = "application/json")
	public Region createRegion(@RequestBody Region region) {
		return regionRepository.save(region);
		
	}
}
