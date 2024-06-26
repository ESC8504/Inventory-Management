package com.inventorymanagement.server.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.inventorymanagement.server.dto.WarehouseStorageDTO;
import com.inventorymanagement.server.model.WarehouseModel;
import com.inventorymanagement.server.service.WarehouseService;

@RestController
@RequestMapping("/warehouse")
public class WarehouseController {
    private final WarehouseService warehouseService;

    public WarehouseController(WarehouseService warehouseService) {
        this.warehouseService = warehouseService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<WarehouseModel>> getAllWarehouses() {
        List<WarehouseModel> warehouses = warehouseService.getAllWarehouses();
        return ResponseEntity.ok(warehouses);
    }

    @GetMapping("/storage-info")
    public ResponseEntity<List<WarehouseStorageDTO>> getWarehouseStorageInfo() {
        List<WarehouseStorageDTO> warehouseStorageInfo = warehouseService.getWarehouseStorageInfo();
        return ResponseEntity.ok(warehouseStorageInfo);
    }

    @PostMapping("/add")
    public ResponseEntity<?> addWarehouse(@RequestBody WarehouseModel warehouse) {
        try {
            WarehouseModel newWarehouse = warehouseService.saveWarehouse(warehouse);
            return ResponseEntity.status(HttpStatus.CREATED).body(newWarehouse);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        }
    }

    @PutMapping("/update/{warehouseId}")
    public ResponseEntity<?> updateWarehouse(@PathVariable int warehouseId, @RequestBody WarehouseModel warehouse) {
        try {
            WarehouseModel updatedWarehouse = warehouseService.updateWarehouse(warehouseId, warehouse);

            return ResponseEntity.ok(updatedWarehouse);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        }
    }

    @DeleteMapping("/delete/{warehouseId}")
    public ResponseEntity<?> deleteWarehouse(@PathVariable int warehouseId) {
        try {
            boolean canDeleted = warehouseService.canDeleteWarehouse(warehouseId);
            if (!canDeleted) {
                return ResponseEntity.badRequest().body("Warehouse cannot be deleted as it has associated products");
            }

            return ResponseEntity.ok("Warehouse deleted");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        }
    }
}
