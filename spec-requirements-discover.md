# spec-requirements-discover (Indian Restaurant E-commerce)

Perform deep code analysis to discover and document implemented restaurant functionality, reverse-engineering food service requirements from the actual codebase. This command extracts menu management, order processing, kitchen workflows, and delivery logic directly from code when restaurant documentation is minimal or missing.

## Usage
```bash
/spec-requirements-discover [options]
```

## Options
- `--mode <type>`: Analysis depth - quick|standard|deep|forensic (default: standard)
- `--focus <area>`: Focus area - menu|orders|kitchen|delivery|customer|payments (default: all)
- `--output-style <type>`: Documentation style - user-story|technical|bdd|traditional (default: user-story)
- `--include-tests`: Extract requirements from test descriptions
- `--include-comments`: Parse code comments for business logic
- `--confidence-threshold <0-1>`: Minimum confidence for discovered requirements (default: 0.6)
- `--group-by <type>`: Organization method - cuisine|service-type|customer-journey|domain (default: cuisine)
- `--extract-rules`: Extract food service business rules from validations and conditions
- `--include-recipes`: Analyze menu data for ingredient and preparation requirements

## Discovery Process

### Phase 1: Restaurant Code Structure Analysis

```javascript
const restaurantCodeAnalysisPatterns = {
  // Menu feature discovery from file structure
  menuFeatures: {
    patterns: [
      'src/features/menu/*',
      'src/modules/food/*',
      'app/menu/*/page.tsx',  // Next.js app router
      'pages/menu/*.tsx',     // Next.js pages
      'src/components/menu/*',
      'src/components/food/*'
    ],
    indicators: ['MenuItem', 'MenuCategory', 'CuisineType', 'SpiceLevel', 'DietaryFilter']
  },
  
  // Kitchen workflow discovery
  kitchenOperations: {
    patterns: [
      'src/features/kitchen/*',
      'src/modules/orders/*',
      'src/components/kitchen/*',
      'api/kitchen/*',
      'api/orders/*'
    ],
    indicators: ['KitchenQueue', 'OrderPreparation', 'InventoryCheck', 'CookingTime']
  },
  
  // API endpoint discovery for restaurant services
  restaurantApiEndpoints: {
    patterns: [
      'api/menu/*',
      'api/orders/*', 
      'api/kitchen/*',
      'api/delivery/*',
      'api/customers/*',
      'routes/food/*',
      'controllers/restaurant/*',
      'src/api/menu/**/*.ts',
      'pages/api/restaurant/**/*.ts'
    ],
    httpMethods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH']
  },
  
  // Restaurant business logic discovery
  foodServiceBusinessLogic: {
    patterns: [
      '**/services/menu*.ts',
      '**/services/kitchen*.ts',
      '**/services/delivery*.ts',
      '**/useCases/order*.ts',
      '**/businessLogic/restaurant*.ts',
      '**/domain/food*.ts',
      '**/validators/menu*.ts',
      '**/validators/dietary*.ts'
    ],
    keywords: ['calculatePrice', 'validateSpiceLevel', 'processOrder', 'checkInventory', 
               'estimateDelivery', 'validateDietary', 'calculateCookingTime']
  }
};
```

### Phase 2: Restaurant Functionality Extraction

#### Menu API Analysis
```javascript
const extractMenuAPIFunctionality = (file) => {
  // Example: Extract from Next.js API route
  // File: api/menu/items/[id]/route.ts
  
  const discovered = {
    endpoint: '/api/menu/items/:id',
    methods: {
      GET: {
        functionality: 'Retrieve menu item details with availability',
        authentication: false,  // public menu access
        responseSchema: MenuItemSchema,
        queryParams: ['include_ingredients', 'spice_level', 'dietary_filters'],
        requirements: [
          'System must allow browsing menu items without authentication',
          'Menu items must display current availability status',
          'Ingredient information must be provided for dietary restrictions',
          'Spice level indicators must be clearly shown'
        ]
      },
      PUT: {
        functionality: 'Update menu item (admin/kitchen staff only)',
        authentication: true,
        authorization: 'kitchen_staff',
        validation: UpdateMenuItemSchema,
        businessRules: [
          'Only kitchen staff can update menu availability',
          'Price changes require manager approval',
          'Ingredient modifications must maintain dietary classifications',
          'Spice level cannot exceed restaurant maximum (1-4 scale)'
        ]
      }
    }
  };
};
```

