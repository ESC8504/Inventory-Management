package com.inventorymanagement.server.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.inventorymanagement.server.dto.WarehouseStorageDTO;
import com.inventorymanagement.server.model.InventoryModel;

@Repository
public interface InventoryRepository extends JpaRepository<InventoryModel, Integer> {
    List<InventoryModel> findByWarehouseId(int productId);

    InventoryModel findByProductIdAndWarehouseId(int productId, int warehouseId);

    // newly added warehouse's storage should defualt to 0 instead of null
    @Query("SELECT new com.inventorymanagement.server.dto.WarehouseStorageDTO(warehouse.id, warehouse.name, warehouse.location, warehouse.capacity, COALESCE(SUM(inventory.quantity), 0)) FROM WarehouseModel warehouse LEFT JOIN InventoryModel inventory ON warehouse.id = inventory.warehouse.id GROUP BY warehouse.id, warehouse.name, warehouse.location, warehouse.capacity")
    List<WarehouseStorageDTO> getWarehouseStorageInfo();
}
