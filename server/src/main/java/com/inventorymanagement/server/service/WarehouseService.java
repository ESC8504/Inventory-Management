package com.inventorymanagement.server.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.inventorymanagement.server.dto.WarehouseStorageDTO;
import com.inventorymanagement.server.model.InventoryModel;
import com.inventorymanagement.server.model.WarehouseModel;
import com.inventorymanagement.server.repository.InventoryRepository;
import com.inventorymanagement.server.repository.WarehouseRepository;

@Service
public class WarehouseService {

    private final WarehouseRepository warehouseRepository;
    private final InventoryRepository inventoryRepository;

    public WarehouseService(WarehouseRepository warehouseRepository, InventoryRepository inventoryRepository) {
        this.warehouseRepository = warehouseRepository;
        this.inventoryRepository = inventoryRepository;
    }

    public List<WarehouseModel> getAllWarehouses() {
        return warehouseRepository.findAll();
    }

    public WarehouseModel getWarehouseById(int warehouseId) {
        return warehouseRepository.findById(warehouseId).orElse(null);
    }

    public List<WarehouseStorageDTO> getWarehouseStorageInfo() {
        return inventoryRepository.getWarehouseStorageInfo();
    }

    public WarehouseModel saveWarehouse(WarehouseModel warehouse) {
        return warehouseRepository.save(warehouse);
    }

    public WarehouseModel updateWarehouse(int warehouseId, WarehouseModel warehouse) {

        WarehouseModel existingWarehouse = warehouseRepository.findById(warehouseId).orElse(null);

        if (existingWarehouse == null) {
            return null;
        }

        existingWarehouse.setName(warehouse.getName());
        existingWarehouse.setLocation(warehouse.getLocation());
        existingWarehouse.setCapacity(warehouse.getCapacity());
        return warehouseRepository.save(existingWarehouse);
    }

    public boolean canDeleteWarehouse(int warehouseId) {
        List<InventoryModel> inventory = inventoryRepository.findByWarehouseId(warehouseId);
        if (inventory != null && inventory.isEmpty()) {
            warehouseRepository.deleteById(warehouseId);
            return true;
        }
        return false;
    }
}
