package com.inventorymanagement.server.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.inventorymanagement.server.model.CategoryModel;
import com.inventorymanagement.server.repository.CategoryRepository;

@Service
public class CategoryService {
    private final CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public List<CategoryModel> getAllCategories() {
        return categoryRepository.findAll();
    }

    public CategoryModel getCategoryById(int categoryId) {
        return categoryRepository.findById(categoryId).orElse(null);
    }

    public CategoryModel saveCategory(CategoryModel category) {
        return categoryRepository.save(category);
    }

    public CategoryModel updateCategory(int categoryId, CategoryModel category) {

        CategoryModel existingCategory = categoryRepository.findById(categoryId).orElse(null);

        if (existingCategory == null) {
            return null;
        }

        existingCategory.setName(category.getName());
        return categoryRepository.save(existingCategory);
    }

    public boolean canDeleteCategory(int categoryId) {
        CategoryModel category = categoryRepository.findById(categoryId).orElse(null);
        // check if category exists and has no products associated
        if (category != null && category.getProducts().isEmpty()) {
            categoryRepository.deleteById(categoryId);
            return true;
        }
        return false;
    }
}

