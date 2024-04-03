package com.inventorymanagement.server.dto;

public class WarehouseStorageDTO {
    private int warehouseId;
    private String warehouseName;
    private String warehouseLocation;
    private int capacity;
    private long totalQuantity;

    public WarehouseStorageDTO() {}

    public WarehouseStorageDTO(int warehouseId, String warehouseName, String warehouseLocation, int capacity, long totalQuantity) {
        this.warehouseId = warehouseId;
        this.warehouseName = warehouseName;
        this.warehouseLocation = warehouseLocation;
        this.capacity = capacity;
        this.totalQuantity = totalQuantity;
    }

    public int getWarehouseId() {
        return warehouseId;
    }

    public void setWarehouseId(int warehouseId) {
        this.warehouseId = warehouseId;
    }

    public String getWarehouseName() {
        return warehouseName;
    }

    public void setWarehouseName(String warehouseName) {
        this.warehouseName = warehouseName;
    }

    public String getWarehouseLocation() {
        return warehouseLocation;
    }

    public void setWarehouseLocation(String warehouseLocation) {
        this.warehouseLocation = warehouseLocation;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public long getTotalQuantity() {
        return totalQuantity;
    }

    public void setTotalQuantity(long totalQuantity) {
        this.totalQuantity = totalQuantity;
    }


}
