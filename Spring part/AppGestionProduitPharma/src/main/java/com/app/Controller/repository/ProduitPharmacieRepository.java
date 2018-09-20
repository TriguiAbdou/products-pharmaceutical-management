package com.app.Controller.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.test.annotation.ProfileValueUtils;

import com.app.Controller.entities.ProduitPharmacie;
import com.app.Controller.entities.ProduitPharmacieID;

public interface ProduitPharmacieRepository extends JpaRepository<ProduitPharmacie,ProduitPharmacieID> {

   public List<ProduitPharmacie> findByPharmacieId(int id);
   public ProduitPharmacie findByProduitCodeAndPharmacieId(int idProduit,int idPharmacie);
   public List<ProduitPharmacie> findByPharmacieRegionNomAndProduitNom(String nomProduit,String nomRegion );
   public List<ProduitPharmacie> findByProduitNomAndPharmacieRegionNom(String nomProduit,String nomRegion);	
   public ProduitPharmacie findByProduitCode(int id);
}
