package com.inventorymanagement.server.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.inventorymanagement.server.model.ProductModel;

@Repository
public interface ProductRepository extends JpaRepository<ProductModel, Integer> {
    @Query("SELECT product FROM ProductModel product JOIN FETCH product.category category JOIN FETCH product.inventory inventory JOIN FETCH inventory.warehouse warehouse")
    List<ProductModel> findAllProductInfos();
}
