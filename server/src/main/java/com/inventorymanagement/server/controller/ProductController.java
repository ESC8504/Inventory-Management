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

import com.inventorymanagement.server.dto.ProductDTO;
import com.inventorymanagement.server.model.CategoryModel;
import com.inventorymanagement.server.model.InventoryModel;
import com.inventorymanagement.server.model.ProductModel;
import com.inventorymanagement.server.model.WarehouseModel;
import com.inventorymanagement.server.service.CategoryService;
import com.inventorymanagement.server.service.InventoryService;
import com.inventorymanagement.server.service.ProductService;
import com.inventorymanagement.server.service.WarehouseService;

@RestController
@RequestMapping("/product")
public class ProductController {
    private final ProductService productService;
    private final WarehouseService warehouseService;
    private final InventoryService inventoryService;
    private final CategoryService categoryService;

    public ProductController(ProductService productService, WarehouseService warehouseService, InventoryService inventoryService, CategoryService categoryService) {
        this.productService = productService;
        this.warehouseService = warehouseService;
        this.inventoryService = inventoryService;
        this.categoryService = categoryService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<ProductModel>> getAllProductInfos() {
        List<ProductModel> products = productService.getAllProductInfos();
        return ResponseEntity.ok(products);
    }

    @GetMapping("/warehouse/{warehouseId}")
    public ResponseEntity<List<ProductModel>> getProductsByWarehouseId(@PathVariable int warehouseId) {
        List<ProductModel> products = productService.getProductsByWarehouseId(warehouseId);
        return ResponseEntity.ok(products);
    }

    @PostMapping("/add")
    public ResponseEntity<?> addProduct(@RequestBody ProductDTO productDTO) {
        try {
            boolean canAdd = productService.canAddOrUpdateProduct(productDTO);
            if (canAdd) {
                CategoryModel category = categoryService.getCategoryById(productDTO.getCategoryId());
                WarehouseModel warehouse = warehouseService.getWarehouseById(productDTO.getWarehouseId());

                ProductModel product = new ProductModel(
                    productDTO.getName(),
                    productDTO.getManufacturer(),
                    productDTO.getDescription(),
                    productDTO.getPartNumber(),
                    productDTO.getPrice(),
                    category
                );

                product = productService.saveProduct(product);

                InventoryModel inventory = new InventoryModel(product, warehouse, productDTO.getQuantity());

                inventoryService.saveInventory(inventory);

                return ResponseEntity.status(HttpStatus.CREATED).body(product);
            }

            return ResponseEntity.badRequest().body("Adding this product exceeds warehouse capacity.");

        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        }
    }

    @PutMapping("/update/{productId}")
    public ResponseEntity<?> updateProduct(@PathVariable int productId, @RequestBody ProductDTO productDTO) {
        try {
            boolean canUpdate = productService.canAddOrUpdateProduct(productDTO);

            if (canUpdate) {
                ProductModel updatedProduct = productService.updateProduct(productId, productDTO);

                return ResponseEntity.ok(updatedProduct);
            }

            return ResponseEntity.badRequest().body("Updating this product exceeds warehouse capacity.");

        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        }
    }

    @DeleteMapping("/delete/{productId}")
    public ResponseEntity<?> deleteProduct(@PathVariable int productId) {
        try {
            productService.deleteProduct(productId);

            return ResponseEntity.ok("Product deleted");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        }
    }
}
