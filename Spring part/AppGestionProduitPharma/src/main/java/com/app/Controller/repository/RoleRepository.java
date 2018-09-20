package com.app.Controller.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.Controller.entities.Role;

public interface RoleRepository extends JpaRepository<Role, Integer>{
	@Query("SELECT u FROM Role u WHERE u.roleName = ?1")
	public Role findByRoleName(String roleName);
}
