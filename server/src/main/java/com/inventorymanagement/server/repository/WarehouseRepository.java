package com.inventorymanagement.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.inventorymanagement.server.model.WarehouseModel;

@Repository
public interface WarehouseRepository extends JpaRepository<WarehouseModel, Integer>{

}