#### Restaurant UI Component Analysis
```javascript
const extractRestaurantUIFunctionality = (component) => {
  // Example: MenuItemCard component analysis
  // File: components/menu/MenuItemCard.tsx
  
  return {
    component: 'MenuItemCard',
    props: {
      itemName: 'string',
      price: 'number', 
      description: 'string', // ingredients list
      isAvailable: 'boolean',
      availabilityInfo: 'string | undefined',
      spiceLevel: '1 | 2 | 3 | 4',
      dietaryTags: 'string[]',
      imageUrl: 'string'
    },
    userActions: [
      'View detailed ingredient information',
      'Check availability status',
      'Select spice level customization',
      'Add item to cart with quantity',
      'View nutritional information',
      'Check allergen warnings'
    ],
    stateManagement: [
      'Real-time availability updates',
      'Cart state synchronization',
      'Dietary preference filtering',
      'Price calculations with customizations'
    ],
    integrations: [
      'Inventory service for availability',
      'Pricing service for dynamic pricing',
      'Cart service for order management',
      'Dietary service for restriction validation'
    ],
    requirements: [
      'Menu items must display all required information as per spec',
      'Availability status must be real-time and accurate',
      'Spice level customization must be offered where applicable',
      'Dietary tags must be clearly visible and filterable',
      'Add to cart functionality must validate stock availability'
    ]
  };
};
```

#### Restaurant Business Logic Extraction
```javascript
const extractRestaurantBusinessRules = (code) => {
  // Example: Extract from restaurant pricing/kitchen services
  
  // From: services/RestaurantPricingService.ts
  const restaurantPricingRules = {
    'Large Order Discount': {
      code: 'if (totalItems >= 5 && totalValue > 100) price *= 0.95',
      rule: 'Orders with 5+ items over $100 receive 5% discount',
      confidence: 0.95
    },
    'Lunch Special Pricing': {
      code: 'if (isLunchHours() && item.category === "LUNCH_SPECIAL") price *= 0.8',
      rule: 'Lunch specials are 20% off during lunch hours (11 AM - 3 PM)',
      confidence: 0.92
    },
    'Spice Level Upcharge': {
      code: 'if (spiceLevel === 4) price += 2.00',
      rule: 'Extra hot spice level incurs $2 preparation fee',
      confidence: 0.98
    },
    'Delivery Fee Calculation': {
      code: 'deliveryFee = distance < 3 ? 0 : Math.ceil(distance) * 1.5',
      rule: 'Free delivery within 3 miles, $1.50 per mile beyond',
      confidence: 0.90
    },
    'Kitchen Capacity Check': {
      code: 'if (currentOrders >= maxCapacity) return "QUEUE_FULL"',
      rule: 'Kitchen stops accepting orders when at maximum capacity',
      confidence: 0.88
    }
  };
  
  // From: services/DietaryValidationService.ts
  const dietaryRules = {
    'Vegetarian Validation': {
      code: 'return !ingredients.some(ing => MEAT_PRODUCTS.includes(ing))',
      rule: 'Vegetarian dishes must not contain any meat products',
      confidence: 0.99
    },
    'Vegan Compliance': {
      code: 'return !ingredients.some(ing => ANIMAL_PRODUCTS.includes(ing))',
      rule: 'Vegan dishes must not contain dairy, eggs, or animal products',
      confidence: 0.99
    },
    'Jain Food Requirements': {
      code: 'return !ingredients.some(ing => UNDERGROUND_VEGETABLES.includes(ing))',
      rule: 'Jain food must not contain onions, garlic, or underground vegetables',
      confidence: 0.95
    }
  };
};
```

