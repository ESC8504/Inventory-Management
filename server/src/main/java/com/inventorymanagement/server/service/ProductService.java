package com.inventorymanagement.server.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.inventorymanagement.server.dto.ProductDTO;
import com.inventorymanagement.server.model.CategoryModel;
import com.inventorymanagement.server.model.ProductModel;
import com.inventorymanagement.server.model.WarehouseModel;
import com.inventorymanagement.server.repository.ProductRepository;

@Service
public class ProductService {
    private final ProductRepository productRepository;
    private final CategoryService categoryService;
    private final WarehouseService warehouseService;
    private final InventoryService inventoryService;

    public ProductService(ProductRepository productRepository, CategoryService categoryService, WarehouseService warehouseService, InventoryService inventoryService) {
        this.productRepository = productRepository;
        this.categoryService = categoryService;
        this.warehouseService = warehouseService;
        this.inventoryService = inventoryService;
    }

    public List<ProductModel> getAllProducts() {
        return productRepository.findAll();
    }

    public ProductModel saveProduct(ProductModel product) {
        return productRepository.save(product);
    }

    public List<ProductModel> getAllProductInfos() {
        return productRepository.findAllProductInfos();
    }

    public ProductModel updateProduct(int productId, ProductDTO productDTO) {

            ProductModel existingProduct = productRepository.findById(productId).orElse(null);

            if (existingProduct == null) {
                return null;
            }

            CategoryModel category = categoryService.getCategoryById(productDTO.getCategoryId());

            WarehouseModel warehouse = warehouseService.getWarehouseById(productDTO.getWarehouseId());

            existingProduct.setName(productDTO.getName());
            existingProduct.setManufacturer(productDTO.getManufacturer());
            existingProduct.setDescription(productDTO.getDescription());
            existingProduct.setPartNumber(productDTO.getPartNumber());
            existingProduct.setPrice(productDTO.getPrice());
            existingProduct.setCategory(category);
            inventoryService.updateInventory(existingProduct.getId(),
            warehouse.getId(), productDTO.getQuantity());

            return productRepository.save(existingProduct);
    }

}
