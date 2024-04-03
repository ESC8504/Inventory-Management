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
}
