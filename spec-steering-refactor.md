# spec-steering-refactor (Indian Restaurant E-commerce)

Perform intelligent analysis of the entire Indian restaurant e-commerce codebase to create, update, and maintain project steering context documentation with confidence tracking and cleanup capabilities.

## Usage
```bash
/spec-steering-refactor [mode] [options]
```

## Modes
- `--quick`: Basic structure scan only
- `--standard`: Recommended depth analysis  
- `--deep`: Comprehensive pattern analysis

## Options
- `--backup`: Create timestamped backups before modifications
- `--dry-run`: Preview all changes without modifying files
- `--incremental`: Only analyze files changed since last scan
- `--cleanup`: Archive scattered .md files and consolidate context
- `--focus <area>`: Focus on specific area (menu|orders|kitchen|delivery|customer)
- `--confidence`: Show confidence levels for auto-detected patterns
- `--force`: Skip confirmation prompts

## Core Features

### 1. Restaurant Context Cleanup & Consolidation

```javascript
// Scan patterns for restaurant steering-related .md files
const restaurantSteeringPatterns = [
  '**/README*.md',
  '**/MENU*.md',
  '**/KITCHEN*.md',
  '**/ORDERS*.md',
  '**/DELIVERY*.md',
  '**/RESTAURANT*.md',
  '**/ARCHITECTURE*.md',
  '**/CONTRIBUTING*.md',
  '**/docs/**/*.md',
  '**/documentation/**/*.md',
  '**/*context*.md',
  '**/*steering*.md',
  '**/*guide*.md',
  '**/*spec*.md',
  '**/*cuisine*.md',
  '**/*menu-management*.md'
];

// Keywords indicating restaurant steering context
const restaurantSteeringKeywords = [
  'menu', 'food', 'cuisine', 'recipe', 'ingredients',
  'kitchen', 'orders', 'delivery', 'pickup', 'dine-in',
  'spice level', 'dietary', 'allergies', 'vegetarian',
  'payment', 'cart', 'checkout', 'inventory',
  'restaurant', 'catering', 'reservations',
  'pos system', 'kitchen display', 'food safety',
  'architecture', 'structure', 'conventions',
  'standards', 'patterns', 'guidelines',
  'workflow', 'development', 'technical',
  'business logic', 'domain', 'requirements', 'context', 'design', 'project'
];
```

### 2. Multi-Phase Restaurant Analysis Process

#### Phase 0: Cleanup & Discovery
```yaml
tasks:
  - Scan entire project for .md files
  - Analyze content for restaurant-specific information
  - Identify duplicate or outdated menu documentation
  - Create inventory of existing restaurant context files
  - Generate cleanup plan for food service documentation
```

#### Phase 1: Current Restaurant State Analysis
```yaml
analysis:
  existing_context:
    - Load .claude/steering/* files
    - Parse scattered restaurant documentation
    - Extract key food service patterns and standards
    - Create baseline snapshot of restaurant operations
  
  metadata_extraction:
    - Package managers: package.json, pnpm-workspace.yaml
    - Config files: tsconfig.json, .eslintrc
    - Build tools: vite.config, next.config
    - Environment: .env.example patterns (payment gateways, delivery APIs)
    - Restaurant configs: menu.json, spice-levels.json, dietary-tags.json
```

#### Phase 2: Restaurant Technology-Agnostic Deep Scan
```javascript
const restaurantAnalyzers = {
  frontend: {
    detect: ['react', 'vue', 'angular', 'svelte'],
    patterns: ['menu-components', 'cart-components', 'order-tracking']
  },
  backend: {
    detect: ['express', 'fastify', 'nestjs', 'hono'],
    patterns: ['menu-controllers', 'order-services', 'kitchen-middleware', 'delivery-apis']
  },
  database: {
    detect: ['prisma', 'typeorm', 'mikro-orm', 'mongoose'],
    patterns: ['menu-entities', 'order-schemas', 'customer-profiles', 'inventory-models']
  },
  cms: {
    detect: ['sanity', 'strapi', 'contentful', 'payload'],
    patterns: ['menu-schemas', 'ingredient-collections', 'dietary-plugins']
  },
  ecommerce: {
    detect: ['medusa', 'shopify', 'commercetools'],
    patterns: ['food-products', 'restaurant-carts', 'food-orders', 'meal-payments']
  },
  restaurant_specific: {
    detect: ['pos-systems', 'kitchen-display', 'delivery-platforms'],
    patterns: ['order-queue', 'preparation-tracking', 'driver-management']
  },
  food_safety: {
    detect: ['allergen-management', 'haccp-compliance', 'inventory-tracking'],
    patterns: ['ingredient-tracking', 'expiry-management', 'temperature-logs']
  }
};
```

