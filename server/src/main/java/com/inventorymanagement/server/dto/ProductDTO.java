package com.inventorymanagement.server.dto;

public class ProductDTO {
    private String name;
    private String manufacturer;
    private String description;
    private String partNumber;
    private double price;
    private int categoryId;
    private int quantity;
    private int warehouseId;

    public ProductDTO() {}

    public ProductDTO(String name, String manufacturer, String description, String partNumber, double price, int categoryId, int quantity, int warehouseId) {
        this.name = name;
        this.manufacturer = manufacturer;
        this.description = description;
        this.partNumber = partNumber;
        this.price = price;
        this.categoryId = categoryId;
        this.quantity = quantity;
        this.warehouseId = warehouseId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getManufacturer() {
        return manufacturer;
    }

    public void setManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPartNumber() {
        return partNumber;
    }

    public void setPartNumber(String partNumber) {
        this.partNumber = partNumber;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(int categoryId) {
        this.categoryId = categoryId;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public int getWarehouseId() {
        return warehouseId;
    }

    public void setWarehouseId(int warehouseId) {
        this.warehouseId = warehouseId;
    }


}
