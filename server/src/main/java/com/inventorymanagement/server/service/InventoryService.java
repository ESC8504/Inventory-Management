package com.inventorymanagement.server.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.inventorymanagement.server.model.InventoryModel;
import com.inventorymanagement.server.model.WarehouseModel;
import com.inventorymanagement.server.repository.InventoryRepository;

@Service
public class InventoryService {
    // using constrcutor injection as it is the preferred way by the Spring team (could be wrong here)
    private final InventoryRepository inventoryRepository;
    private final WarehouseService warehouseService;

    public InventoryService(InventoryRepository inventoryRepository, WarehouseService warehouseService) {
        this.inventoryRepository = inventoryRepository;
        this.warehouseService = warehouseService;
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

    public InventoryModel updateInventory(int productId, int warehouseId, int newQuantity) {
        InventoryModel existingInventory = inventoryRepository.findByProductIdAndWarehouseId(productId, warehouseId);

        if (existingInventory == null) {
            return null;
        }

        existingInventory.setQuantity(newQuantity);
        return inventoryRepository.save(existingInventory);
    }

    public int calculateNewTotalQuantity(int warehouseId) {
        List<InventoryModel> inventories = inventoryRepository.findByWarehouseId(warehouseId);
        int totalQuantity = 0;

        for (InventoryModel inventory : inventories) {
            totalQuantity += inventory.getQuantity();
        }

        return totalQuantity;
    }

    public boolean canAddOrUpdateQuantity(int warehouseId, int newQuantityToAdd) {
        WarehouseModel warehouse = warehouseService.getWarehouseById(warehouseId);
        int totalQuantity = calculateNewTotalQuantity(warehouseId);
        int newTotalQuantity = totalQuantity + newQuantityToAdd;
        if (newTotalQuantity <= warehouse.getCapacity()) {
            return true;
        } else {
            return false;
        }
    }
}