### Phase 3: Restaurant Test-Based Discovery

```javascript
const extractFromRestaurantTests = {
  menuTests: {
    // Extract from Jest/Mocha describe blocks
    example: `
      describe('Menu Item Management', () => {
        it('should display item name with Hindi transliteration', ...)
        it('should show current availability status', ...)
        it('should validate spice level between 1-4', ...)
        it('should filter items by dietary requirements', ...)
        it('should calculate price with customizations', ...)
        it('should show ingredient list with allergen warnings', ...)
      })
    `,
    extracted: [
      'Menu items must display English name with Hindi transliteration',
      'System must show real-time availability status',
      'Spice levels must be validated within 1-4 range',
      'Dietary filtering must work for vegetarian/vegan/Jain options',
      'Price calculations must include customization charges',
      'Ingredient lists must highlight potential allergens'
    ]
  },
  
  orderFlowTests: {
    // Extract from Playwright/Cypress tests
    example: `
      test('Complete food order flow', async () => {
        await selectMenuItem('Butter Chicken');
        await customizeSpiceLevel('medium');
        await addToCart();
        await proceedToCheckout();
        await selectDeliveryOption();
        await fillCustomerInfo();
        await selectPaymentMethod('credit-card');
        await confirmFoodOrder();
        await trackOrderStatus();
      })
    `,
    extracted: [
      'Customers can select menu items and customize options',
      'Spice level customization must be available for applicable dishes',
      'Cart management allows item modification before checkout',
      'Delivery vs pickup options must be clearly presented',
      'Customer information collection includes dietary preferences',
      'Multiple payment methods must be supported',
      'Order confirmation and tracking must be provided'
    ]
  },
  
  kitchenWorkflowTests: {
    example: `
      describe('Kitchen Order Processing', () => {
        it('should queue orders by preparation time', ...)
        it('should check ingredient availability', ...)
        it('should notify when order is ready', ...)
        it('should handle special dietary requests', ...)
        it('should update preparation time estimates', ...)
      })
    `,
    extracted: [
      'Kitchen must prioritize orders by preparation complexity',
      'Ingredient availability must be checked before accepting orders',
      'Customers must be notified when orders are ready',
      'Special dietary requests must be clearly marked and handled',
      'Preparation time estimates must be dynamic and accurate'
    ]
  }
};
```

### Phase 4: Restaurant Database Schema Analysis