#### Phase 3: Restaurant Pattern Recognition with Confidence Scoring
```yaml
pattern_detection:
  high_confidence: # 90-100%
    - Menu structure analysis
    - Order flow patterns
    - Payment integration
    - Explicit food dependencies
    - Kitchen workflow configuration
    
  medium_confidence: # 60-89%
    - Spice level conventions
    - Dietary filtering patterns
    - Regional cuisine organization
    - Delivery zone management
    - Customer preference handling
    
  low_confidence: # Below 60%
    - Recipe business rules inference
    - Customer taste preference mapping
    - Seasonal menu pattern detection
    - Cultural cuisine authenticity rules
```

#### Phase 4: Restaurant Intelligent Gap Analysis
```javascript
const restaurantGapAnalysis = {
  documented_vs_actual: compareRestaurantPatterns(),
  missing_documentation: findUndocumentedFoodFeatures(),
  outdated_practices: identifyDeprecatedMenuPatterns(),
  inconsistencies: detectConflictingFoodRules(),
  new_domains: discoverEmergingRestaurantPatterns(),
  food_safety_gaps: identifyComplianceGaps(),
  menu_optimization: findMenuPerformanceGaps()
};
```

#### Phase 5: Restaurant Steering Document Generation

## Core Files (Always Created/Updated)

### tech.md
```markdown
# Restaurant Technical Architecture & Standards
<!-- Auto-generated: 2024-01-20 | Confidence: High -->

## Restaurant Technology Stack
<!-- Confidence: 95% - Based on package.json and imports -->
### Frontend (Customer-Facing)
- Menu browsing and ordering interface
- Real-time order tracking
- Customer profile management

### Backend (Restaurant Operations)  
- Kitchen order management system
- Inventory tracking
- Delivery coordination
- POS system integration

### Food Service Integrations
- Payment gateways (Stripe, Square)
- Delivery platforms (Uber Eats, DoorDash)
- Kitchen display systems
- Inventory management tools

## Restaurant Architecture Patterns
<!-- Confidence: 75% - Inferred from code structure -->
### Menu Management Pattern
[Menu item lifecycle, category organization, pricing strategies]

### Order Processing Pattern
[Order flow from placement to completion, kitchen workflow]

### Customer Experience Pattern  
[Personalization, dietary preferences, loyalty programs]

## Food Service Code Standards
<!-- Confidence: 90% - Based on config files -->
### Menu Item Naming Conventions
- English names with Hindi transliterations
- Ingredient transparency requirements
- Spice level standardization

### Order Management Standards
[Kitchen communication protocols, timing standards]

## Restaurant Performance Patterns
<!-- Confidence: 70% - Detected optimizations -->
[Menu image optimization, order queue management, delivery routing]
```

### product.md
```markdown
# Restaurant Product Vision & Business Context
<!-- Auto-generated with manual review needed -->

## Indian Cuisine Domain Models
<!-- Confidence: 85% - Based on data structures -->
### Core Food Entities
- Menu Items (with ingredients, spice levels, dietary tags)
- Categories (appetizers, mains, desserts, beverages)
- Regional Cuisines (North Indian, South Indian, Bengali, etc.)
- Dietary Classifications (vegetarian, vegan, Jain, gluten-free)

### Customer Models
- Taste Preferences (spice tolerance, dietary restrictions)
- Order History and Favorites
- Delivery Preferences and Addresses

## Restaurant Feature Inventory
<!-- Confidence: 95% - Based on routes and components -->
### Customer-Facing Features
- [x] Menu browsing with dietary filters
- [x] Spice level customization
- [x] Real-time availability checking
- [x] Order tracking and notifications
- [x] Customer reviews and ratings

### Restaurant Operations
- [x] Kitchen order queue management
- [x] Inventory tracking and alerts
- [x] Staff scheduling and assignments
- [x] Sales reporting and analytics

## Restaurant Integration Points
<!-- Confidence: 90% - From environment configs -->
- Payment processing (Stripe, Square)
- Delivery services (in-house + third-party)
- Kitchen display systems
- Customer communication (SMS, email)
- Social media and review platforms

## Manual Review Required
- [ ] Authentic recipe validation
- [ ] Regional cuisine accuracy
- [ ] Spice level calibration
- [ ] Cultural sensitivity compliance
- [ ] Food safety protocol verification
```

