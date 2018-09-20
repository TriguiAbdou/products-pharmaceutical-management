package com.app.Controller.Comparator;

import java.util.Comparator;

import com.app.Controller.entities.Commande;

public class CommandeComparatorID implements Comparator<Commande>{
	
	@Override
	public int compare(Commande o1, Commande o2) {
		// TODO Auto-generated method stub
		
			int result=o1.getLivraison().compareTo(o2.getLivraison());
			return result;	
		
	}
}
