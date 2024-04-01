package com.inventorymanagement.server.model;

import java.util.Set;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "products")
public class ProductModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String name;
    private String manufacturer;
    private String description;
    private String partNumber;
    private double price;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private CategoryModel category;

    @OneToMany(mappedBy = "product")
    private Set<InventoryModel> inventory;

    public ProductModel() {}

    public ProductModel(String name, String manufacturer, String description, String partNumber, double price, CategoryModel category) {
        this.name = name;
        this.manufacturer = manufacturer;
        this.description = description;
        this.partNumber = partNumber;
        this.price = price;
        this.category = category;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    public void setPartNiumber(String partNumber) {
        this.partNumber = partNumber;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public CategoryModel getCategory() {
        return category;
    }

    public void setCategory(CategoryModel category) {
        this.category = category;
    }

    public Set<InventoryModel> getInventory() {
        return inventory;
    }

    public void setInventory(Set<InventoryModel> inventory) {
        this.inventory = inventory;
    }

}