```javascript
const extractRestaurantDataRequirements = {
  entities: {
    // From Prisma schema or TypeORM entities
    MenuItem: {
      fields: [
        'id', 'name', 'nameHindi', 'description', 'price', 
        'category', 'cuisine', 'spiceLevel', 'isVegetarian', 
        'isVegan', 'isJain', 'isGlutenFree', 'ingredients', 
        'allergens', 'preparationTime', 'isAvailable', 
        'availabilityNote', 'imageUrl', 'nutritionalInfo'
      ],
      relations: ['category', 'orderItems', 'reviews'],
      constraints: [
        'name: required',
        'price: positive number',
        'spiceLevel: 1-4 range',
        'preparationTime: positive integer'
      ],
      requirements: [
        'Menu items must have English and Hindi names',
        'Dietary classifications must be clearly marked',
        'Ingredient and allergen information must be comprehensive',
        'Availability status must be real-time updatable',
        'Spice levels must follow restaurant 1-4 scale'
      ]
    },
    
    Order: {
      fields: [
        'id', 'customerId', 'status', 'orderType', 'items',
        'subtotal', 'tax', 'deliveryFee', 'total', 
        'specialInstructions', 'estimatedTime', 'actualTime',
        'deliveryAddress', 'phoneNumber', 'paymentStatus'
      ],
      validations: [
        'status in [pending, confirmed, preparing, ready, delivered, cancelled]',
        'orderType in [dine-in, pickup, delivery]',
        'total = subtotal + tax + deliveryFee'
      ],
      requirements: [
        'Orders must track status through kitchen workflow',
        'Multiple order types must be supported',
        'Pricing calculations must include all fees and taxes',
        'Special dietary instructions must be preserved',
        'Delivery information must be collected for delivery orders'
      ]
    },

    Customer: {
      fields: [
        'id', 'name', 'email', 'phone', 'addresses',
        'dietaryRestrictions', 'spicePreference', 'orderHistory',
        'loyaltyPoints', 'preferredCuisines'
      ],
      relations: ['orders', 'reviews', 'favoriteItems'],
      requirements: [
        'Customer profiles must store dietary preferences',
        'Spice tolerance levels must be remembered',
        'Multiple delivery addresses must be supported',
        'Order history must influence recommendations',
        'Loyalty program integration must track points'
      ]
    }
  },
  
  migrations: {
    // Analyze migration history for requirement evolution
    '001_add_spice_levels': 'System must support 4-level spice customization',
    '002_add_dietary_tags': 'Menu items must support multiple dietary classifications',
    '003_add_kitchen_queue': 'Kitchen workflow management must be implemented',
    '004_add_delivery_zones': 'Delivery area management with distance-based pricing',
    '005_add_loyalty_program': 'Customer loyalty and points system integration'
  }
};
```

### Phase 5: Restaurant Code Pattern Recognition

```javascript
const restaurantPatternRecognition = {
  menuManagement: {
    patterns: [
      'getMenuItems()',
      'filterByDietary()',
      'checkAvailability()',
      'updateSpiceLevel()',
      'calculateItemPrice()'
    ],
    requirements: [
      'System must provide comprehensive menu browsing',
      'Dietary filtering must be available for all categories',
      'Real-time availability checking must be implemented',
      'Spice level customization must be supported',
      'Dynamic pricing with customizations must be calculated'
    ]
  },
  
  orderProcessing: {
    patterns: [
      'addToCart()',
      'validateCart()',
      'processPayment()',
      'createKitchenOrder()',
      'trackOrderStatus()'
    ],
    requirements: [
      'Shopping cart functionality must be implemented',
      'Order validation must check inventory and business rules',
      'Payment processing must be secure and reliable',
      'Kitchen workflow integration must be seamless',
      'Order tracking must provide real-time updates'
    ]
  },
  
  kitchenWorkflow: {
    patterns: [
      'queueOrder()',
      'estimatePrepTime()',
      'updateOrderStatus()',
      'checkIngredients()',
      'notifyCustomer()'
    ],
    requirements: [
      'Kitchen must implement order queue management',
      'Preparation time estimation must be dynamic',
      'Order status updates must be real-time',
      'Ingredient availability must be checked',
      'Customer notifications must be automated'
    ]
  },
  
  deliveryManagement: {
    patterns: [
      'calculateDeliveryFee()',
      'validateDeliveryZone()',
      'assignDriver()',
      'trackDelivery()',
      'confirmDelivery()'
    ],
    requirements: [
      'Delivery fee calculation must be zone-based',
      'Delivery zones must be validated for address',
      'Driver assignment must be optimized',
      'Delivery tracking must be available to customers',
      'Delivery confirmation must update order status'
    ]
  }
};
```

### Phase 6: Generated Restaurant Requirements Structure

