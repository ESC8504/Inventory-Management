package com.inventorymanagement.server.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.inventorymanagement.server.model.WarehouseModel;
import com.inventorymanagement.server.repository.WarehouseRepository;

@Service
public class WarehouseService {

    private final WarehouseRepository warehouseRepository;

    public WarehouseService(WarehouseRepository warehouseRepository) {
        this.warehouseRepository = warehouseRepository;
    }

    public List<WarehouseModel> getAllWarehouses() {
        return warehouseRepository.findAll();
    }

}
