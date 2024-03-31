package com.inventorymanagement.server.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.inventorymanagement.server.model.InventoryModel;
import com.inventorymanagement.server.service.InventoryService;

@RestController
@RequestMapping("/inventory")
public class InventoryController {

    private final InventoryService inventoryService;

    public InventoryController(InventoryService inventoryService) {
        this.inventoryService = inventoryService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<InventoryModel>> getAllInventories() {
        List <InventoryModel> inventories = inventoryService.getAllInventories();
        return ResponseEntity.ok(inventories);
    }

    @GetMapping("/warehouse/{warehouseId}")
    public ResponseEntity<List<InventoryModel>> getInventoriesByWarehouseId(@PathVariable int warehouseId) {
        List <InventoryModel> inventories = inventoryService.getInventoriesByWarehouseId(warehouseId);
        return ResponseEntity.ok(inventories);
    }
}