### structure.md
```markdown
# Restaurant Project Structure & Conventions
<!-- Auto-generated: High confidence -->

## Directory Structure
```
/src
├── components/
│   ├── menu/
│   │   ├── MenuItemCard/          # Individual dish display
│   │   ├── CategoryFilter/        # Cuisine type filtering
│   │   ├── SpiceLevelSelector/    # Heat level customization
│   │   └── DietaryFilter/         # Vegetarian/vegan/etc filters
│   ├── cart/
│   │   ├── CartSummary/           # Order totals and items
│   │   ├── CheckoutForm/          # Customer details and payment
│   │   └── OrderTracking/         # Real-time order status
│   ├── restaurant/
│   │   ├── KitchenDisplay/        # Order queue for kitchen
│   │   ├── InventoryManager/      # Stock level management
│   │   └── StaffScheduler/        # Employee shift management
│   └── ui/
│       ├── ColorScheme/           # Brown, green, mustard palette
│       ├── SpiceIcons/            # Chili pepper heat indicators
│       └── CuisineFlags/          # Regional origin badges
```

## Restaurant Naming Conventions
<!-- Confidence: Based on statistical analysis -->
- Components: PascalCase (95% consistency)
  - MenuItemCard, SpiceLevelSelector, DietaryFilter
- Menu Files: kebab-case (87% consistency)  
  - butter-chicken.json, dal-makhani.json
- Variables: camelCase (92% consistency)
  - spiceLevel, isVegetarian, preparationTime
- API Endpoints: RESTful naming
  - /api/menu/categories, /api/orders/track

## Restaurant Import Patterns
[Common patterns with usage frequency]
- Menu data imports from CMS
- Order state management
- Customer preference handling
- Kitchen workflow coordination
```

### Additional Restaurant Context Files

### menu.md (Restaurant-Specific)
```markdown
# Menu Management & Food Service Context
<!-- Auto-generated: Restaurant-specific context -->

## Menu Item Structure
### Required Fields for MenuItemCard
- itemName: string (English + Hindi transliteration)
- price: number (with currency formatting)
- description: string (ingredients list with allergen info)
- isAvailable: boolean (real-time inventory check)
- availabilityInfo?: string ("Available Tuesday-Sunday" or "Out of ingredients")
- spiceLevel: 1-4 (mild to extra hot)
- dietaryTags: string[] (vegetarian, vegan, gluten-free, etc.)
- imageUrl: string (high-quality food photography)
- preparationTime: number (kitchen workflow timing)

## Cuisine Categories
### Regional Classifications
- North Indian: Punjabi, Rajasthani, Delhi-style
- South Indian: Tamil, Kerala, Andhra, Karnataka
- Eastern: Bengali, Assamese
- Western: Gujarati, Maharashtrian, Goan
- Indo-Chinese: Fusion cuisine adaptations

## Spice Level Standards
1. Mild (🌶️): Suitable for children and spice-sensitive customers
2. Medium (🌶️🌶️): Traditional Indian heat level
3. Hot (🌶️🌶️🌶️): Authentic regional spicing
4. Extra Hot (🌶️🌶️🌶️🌶️): Challenge level for spice enthusiasts
```

### kitchen.md (Operations-Specific)
```markdown
# Kitchen Operations & Workflow Context
<!-- Auto-generated: Kitchen management patterns -->

## Order Processing Workflow
1. Order Received → Kitchen Display System
2. Ingredient Availability Check
3. Preparation Time Estimation
4. Queue Position Assignment
5. Cooking Status Updates
6. Quality Check & Plating
7. Ready for Pickup/Delivery Notification

## Inventory Management
### Critical Stock Monitoring
- Daily ingredients (onions, tomatoes, herbs)
- Spices and masalas (expiry date tracking)
- Proteins (chicken, paneer, lentils)
- Specialty items (seasonal vegetables, festival sweets)

## Kitchen Display Integration
- Real-time order queue
- Preparation time tracking
- Special instructions handling
- Dietary restriction alerts
```

