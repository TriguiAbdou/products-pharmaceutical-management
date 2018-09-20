package com.app.Controller;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.app.Controller.controllers.UserController;
import com.app.Controller.entities.AppUser;

@SpringBootApplication
@EnableJpaAuditing
public class AppGestionProduitPharmaApplication {

	public static void main(String[] args) {
		SpringApplication.run(AppGestionProduitPharmaApplication.class, args);
		
		
	}
	
	@Bean
	public BCryptPasswordEncoder getBCryptPasswordEncoder() {
		return new BCryptPasswordEncoder();
	}
}
