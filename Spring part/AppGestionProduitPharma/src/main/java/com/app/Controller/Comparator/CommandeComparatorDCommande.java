package com.app.Controller.Comparator;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Comparator;
import java.util.Date;

import com.app.Controller.entities.Commande;

public class CommandeComparatorDCommande implements Comparator<Commande>{

	@Override
	public int compare(Commande o1, Commande o2) {
		// TODO Auto-generated method stub
		SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yy");
		try {
			Date d1 = sdf.parse(o1.getDateCommande());
			Date d2= sdf.parse(o2.getDateCommande());
			int result=d1.compareTo(d2);
			return result;
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	return 0;	
		
	}
}
