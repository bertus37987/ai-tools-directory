#!/usr/bin/env node
/**
 * Data Validation Script
 * Validates JSON files against schemas
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function loadJson(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    console.error(`❌ Error loading ${filePath}:`, error.message);
    return null;
  }
}

function validateTools(tools) {
  const errors = [];
  const ids = new Set();
  const slugs = new Set();
  
  tools.forEach((tool, index) => {
    const prefix = `Tool ${index + 1} (${tool.id || 'unknown'})`;
    
    // Required fields
    if (!tool.id) errors.push(`${prefix}: Missing 'id'`);
    if (!tool.name) errors.push(`${prefix}: Missing 'name'`);
    if (!tool.category_id) errors.push(`${prefix}: Missing 'category_id'`);
    if (!tool.short_description) errors.push(`${prefix}: Missing 'short_description'`);
    if (!tool.website_url) errors.push(`${prefix}: Missing 'website_url'`);
    
    // ID validation
    if (tool.id) {
      if (!/^[a-z0-9-]+$/.test(tool.id)) {
        errors.push(`${prefix}: Invalid ID format (use lowercase, numbers, hyphens only)`);
      }
      if (ids.has(tool.id)) {
        errors.push(`${prefix}: Duplicate ID '${tool.id}'`);
      }
      ids.add(tool.id);
    }
    
    // Slug validation
    if (tool.slug) {
      if (slugs.has(tool.slug)) {
        errors.push(`${prefix}: Duplicate slug '${tool.slug}'`);
      }
      slugs.add(tool.slug);
    }
    
    // Description length
    if (tool.short_description && tool.short_description.length > 220) {
      errors.push(`${prefix}: Short description too long (${tool.short_description.length}/220 chars)`);
    }
    
    // URL validation
    if (tool.website_url) {
      try {
        new URL(tool.website_url);
      } catch {
        errors.push(`${prefix}: Invalid website URL`);
      }
    }
    
    // Status validation
    if (tool.meta && tool.meta.status && !['draft', 'published', 'archived'].includes(tool.meta.status)) {
      errors.push(`${prefix}: Invalid status '${tool.meta.status}'`);
    }
  });
  
  return errors;
}

function validateCategories(categories) {
  const errors = [];
  const ids = new Set();
  const slugs = new Set();
  
  categories.forEach((category, index) => {
    const prefix = `Category ${index + 1} (${category.id || 'unknown'})`;
    
    // Required fields
    if (!category.id) errors.push(`${prefix}: Missing 'id'`);
    if (!category.name) errors.push(`${prefix}: Missing 'name'`);
    if (!category.description) errors.push(`${prefix}: Missing 'description'`);
    
    // Duplicates
    if (category.id) {
      if (ids.has(category.id)) {
        errors.push(`${prefix}: Duplicate ID '${category.id}'`);
      }
      ids.add(category.id);
    }
    
    if (category.slug) {
      if (slugs.has(category.slug)) {
        errors.push(`${prefix}: Duplicate slug '${category.slug}'`);
      }
      slugs.add(category.slug);
    }
    
    // Color validation
    if (category.color && !/^#[0-9A-Fa-f]{6}$/.test(category.color)) {
      errors.push(`${prefix}: Invalid color format (use #RRGGBB)`);
    }
  });
  
  return errors;
}

function validateCrossReferences(tools, categories) {
  const errors = [];
  const categoryIds = new Set(categories.map(c => c.id));
  
  tools.forEach(tool => {
    if (tool.category_id && !categoryIds.has(tool.category_id)) {
      errors.push(`Tool ${tool.id}: References unknown category '${tool.category_id}'`);
    }
  });
  
  return errors;
}

function main() {
  console.log('🔍 Validating AI Tools Directory data...\n');
  
  const dataDir = path.join(__dirname, '../data');
  
  // Load data files
  const tools = loadJson(path.join(dataDir, 'tools.json'));
  const categories = loadJson(path.join(dataDir, 'categories.json'));
  const deals = loadJson(path.join(dataDir, 'featured-deals.json'));
  
  if (!tools || !categories || !deals) {
    console.error('❌ Failed to load data files');
    process.exit(1);
  }
  
  let allErrors = [];
  
  // Validate individual files
  console.log('📋 Validating categories...');
  const categoryErrors = validateCategories(categories);
  allErrors.push(...categoryErrors);
  
  console.log('🔧 Validating tools...');
  const toolErrors = validateTools(tools);
  allErrors.push(...toolErrors);
  
  console.log('🎯 Validating cross-references...');
  const crossRefErrors = validateCrossReferences(tools, categories);
  allErrors.push(...crossRefErrors);
  
  // Report results
  console.log('\n📊 Validation Results:');
  console.log(`Categories: ${categories.length}`);
  console.log(`Tools: ${tools.length}`);
  console.log(`Deals: ${deals.length}`);
  
  if (allErrors.length === 0) {
    console.log('\n✅ All validations passed!');
  } else {
    console.log(`\n❌ Found ${allErrors.length} error(s):\n`);
    allErrors.forEach(error => console.log(`  • ${error}`));
    process.exit(1);
  }
}

main();