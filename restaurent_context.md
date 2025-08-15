# Enhanced Context Engineering Prompts for Indian Restaurant E-commerce Platform 

## 🍛 1. Indian Restaurant Business Vision & Context

**GOAL**: Create comprehensive restaurant-specific business understanding  
**OUTPUT**: Write to docs/RESTAURANT_CONTEXT.md

Analyze this Indian restaurant CMS, website, e-commerce code repository and provide:

**Restaurant Identity & Mission**
- Restaurant name, location, and founding history, ownership & key people
- Current management team, head chef, kitchen staff profiles
- Culinary lineage and regional traditions (North Indian, South Indian, Bengali, Punjabi, etc.)
- Signature dishes and their cultural significance
- Restaurant's mission in serving authentic Indian cuisine
- Community involvement, cultural events, cooking classes, festival celebrations
- Facilities like private dining rooms, banquet hall, outdoor seating, takeaway counter
- Staff and key team members support
- Digital transformation vision for restaurant services

**Service Portfolio Analysis**
- **Food Menu**: Appetizers, main courses, desserts, beverages, regional specialties
- **Meal Categories**: Vegetarian, vegan, Jain food, gluten-free options, spice levels
- **Service Types**: Dine-in, takeaway, delivery, catering, meal subscriptions
- **Special Occasions**: Festival menus, wedding catering, corporate lunch boxes
- **Community Services**: Catering for cultural events, charity meals, food festivals
- **Facility Bookings**: Private dining reservations, banquet hall for celebrations

**Customer Personas**
1. **"Raj, the Regular Diner"**: Weekly visitor, orders family meals, prefers mild spices
2. **"Priya, the Food Explorer"**: Tries new regional dishes, loves authentic flavors, high spice tolerance  
3. **"Amit, the Office Worker"**: Orders lunch delivery, prefers quick meals, budget-conscious
4. **"Sarah, the Cultural Enthusiast"**: Non-Indian curious about authentic cuisine, needs spice guidance
5. **"The Patel Family"**: Large family orders, vegetarian preferences, festival catering needs
6. **"Mumbai Mike (NRI)"**: Craves home-style cooking, orders comfort foods, high authenticity expectations
7. **"Corporate Event Planner"**: Books catering for office events, needs variety and dietary accommodations
8. **"Festival Celebrator"**: Orders special occasion meals, sweets for Diwali/Holi celebrations

**Success Metrics**
- Customer engagement (website visits, menu views, photo gallery, reviews, newsletter signups)
- Order frequency and average order value increase
- Menu item popularity and seasonal trends
- Customer satisfaction scores and repeat orders
- Delivery time optimization and order accuracy
- Revenue growth across dine-in, takeaway, and catering
- New customer acquisition and retention rates
- Social media engagement and food photo shares

## 🏛️ 2. Restaurant Architecture & Integration Analysis

**GOAL**: Document Restaurant Website technical architecture  
**OUTPUT**: Write to docs/RESTAURANT_ARCHITECTURE.md

Document the Indian Restaurant website with headless CMS and headless e-commerce architecture:

**Technical Stack**
- **Headless Content Management System**: Sanity.CMS for menu management
- **Headless E-Commerce Engine**: Medusa.JS v2 for orders and payments
- **Frontend Website**: Next.js, React.js, Node.js, Tailwind.CSS, TypeScript
- **API Microservices**: Node.JS, NestJS for integrations
- **Database**: Supabase for customer data and order history

**Restaurant E-commerce Components**

**Food Ordering Engine**: Menu items as products, customization options, spice levels, portion sizes, payment via Stripe, order tracking, purchase history, recommended dishes

**Kitchen Management Module**: Order queue management, preparation time estimates, inventory tracking, special dietary preparations

**Delivery & Pickup Platform**: Zone-based delivery, time slot booking, order tracking, pickup notifications

**Catering Services**: Bulk order management, event planning, custom menu creation, advance booking system

**Customer Loyalty Program**: Points system, frequent diner rewards, birthday specials, referral bonuses

**Visual Diagrams (Mermaid)**

1. **Food Ordering Flow**: Browse Menu → Item Selection → Customization (spice level, extras) → Add to Cart → Checkout → Payment → Order Confirmation → Kitchen Alert → Preparation → Ready/Delivery

2. **Menu Item Customization**: Base Dish → Spice Level (Mild/Medium/Hot/Extra Hot) → Portion Size → Add-ons → Special Instructions → Price Calculation

