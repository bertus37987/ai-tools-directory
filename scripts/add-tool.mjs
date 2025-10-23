#!/usr/bin/env node
/**
 * Add New AI Tool Script
 * Usage: node scripts/add-tool.mjs <id> <name> <category_id> <description> <website_url> [affiliate_link]
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toolsPath = path.join(__dirname, '../data/tools.json');

function generateSlug(text) {
  return text.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim('-');
}

function validateUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

function main() {
  const [,, id, name, categoryId, description, websiteUrl, affiliateLink = ''] = process.argv;
  
  if (!id || !name || !categoryId || !description || !websiteUrl) {
    console.error('Usage: node add-tool.mjs <id> <name> <category_id> <description> <website_url> [affiliate_link]');
    console.error('\nExample:');
    console.error('node scripts/add-tool.mjs my-ai-tool "My AI Tool" text-ai "Amazing AI tool for text generation" https://example.com https://example.com?ref=platform');
    process.exit(1);
  }
  
  if (!validateUrl(websiteUrl)) {
    console.error('Error: Invalid website URL');
    process.exit(1);
  }
  
  if (affiliateLink && !validateUrl(affiliateLink)) {
    console.error('Error: Invalid affiliate link URL');
    process.exit(1);
  }
  
  // Load existing tools
  let tools = [];
  try {
    const data = fs.readFileSync(toolsPath, 'utf-8');
    tools = JSON.parse(data);
  } catch (error) {
    console.error('Error reading tools.json:', error.message);
    process.exit(1);
  }
  
  // Check for duplicate ID
  if (tools.find(tool => tool.id === id)) {
    console.error(`Error: Tool with ID '${id}' already exists`);
    process.exit(1);
  }
  
  // Create new tool object
  const now = new Date().toISOString();
  const newTool = {
    id,
    name,
    slug: generateSlug(name),
    category_id: categoryId,
    short_description: description,
    long_description: description,
    logo_url: `https://via.placeholder.com/200x200/4ECDC4/FFFFFF?text=${encodeURIComponent(name.substring(0, 3).toUpperCase())}`,
    website_url: websiteUrl,
    affiliate_link: affiliateLink,
    pricing: {
      type: 'paid',
      starting_price: 0,
      currency: 'USD',
      billing_cycle: 'monthly'
    },
    features: [],
    tags: [],
    rating: 0,
    reviews_count: 0,
    deal: {
      active: false,
      discount: '',
      badge: '',
      expires_at: ''
    },
    meta: {
      created_at: now,
      updated_at: now,
      status: 'published'
    }
  };
  
  // Add to array and save
  tools.push(newTool);
  
  try {
    fs.writeFileSync(toolsPath, JSON.stringify(tools, null, 2));
    console.log(`✅ Successfully added tool: ${name} (${id})`);
    console.log(`📝 Edit data/tools.json to add more details like pricing, features, and ratings.`);
  } catch (error) {
    console.error('Error saving tools.json:', error.message);
    process.exit(1);
  }
}

main();