package com.app.Controller.services;

import com.app.Controller.entities.AppUser;
import com.app.Controller.entities.Role;

public interface AccountService {
	public AppUser save(AppUser user);
	public Role save(Role role);
	public void addRoleToUser(String username,String roleName);
	public AppUser findUserByUsername(String username);
}