#### 1. Menu Requirements (discovered-requirements-menu.md)
```markdown
# Discovered Menu Management Requirements
<!-- Auto-generated from code analysis: 2024-01-20 -->
<!-- Confidence levels: 🟢 High (>0.8) 🟡 Medium (0.6-0.8) 🔴 Low (<0.6) -->

## Menu Item Display Module
Source: /src/features/menu/*, /src/components/menu/*

### DREQ-M001: MenuItemCard Component 🟢
**Discovered from:**
- Component: MenuItemCard.tsx
- API: GET /api/menu/items/:id
- Tests: menu-item.test.ts (8 test cases)
- Schema: MenuItemSchema.ts

**Functionality:** Display complete menu item information with all required fields.

**Implemented Requirements:**
- ✅ Item name display (English + Hindi transliteration)
- ✅ Price display with currency formatting
- ✅ Description with complete ingredients list
- ✅ Real-time availability status (isAvailable: boolean)
- ✅ Availability information string when unavailable
- ✅ Spice level indicator (1-4 scale with chili icons)
- ✅ Dietary tags (vegetarian, vegan, Jain, gluten-free)
- ✅ Add to cart functionality with validation
- ✅ High-quality food imagery
- ✅ Allergen warning display

**Technical Implementation:**
```typescript
// Actual MenuItemCard interface discovered
interface MenuItemCardProps {
  itemName: string;           // "Butter Chicken (Murgh Makhani)"
  price: number;              // 18.99
  description: string;        // Full ingredients list
  isAvailable: boolean;       // Real-time stock check
  availabilityInfo?: string;  // "Available Tuesday-Sunday" 
  spiceLevel: 1 | 2 | 3 | 4;  // Heat level with icons
  dietaryTags: string[];      // ["gluten-free", "dairy"]
  imageUrl: string;           // High-res food photo
  onAddToCart: (customizations: any) => void;
}
```

### DREQ-M002: Spice Level Customization System 🟢
**Discovered from:**
- Component: SpiceLevelSelector.tsx
- Service: SpicingService.ts
- Business Logic: Spice level pricing rules

**Spice Level Scale Found:**
1. 🌶️ **Mild**: Family-friendly, no heat
2. 🌶️🌶️ **Medium**: Traditional Indian spicing  
3. 🌶️🌶️🌶️ **Hot**: Authentic regional heat
4. 🌶️🌶️🌶️🌶️ **Extra Hot**: Maximum spice level ($2 surcharge)

**Business Rules:**
- Extra hot level incurs additional $2 charge
- Spice level stored with customer preferences
- Some dishes have fixed spice levels (desserts, mild curries)
```

#### 2. Kitchen Operations Requirements (discovered-requirements-kitchen.md)
```markdown
# Discovered Kitchen Operations Requirements
<!-- Auto-generated from kitchen workflow analysis -->

## Order Processing Workflow
Source: /src/features/kitchen/*, /api/kitchen/*

### DREQ-K001: Kitchen Order Queue Management 🟢
**Discovered from:**
- Service: KitchenQueueService.ts
- Component: KitchenDisplay.tsx
- API: POST /api/kitchen/orders, GET /api/kitchen/queue

**Queue Management Logic:**
```typescript
// Discovered queue prioritization algorithm
const prioritizeOrder = (order: Order) => {
  const basePriority = order.createdAt;
  const urgencyMultiplier = order.orderType === 'DINE_IN' ? 1.5 : 1.0;
  const complexityFactor = calculateComplexity(order.items);
  
  return basePriority * urgencyMultiplier / complexityFactor;
};
```

**Implemented Requirements:**
- ✅ Orders prioritized by type (dine-in > pickup > delivery)
- ✅ Preparation time estimated based on item complexity
- ✅ Real-time queue display for kitchen staff
- ✅ Automatic capacity management (max 15 concurrent orders)
- ✅ Special dietary requirement highlighting
- ✅ Customer notification when order ready

### DREQ-K002: Inventory Integration 🟡
**Discovered from:**
- Service: InventoryService.ts
- Hooks: useInventoryCheck.ts

**Inventory Business Rules:**
- Menu items automatically marked unavailable when ingredients depleted
- Low stock warnings at 10% remaining inventory
- Daily ingredient delivery tracking
- Seasonal item availability based on ingredient calendar
```