### delivery.md (Service-Specific)
```markdown
# Delivery & Customer Service Context
<!-- Auto-generated: Service delivery patterns -->

## Delivery Zone Management
### Zone-Based Pricing
- Zone 1: 0-3 miles (free delivery over $25)
- Zone 2: 3-7 miles ($3.99 delivery fee)
- Zone 3: 7-12 miles ($5.99 delivery fee)

## Order Tracking System
- Order Placed → Kitchen Preparation → Ready → Out for Delivery → Delivered
- SMS notifications at each stage
- Real-time GPS tracking for delivery

## Customer Communication
- Order confirmation with estimated time
- Preparation status updates
- Driver assignment and ETA
- Delivery completion confirmation
```

## 3. Restaurant Cleanup & Archive Management

```javascript
restaurant_cleanup_process: {
  identify: {
    // Scan all .md files outside .claude/steering
    scan_patterns: [
      '**/menu-docs/**/*.md',
      '**/recipe-notes/*.md', 
      '**/kitchen-procedures/*.md',
      '**/old-menus/*.md'
    ],
    score_relevance: 'restaurant_keyword_analysis',
    check_duplicates: 'menu_content_comparison'
  },
  
  categorize: {
    restaurant_steering: 'Move to .claude/steering',
    outdated_menus: 'Move to archive with timestamp', 
    seasonal_menus: 'Archive by season/year',
    recipe_secrets: 'Keep in secure location',
    duplicate_ingredients: 'Archive and create redirect'
  },
  
  actions: {
    move_files: 'with commit message and recipe attribution',
    update_menu_references: 'fix broken ingredient links',
    create_redirect_mapping: 'old menu URLs to new structure',
    generate_cleanup_report: 'what recipes/menus were moved and why'
  }
}
```

## 4. Restaurant Incremental Scanning

```javascript
const restaurantIncrementalScan = {
  lastScanFile: '.claude/steering/.last-restaurant-scan.json',
  menuChangeTracking: true,
  
  getChangedFiles: async () => {
    const lastScan = await loadLastRestaurantScan();
    return {
      menuChanges: gitChangedSince(lastScan.timestamp, ['**/menu/**', '**/recipes/**']),
      orderSystemChanges: gitChangedSince(lastScan.timestamp, ['**/orders/**', '**/kitchen/**']),
      customerChanges: gitChangedSince(lastScan.timestamp, ['**/customers/**', '**/profiles/**'])
    };
  },
  
  updatePartial: (files) => {
    updateMenuMd(files.filter(isMenuRelated));
    updateKitchenMd(files.filter(isKitchenRelated)); 
    updateDeliveryMd(files.filter(isDeliveryRelated));
    updateProductMd(files.filter(isBusinessRelated));
    updateStructureMd(files.filter(isStructuralChange));
  }
};
```

## 5. Restaurant Progress Reporting

```yaml
restaurant_progress_display:
  initialization:
    - "🍛 Scanning restaurant project structure..."
    - "📋 Found X menu files and Y recipe documents to analyze"
    
  cleanup_phase:
    - "🧹 Identifying menu-related content..."
    - "📦 Archiving Y outdated recipe files"
    - "🗂️ Consolidating scattered kitchen documentation"
    
  analysis_phase:
    - "⚡ Analyzing restaurant technology stack... [progress bar]"
    - "🍽️ Detecting menu management patterns..."
    - "🏪 Scanning kitchen workflow architecture..."
    - "📊 Confidence: High (85%), Medium (10%), Low (5%)"
    
  generation_phase:
    - "✍️ Generating restaurant tech.md..."
    - "🍛 Creating menu.md with item specifications..."
    - "👨‍🍳 Updating kitchen.md (manual chef review needed)..."  
    - "🚚 Building delivery.md context..."
    - "🎯 Updated Z restaurant steering files"
```

## Output Structure