3. **Delivery Management**: Order Received → Kitchen Preparation → Ready for Delivery → Driver Assignment → Out for Delivery → Customer Notification → Delivered

4. **Catering Order Flow**: Event Details → Guest Count → Menu Selection → Date/Time → Advance Payment → Menu Confirmation → Event Day Preparation → Delivery/Setup

**Restaurant-Specific Integrations**
- **POS System**: Integration with dine-in orders and kitchen display
- **Inventory Management**: Real-time ingredient tracking, automatic menu updates
- **Payment Gateways**: Stripe for online orders, cash on delivery options
- **Delivery Partners**: Integration with Uber Eats, DoorDash, in-house delivery
- **SMS/WhatsApp**: Order confirmations, delivery updates, promotional offers

## 🍽️ 3. Restaurant Data Models & Menu Content

**GOAL**: Define restaurant-specific data architecture  
**OUTPUT**: Write to docs/RESTAURANT_DATA_MODELS.md

**Menu Item Data Model** (Sanity CMS)
- **Basic Info**: Name (English/Hindi), category, description, preparation time
- **Ingredients**: Main ingredients, allergen information, dietary tags (vegetarian/vegan/gluten-free)
- **Pricing**: Base price, portion sizes, combo options
- **Availability**: Daily availability, seasonal items, chef's specials
- **Customization**: Spice levels, add-ons, modifications available
- **Media**: High-quality food photos, preparation videos
- **Regional Info**: Origin state/region, cultural significance, traditional preparation method

**Food Category Model**
- **Categories**: Appetizers, Breads, Rice Dishes, Curries, Desserts, Beverages
- **Regional Classification**: North Indian, South Indian, Bengali, Punjabi, Gujarati, etc.
- **Dietary Filters**: Vegetarian, Vegan, Jain, Gluten-free, Dairy-free
- **Spice Level Indicators**: Mild, Medium, Hot, Extra Hot with visual indicators

**Customer Profile Model** (Supabase)
- **Personal**: Name, phone, email, address, delivery preferences
- **Dietary Preferences**: Vegetarian/non-vegetarian, allergies, spice tolerance
- **Order History**: Favorite dishes, frequency, spending patterns
- **Loyalty Status**: Points earned, membership tier, rewards available

**Order Management Model** (Medusa.js)
- **Order Details**: Items, quantities, customizations, total amount
- **Service Type**: Dine-in, takeaway, delivery, catering
- **Status Tracking**: Received, Preparing, Ready, Out for Delivery, Completed
- **Payment Info**: Method, status, transaction ID, receipt

## 🎨 4. Restaurant Design System & Visual Identity

**GOAL**: Establish authentic Indian restaurant design language  
**OUTPUT**: Write to docs/RESTAURANT_DESIGN_SYSTEM.md