#### 3. Customer Experience Requirements (discovered-requirements-customer.md)
```markdown
# Discovered Customer Experience Requirements
<!-- Auto-generated from user journey analysis -->

## Customer Profile Management
Source: /src/features/customers/*, /src/hooks/useCustomer.ts

### DREQ-C001: Dietary Preference System 🟢
**Discovered from:**
- Schema: CustomerProfile.ts
- Service: DietaryFilterService.ts
- Components: DietaryPreferences.tsx

**Discovered Dietary Categories:**
```typescript
// Extracted from validation schemas
enum DietaryRestriction {
  VEGETARIAN = 'vegetarian',
  VEGAN = 'vegan',
  JAIN = 'jain',              // No onions, garlic, root vegetables
  GLUTEN_FREE = 'gluten-free',
  DAIRY_FREE = 'dairy-free',
  NUT_FREE = 'nut-free',
  KETO_FRIENDLY = 'keto-friendly'
}
```

**Implementation Requirements:**
- ✅ Customer dietary preferences saved to profile
- ✅ Menu automatically filtered based on preferences
- ✅ Allergen warnings clearly displayed
- ✅ Jain food requirements specifically handled
- ✅ Cross-contamination warnings for severe allergies

### DREQ-C002: Order Customization & Preferences 🟢
**Customer Preference Storage:**
- Favorite spice levels remembered per customer
- Preferred cuisines highlighted in menu
- Order history influences recommendations
- Special instructions preserved across orders
```

### Phase 7: Restaurant Confidence Scoring & Validation

```javascript
const restaurantConfidenceScoring = {
  high: {
    criteria: [
      'Multiple menu component references',
      'Comprehensive test coverage for food features', 
      'Clear API contracts for restaurant operations',
      'Database constraints for menu items',
      'Business logic validation in kitchen services'
    ],
    threshold: 0.8,
    examples: ['MenuItemCard props', 'Spice level validation', 'Order status workflow']
  },
  
  medium: {
    criteria: [
      'Inferred from naming patterns',
      'Partial test coverage',
      'Implicit food service logic',
      'Customer preference patterns'
    ],
    threshold: 0.6,
    examples: ['Cuisine categorization', 'Delivery zone logic', 'Loyalty program features']
  },
  
  low: {
    criteria: [
      'Single code reference',
      'Ambiguous restaurant implementation',
      'No test coverage',
      'Legacy food service code'
    ],
    threshold: 0.4,
    examples: ['Abandoned features', 'Incomplete integrations', 'Prototype components']
  }
};
```

### Phase 8: Restaurant Comprehensive Report Generation

```markdown
# Restaurant Code-Based Requirements Discovery Report
Generated: 2024-01-20 11:45:00

## Discovery Summary
- Restaurant files analyzed: 1,247
- Menu features discovered: 34
- Kitchen workflow processes found: 18
- API endpoints found: 89
- Food service business rules extracted: 67
- Customer journey touchpoints: 45

## Confidence Distribution
High (>0.8): ████████████████████ 82% (Menu, Orders, Kitchen)
Medium (0.6-0.8): ████░░░░░░░░░░░░░░░░ 13% (Delivery, Loyalty)  
Low (<0.6): █░░░░░░░░░░░░░░░░░░░░ 5% (Analytics, Reporting)

## Restaurant Feature Coverage
| Module | Features Found | Confidence | Test Coverage |
|--------|---------------|------------|---------------|
| Menu Management | 15 | 🟢 94% | 89% |
| Order Processing | 12 | 🟢 91% | 87% |
| Kitchen Workflow | 8 | 🟢 88% | 82% |
| Customer Profile | 9 | 🟢 85% | 78% |
| Payment System | 7 | 🟢 92% | 91% |
| Delivery Management | 6 | 🟡 75% | 71% |
| Inventory | 4 | 🟡 68% | 65% |

## Discovered But Undocumented Restaurant Features
1. **Shadow Features**: 8 menu management features with no documentation
2. **Hidden APIs**: 5 internal kitchen workflow endpoints discovered  
3. **Business Rules**: 23 food service rules only in code
4. **Customer Features**: 7 loyalty program features not documented

## Restaurant Architecture Insights
- **Pattern**: Repository pattern for menu and order data access
- **Auth**: JWT with customer preference caching
- **Caching**: Redis for menu items and availability status  
- **Events**: Event-driven kitchen workflow management
- **Queue**: Bull queue for order processing and notifications
- **Real-time**: WebSocket updates for order status tracking

## Food Service Specific Discoveries
- **Spice Level System**: 4-level customization with pricing rules
- **Dietary Classifications**: 7 different dietary categories supported
- **Kitchen Capacity**: Dynamic queue management with 15-order limit
- **Delivery Zones**: 3-tier distance-based pricing structure
- **Menu Availability**: Real-time inventory integration
- **Cultural Authenticity**: Hindi transliterations and regional classifications

## Recommendations
1. Document discovered menu management shadow features
2. Add tests for medium-confidence delivery requirements  
3. Validate food service business rules with restaurant manager
4. Create comprehensive API documentation from kitchen discoveries
5. Review and confirm inferred customer preference requirements
6. Standardize spice level descriptions across all menu items
7. Implement missing allergen documentation for all ingredients
```

