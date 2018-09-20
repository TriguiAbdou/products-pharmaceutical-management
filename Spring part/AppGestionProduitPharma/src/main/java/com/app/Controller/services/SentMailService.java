package com.app.Controller.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class SentMailService {

	private JavaMailSender javaMailSender;
	
	
	@Autowired
	public SentMailService(JavaMailSender javaMailSender) {
		this.javaMailSender=javaMailSender;
	}
	
	public void sendMail(int commandeID,String commandeBody) throws MailException {
		SimpleMailMessage mail=new SimpleMailMessage();
		mail.setTo("abderrahmen.trigui@esprit.tn");
		mail.setFrom("trigui.abdou95@gmail.com");
		mail.setSubject("ID Commande :"+commandeID);
		mail.setText(commandeBody);
		javaMailSender.send(mail);
		
	}
}
