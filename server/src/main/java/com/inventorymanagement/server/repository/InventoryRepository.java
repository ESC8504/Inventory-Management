package com.inventorymanagement.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.inventorymanagement.server.model.InventoryModel;

@Repository
public interface InventoryRepository extends JpaRepository<InventoryModel, Integer> {

}