**Authentic Color Palette**
- **Primary Brown**: Rich Chocolate (#8B4513) - warmth and tradition
- **Forest Green**: Deep Green (#228B22) - freshness and herbs
- **Mustard Yellow**: Golden Mustard (#FFDB58) - spices and richness
- **Accent Colors**: Saffron (#F4A460), Turmeric (#E3B505), Chili Red (#C21807)
- **Neutral Tones**: Cream (#F5F5DC), Warm White (#FAF0E6)
- **Text Colors**: Dark Brown (#3E2723), Deep Green (#1B5E20)

**Typography**
- **Headers**: Modern fonts with Indian script support (Devanagari)
- **Menu Items**: Clear, appetizing fonts that enhance food descriptions
- **Prices**: Bold, easily readable pricing display
- **Special Text**: Elegant fonts for chef's recommendations and specials

**Component Library**

**MenuItemCard Component**
```typescript
interface MenuItemCardProps {
  itemName: string;
  price: number;
  description: string; // ingredients list
  isAvailable: boolean;
  availabilityInfo?: string; // "Available Tuesday-Sunday" or "Out of order"
  spiceLevel: 'mild' | 'medium' | 'hot' | 'extra-hot';
  imageUrl: string;
  dietaryTags: string[]; // ['vegetarian', 'gluten-free', etc.]
  onAddToCart: () => void;
}
```

**Visual Elements**
- **Spice Level Indicators**: Chili pepper icons (🌶️) for heat levels
- **Dietary Icons**: 🥬 Vegetarian, 🌱 Vegan, 🚫 Gluten-free symbols  
- **Regional Badges**: State flags or regional emblems for authenticity
- **Fresh Ingredients**: Herb and spice imagery backgrounds

## 🍛 5. Restaurant Development Patterns

**GOAL**: Establish restaurant-specific coding patterns  
**OUTPUT**: Write to docs/RESTAURANT_DEV_PATTERNS.md

**Naming Conventions**
- **Routes**: /menu, /categories, /cart, /orders, /catering, /reservations
- **Components**: `<MenuItemCard>`, `<SpiceLevelSelector>`, `<CartSummary>`
- **Services**: `MenuService`, `OrderService`, `DeliveryService`, `InventoryService`

**Restaurant-Specific Patterns**

1. **Multi-language Support**: English and Hindi menu descriptions
2. **Spice Level Handling**: Visual indicators and customer preference storage  
3. **Dietary Filtering**: Comprehensive allergen and dietary preference system
4. **Real-time Inventory**: Live availability updates for menu items
5. **Delivery Zone Management**: Postcode-based delivery area validation

**Business Logic Examples**
- **Menu Availability**: Check kitchen capacity, ingredient availability, preparation time
- **Delivery Estimation**: Calculate delivery time based on location and current orders
- **Pricing Logic**: Handle portion sizes, add-ons, combo discounts
- **Loyalty Points**: Calculate points earned per order, redemption options

## 🤖 6. Restaurant AI Assistant Context

**GOAL**: Create food-aware AI assistant instructions  
**OUTPUT**: Write to docs/RESTAURANT_AI_INSTRUCTIONS.md

**Restaurant Context Awareness**
- Understand Indian cuisine terminology (dal, sabzi, roti, biryani, etc.)
- Guide customers through menu selection based on dietary preferences
- Provide dish recommendations based on spice tolerance and food preferences  
- Explain regional cuisines and cooking methods
- Suggest appropriate portion sizes for groups

**AI Assistant Capabilities**
1. **Menu Guidance**: "What's your mildest curry option?"
2. **Dietary Recommendations**: "Show me vegan options from South India"  
3. **Spice Level Advice**: "I'm new to Indian food, what should I try?"
4. **Combo Suggestions**: "What goes well with chicken biryani?"
5. **Cultural Context**: "What's the difference between naan and roti?"

**Food-Specific Tools**
- **Spice Tolerance Matcher**: Recommend dishes based on heat preference
- **Dietary Filter**: Show only items matching dietary restrictions
- **Regional Guide**: Explain different state cuisines and their characteristics  
- **Pairing Suggestions**: Recommend bread, rice, and beverage combinations

## 📊 7. Restaurant Metrics & Analytics Context

**GOAL**: Define restaurant-specific analytics and reporting  
**OUTPUT**: Write to docs/RESTAURANT_ANALYTICS.md

**Customer Engagement Metrics**
- **Menu Performance**: Most viewed dishes, conversion rates, abandoned carts
- **Order Patterns**: Peak ordering times, popular combinations, seasonal trends
- **Customer Behavior**: Repeat order frequency, average order value, preferred service types
- **Reviews & Ratings**: Dish-specific feedback, overall satisfaction scores

**Operational Insights**  
- **Kitchen Efficiency**: Preparation times, order bottlenecks, staff workload
- **Delivery Performance**: Average delivery times, on-time delivery rates, driver efficiency
- **Inventory Management**: Ingredient usage patterns, waste reduction metrics
- **Revenue Analysis**: Daily/weekly/monthly sales, profit margins per dish

**Marketing Analytics**
- **Promotional Effectiveness**: Discount code usage, loyalty program engagement
- **Social Media Impact**: Food photo shares, review mentions, viral dishes
- **Customer Acquisition**: New customer sources, retention rates, referral success
- **Seasonal Trends**: Festival season spikes, regional preference patterns

## 🛡️ 8. Restaurant Security & Compliance Context

**GOAL**: Define restaurant-specific security and compliance requirements  
**OUTPUT**: Write to docs/RESTAURANT_SECURITY.md

**Data Protection**
- **Customer Privacy**: Personal preferences, dietary restrictions, order history
- **Payment Security**: PCI compliance for online orders and stored payment methods
- **Food Safety Compliance**: Allergen information accuracy, HACCP compliance
- **Staff Access Controls**: Role-based permissions for menu updates, order management

**Food Safety & Legal Compliance**
- **Allergen Management**: Accurate ingredient lists, cross-contamination warnings
- **Nutritional Information**: Calorie counts, dietary content for health-conscious customers
- **Food Handler Certification**: Staff training records, health department compliance
- **Business License**: Restaurant permits, food service licenses, delivery authorizations

## 🌐 9. Restaurant Internationalization Context

**GOAL**: Define multi-language and cultural adaptation strategy  
**OUTPUT**: Write to docs/RESTAURANT_I18N.md

**Language Support**
- **Primary**: English with Hindi transliterations for dish names
- **Menu Descriptions**: Explain Indian terms for international customers
- **Regional Languages**: Support for local community languages if applicable
- **Voice Search**: Handle pronunciation variations of Indian dish names

**Cultural Adaptations**
- **Spice Level Education**: Clear explanations for customers unfamiliar with Indian cuisine
- **Dietary Explanations**: Detailed vegetarian/vegan/religious dietary compliance
- **Festival Menus**: Special offerings during Indian festivals with cultural context
- **Local Taste Adaptation**: Modify spice levels for local palate while maintaining authenticity

## 🚀 10. Restaurant Growth & Scaling Context

**GOAL**: Plan for restaurant digital service expansion  
**OUTPUT**: Write to docs/RESTAURANT_SCALING.md

**Service Expansion Roadmap**
- **Phase 1**: Core online ordering (delivery, pickup, dine-in reservations)
- **Phase 2**: Catering services, cooking classes, meal subscriptions  
- **Phase 3**: Multi-location management, franchise support
- **Phase 4**: Cloud kitchen operations, virtual restaurant brands

**Technical Scaling Considerations**
- **Peak Hour Load**: Handle lunch/dinner rush traffic spikes
- **Multi-location Support**: Centralized menu management, location-specific inventory
- **Third-party Integrations**: Seamless API connections with delivery platforms
- **Mobile Optimization**: Progressive web app for easy mobile ordering

**Business Growth Features**
- **Customer Loyalty Programs**: Points, tiers, exclusive member benefits
- **Corporate Partnerships**: Office lunch delivery subscriptions
- **Event Catering**: Wedding, party, and corporate event services
- **Cooking Classes**: Virtual and in-person Indian cooking workshops

## 📱 11. Restaurant-Specific MenuItemCard Implementation

**GOAL**: Create the perfect menu item display component  
**OUTPUT**: Write to docs/MENU_ITEM_CARD_SPECS.md

**MenuItemCard Specifications**

**Visual Layout**
- **Food Image**: High-quality, appetizing photo (300x200px minimum)
- **Item Name**: Clear, large font with Hindi transliteration if applicable
- **Price Display**: Prominent pricing with currency symbol
- **Description**: Ingredient list in readable format
- **Availability Status**: Clear visual indicator (available/unavailable)
- **Add to Cart**: Prominent button when available

**Required Information Display**
```typescript
interface MenuItemData {
  itemName: string;           // "Butter Chicken (Murgh Makhani)"
  price: number;              // 18.99
  description: string;        // "Tender chicken in rich tomato and cream sauce with aromatic spices including garam masala, fenugreek, and fresh herbs"
  ingredients: string[];      // ["chicken", "tomatoes", "cream", "butter", "garam masala"]
  isAvailable: boolean;       // true/false
  availabilityInfo?: string;  // "Available Tuesday-Sunday" or "Temporarily unavailable"
  unavailableReason?: string; // "Out of ingredients" or "Chef's day off"
  nextAvailable?: string;     // "Available tomorrow" or "Back on Tuesday"
  spiceLevel: 1 | 2 | 3 | 4;  // 1=Mild, 2=Medium, 3=Hot, 4=Extra Hot
  dietaryTags: string[];      // ["gluten-free", "dairy-free", "vegetarian"]
  allergens: string[];        // ["dairy", "nuts", "gluten"]
  preparationTime: number;    // minutes
  servingSize: string;        // "Serves 2-3" or "Individual portion"
}
```

**Interactive States**
- **Available**: Full color, add to cart button enabled
- **Unavailable**: Grayed out, clear unavailability message
- **Low Stock**: Warning indicator, "Only 3 left today"
- **Popular**: "Customer Favorite" or "Chef's Recommendation" badge
- **Spicy**: Clear chili pepper indicators for heat level

**Responsive Design**
- **Desktop**: Card layout with side-by-side image and details
- **Tablet**: Stacked layout with image on top
- **Mobile**: Compact card with essential info prioritized

This comprehensive context document transforms the temple e-commerce structure into an authentic Indian restaurant platform, maintaining the detailed technical architecture while adapting all content, components, and business logic for restaurant operations. The color scheme of brown, green, and mustard creates a warm, traditional Indian aesthetic perfect for showcasing delicious cuisine.