```
.claude/
├── steering/
│   ├── tech.md (restaurant technical architecture)
│   ├── product.md (restaurant business context)
│   ├── structure.md (project organization)
│   ├── menu.md (food service specific)
│   ├── kitchen.md (operations workflow)
│   ├── delivery.md (service management)
│   ├── customer.md (diner experience)
│   ├── integrations.md (POS, delivery platforms)
│   ├── context-map.md (index of all restaurant context)
│   ├── .last-restaurant-scan.json (incremental scan metadata)
│   └── .restaurant-confidence-scores.json (pattern confidence tracking)
├── archive/
│   ├── 2024-01-20/
│   │   ├── old-menu-README.md (moved from root)
│   │   ├── recipe-notes-2023.md (outdated)
│   │   ├── kitchen-procedures-old.md (superseded)
│   │   └── seasonal-menu-winter-2023.md (archived)
│   └── restaurant-cleanup-log.md (what was moved and why)
└── reports/
    ├── restaurant-refactor-report-[timestamp].md
    ├── menu-confidence-report-[timestamp].md  
    ├── kitchen-cleanup-report-[timestamp].md
    └── manual-chef-review-needed-[timestamp].md
```

## Example Usage

```bash
# Quick scan with restaurant cleanup
/spec-steering-refactor --quick --cleanup

# Standard scan focused on menu management
/spec-steering-refactor --standard --focus menu --backup

# Deep scan for kitchen operations
/spec-steering-refactor --deep --focus kitchen --incremental

# Comprehensive restaurant analysis with cleanup
/spec-steering-refactor --standard --backup --cleanup --focus orders

# Dry run to preview menu documentation changes
/spec-steering-refactor --cleanup --dry-run --focus menu
```

## Restaurant Cleanup Report Example

```markdown
# Restaurant Steering Context Cleanup Report
Generated: 2024-01-20 14:30:00

## Summary
- Files scanned: 127 (including 45 menu-related files)
- Restaurant-specific files found: 38
- Files moved to steering: 22
- Recipe files archived: 12
- Menu duplicates consolidated: 8

## Moved to Restaurant Steering Context
1. `/docs/MENU-MANAGEMENT.md` → `/.claude/steering/menu.md` (merged)
2. `/kitchen/PROCEDURES.md` → `/.claude/steering/kitchen.md` (merged)  
3. `/src/restaurant-guidelines.md` → `/.claude/steering/structure.md` (merged)
4. `/delivery/ZONES.md` → `/.claude/steering/delivery.md` (merged)

## Archived Recipe Files
1. `/old-recipes/curry-recipes-2023.md` → `/.claude/archive/2024-01-20/` (outdated)
2. `/seasonal/winter-menu-2023.md` → `/.claude/archive/2024-01-20/` (seasonal)
3. `/backup/original-recipes.md` → `/.claude/archive/2024-01-20/` (superseded)

## Restaurant Actions Required  
- [ ] Review merged menu content in menu.md
- [ ] Validate spice level standards with head chef
- [ ] Confirm dietary restriction accuracy
- [ ] Update kitchen staff onboarding to reference new locations
- [ ] Verify ingredient allergen information
```

## Claude-Specific Restaurant Patterns

```markdown
## Claude Development Patterns for Restaurant E-commerce
<!-- Detected patterns for Claude Code usage -->

### Restaurant Prompt Engineering
- Menu item generation prompts: X locations
- Recipe description templates detected
- Customer service response patterns

### Food Service Code Generation Patterns  
- Menu component templates
- Order processing workflows
- Common Claude instructions for restaurant operations
- Dietary restriction handling patterns
```

## Benefits

- **Restaurant-Focused Cleanup**: Consolidates scattered menu and kitchen documentation
- **Living Menu Documentation**: Always reflects current offerings and availability  
- **Food Safety Compliance**: Tracks ingredient and allergen documentation
- **Kitchen Workflow Optimization**: Documents operational patterns
- **Cultural Authenticity Tracking**: Maintains regional cuisine accuracy
- **Customer Experience Documentation**: Maps dining journey patterns
- **Claude-Optimized**: Designed for restaurant context engineering workflows

This refactored specification is specifically tailored for Indian restaurant e-commerce platforms, incorporating food service workflows, menu management, kitchen operations, delivery logistics, and customer experience patterns while maintaining the sophisticated analysis and cleanup capabilities of the original system.