## Output Structure

```
.claude/requirements/
├── discovered/
│   ├── discovered-requirements-menu.md
│   ├── discovered-requirements-kitchen.md
│   ├── discovered-requirements-orders.md
│   ├── discovered-requirements-delivery.md
│   ├── discovered-requirements-customer.md
│   └── discovered-requirements-payments.md
├── analysis/
│   ├── restaurant-code-map.json
│   ├── menu-confidence-scores.json
│   ├── food-service-matrix.json
│   └── restaurant-api-contracts.json
├── validation/
│   ├── needs-chef-review.md (low confidence food items)
│   ├── menu-test-coverage-gaps.md
│   └── missing-restaurant-documentation.md
└── reports/
    ├── restaurant-discovery-report-2024-01-20.md
    ├── food-service-executive-summary.md
    └── kitchen-technical-findings.md
```

## Example Usage

```bash
# Standard restaurant code analysis
/spec-requirements-discover

# Deep forensic analysis of menu system
/spec-requirements-discover --mode forensic --focus menu --include-tests

# Focus on kitchen workflow discovery  
/spec-requirements-discover --focus kitchen --output-style technical

# Extract food service business rules with high confidence
/spec-requirements-discover --extract-rules --confidence-threshold 0.8 --focus orders

# Generate customer journey stories from code
/spec-requirements-discover --output-style user-story --group-by customer-journey

# Quick menu feature discovery
/spec-requirements-discover --mode quick --focus menu --include-recipes

# Comprehensive restaurant analysis
/spec-requirements-discover --mode deep --include-tests --include-comments --extract-rules
```

## Time Estimates
- **Quick scan**: ~5-10 minutes (basic menu structure)
- **Standard analysis**: ~15-30 minutes (core restaurant features)
- **Deep analysis**: ~30-60 minutes (complete food service workflow)
- **Forensic mode**: ~60-120 minutes (comprehensive kitchen & business logic)

## Key Restaurant Benefits
- **Menu Requirements Recovery**: Extract complete menu specifications from components
- **Kitchen Workflow Documentation**: Document actual vs. intended food service processes  
- **Food Safety Compliance**: Discover allergen and dietary requirement handling
- **Customer Journey Mapping**: Document actual user experience through code analysis
- **Business Rule Extraction**: Capture pricing, delivery, and food service logic
- **Cultural Authenticity Tracking**: Document Indian cuisine specific requirements
- **API Contract Discovery**: Generate restaurant service specifications from endpoints
- **Operational Knowledge Recovery**: Capture kitchen workflow tribal knowledge in code

This specialized restaurant version transforms your food service codebase into comprehensive requirement documentation, perfect for Indian restaurant e-commerce projects where the menu management code is the source of truth but food service documentation may be lacking.