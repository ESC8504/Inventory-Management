package com.inventorymanagement.server.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.inventorymanagement.server.model.InventoryModel;
import com.inventorymanagement.server.repository.InventoryRepository;

@Service
public class InventoryService {
    // using constrcutor injection as it is the preferred way by the Spring team (could be wrong here)
    private InventoryRepository inventoryRepository;

    public InventoryService(InventoryRepository inventoryRepository) {
        this.inventoryRepository = inventoryRepository;
    }

    public List<InventoryModel> getAllInventories() {
        return inventoryRepository.findAll();
    }

    public InventoryModel saveInventory(InventoryModel inventory) {
        return inventoryRepository.save(inventory);
    }

    public List<InventoryModel> getInventoriesByWarehouseId(int warehouseId) {
        return inventoryRepository.findByWarehouseId(warehouseId);
    }
}
