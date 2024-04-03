package com.inventorymanagement.server.model;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "warehouses")
public class WarehouseModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String location;
    private int capacity;

    @JsonBackReference
    @OneToMany(mappedBy = "warehouse")
    private Set<InventoryModel> inventory;

    public WarehouseModel() {}

    public WarehouseModel(String name, String location, int capacity, Set<InventoryModel> inventory) {
        this.name = name;
        this.location = location;
        this.capacity = capacity;
        this.inventory = inventory;
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

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public Set<InventoryModel> getInventory() {
        return inventory;
    }

    public void setInventory(Set<InventoryModel> inventory) {
        this.inventory = inventory;
    }




}
