# Project Structure - Indian Restaurant E-commerce Platform

## 📁 Repository Structure

```
restaurant-ecommerce/
├── .claude/                    # Claude Code workflow configuration
│   ├── steering/              # Project context documents
│   ├── templates/             # Document templates
│   ├── specs/                # Feature specifications
│   ├── bugs/                 # Bug tracking
│   ├── agents/               # AI agent configurations
│   └── commands/             # Custom slash commands
│
├── src/                       # Source code
│   ├── app/                  # Next.js app router
│   │   ├── (auth)/          # Authentication routes
│   │   ├── (customer)/      # Customer-facing pages
│   │   │   ├── menu/        # Menu browsing
│   │   │   ├── cart/        # Shopping cart
│   │   │   ├── checkout/    # Order checkout
│   │   │   └── orders/      # Order history
│   │   ├── (admin)/         # Admin dashboard
│   │   │   ├── kitchen/     # Kitchen management
│   │   │   ├── inventory/   # Stock management
│   │   │   └── analytics/   # Business insights
│   │   ├── api/             # API routes
│   │   │   ├── menu/        # Menu endpoints
│   │   │   ├── orders/      # Order management
│   │   │   ├── payments/    # Payment processing
│   │   │   └── delivery/    # Delivery tracking
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   │
│   ├── components/           # React components
│   │   ├── menu/            # Menu-related components
│   │   │   ├── MenuGrid.tsx
│   │   │   ├── MenuItem.tsx
│   │   │   ├── CategoryFilter.tsx
│   │   │   ├── SpiceLevelIndicator.tsx
│   │   │   └── DietaryBadges.tsx
│   │   ├── cart/            # Cart components
│   │   │   ├── CartDrawer.tsx
│   │   │   ├── CartItem.tsx
│   │   │   └── CartSummary.tsx
│   │   ├── order/           # Order components
│   │   │   ├── OrderStatus.tsx
│   │   │   ├── OrderTracking.tsx
│   │   │   └── OrderHistory.tsx
│   │   ├── ui/              # Generic UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Modal.tsx
│   │   │   └── Toast.tsx
│   │   └── layout/          # Layout components
│   │       ├── Header.tsx
│   │       ├── Footer.tsx
│   │       └── Navigation.tsx
│   │
│   ├── features/            # Feature modules
│   │   ├── menu/           # Menu management
│   │   │   ├── hooks/
│   │   │   ├── services/
│   │   │   └── types/
│   │   ├── ordering/       # Order processing
│   │   │   ├── hooks/
│   │   │   ├── services/
│   │   │   └── types/
│   │   ├── kitchen/        # Kitchen operations
│   │   │   ├── hooks/
│   │   │   ├── services/
│   │   │   └── types/
│   │   └── delivery/       # Delivery management
│   │       ├── hooks/
│   │       ├── services/
│   │       └── types/
│   │
│   ├── services/           # Business logic services
│   │   ├── api/           # API client services
│   │   │   ├── menu.service.ts
│   │   │   ├── order.service.ts
│   │   │   └── payment.service.ts
│   │   ├── cms/           # CMS integration
│   │   │   └── sanity.service.ts
│   │   └── external/      # Third-party services
│   │       ├── stripe.service.ts
│   │       └── delivery.service.ts
│   │
│   ├── hooks/             # Custom React hooks
│   │   ├── useCart.ts
│   │   ├── useMenu.ts
│   │   ├── useAuth.ts
│   │   └── useOrder.ts
│   │
│   ├── lib/               # Library code
│   │   ├── db/           # Database utilities
│   │   ├── auth/         # Authentication helpers
│   │   └── utils/        # General utilities
│   │
│   ├── types/             # TypeScript definitions
│   │   ├── menu.types.ts
│   │   ├── order.types.ts
│   │   ├── user.types.ts
│   │   └── api.types.ts
│   │
│   └── styles/            # Global styles
│       ├── globals.css
│       └── themes/
│
├── public/                # Static assets
│   ├── images/           # Image assets
│   │   ├── menu/        # Food images
│   │   ├── icons/       # Icon files
│   │   └── branding/    # Logo, banners
│   └── fonts/           # Custom fonts
│
├── tests/                # Test files
│   ├── unit/            # Unit tests
│   ├── integration/     # Integration tests
│   └── e2e/            # End-to-end tests
│
├── docs/                 # Documentation
│   ├── api/             # API documentation
│   ├── guides/          # Development guides
│   └── architecture/    # Architecture docs
│
├── scripts/             # Build and utility scripts
│   ├── seed.ts         # Database seeding
│   └── migrate.ts      # Database migrations
│
├── config/              # Configuration files
│   ├── menu.config.ts  # Menu configuration
│   └── site.config.ts  # Site settings
│
└── [Config Files]       # Root configuration
    ├── .env.example
    ├── .eslintrc.json
    ├── .gitignore
    ├── next.config.js
    ├── package.json
    ├── tailwind.config.js
    └── tsconfig.json
```

## 📦 Key Modules & Their Responsibilities

### Frontend Modules

#### Menu Module (`/features/menu`)
- Display menu items with categories
- Filter by cuisine type, dietary preferences
- Search functionality
- Spice level indicators
- Real-time availability updates

#### Ordering Module (`/features/ordering`)
- Cart management
- Checkout process
- Payment integration
- Order confirmation
- Receipt generation

#### Kitchen Module (`/features/kitchen`)
- Order queue display
- Preparation status updates
- Inventory alerts
- Kitchen performance metrics

#### Delivery Module (`/features/delivery`)
- Delivery zone validation
- Time slot selection
- Real-time tracking
- Driver assignment
- Delivery confirmation

### Backend Services

#### Menu Service
```typescript
// services/api/menu.service.ts
class MenuService {
  getMenuItems(filters?: MenuFilters): Promise<MenuItem[]>
  getItemById(id: string): Promise<MenuItem>
  checkAvailability(itemId: string): Promise<boolean>
  updateItemStock(itemId: string, quantity: number): Promise<void>
}
```

#### Order Service
```typescript
// services/api/order.service.ts
class OrderService {
  createOrder(orderData: CreateOrderDto): Promise<Order>
  updateOrderStatus(orderId: string, status: OrderStatus): Promise<Order>
  getOrderHistory(userId: string): Promise<Order[]>
  calculateTotal(items: CartItem[]): Promise<OrderTotal>
}
```

## 🎯 File Naming Conventions

### Components
- **Pages**: `page.tsx` (Next.js convention)
- **Layouts**: `layout.tsx` (Next.js convention)
- **Components**: PascalCase (e.g., `MenuItem.tsx`)
- **Hooks**: camelCase with 'use' prefix (e.g., `useCart.ts`)
- **Services**: camelCase with '.service' suffix (e.g., `menu.service.ts`)
- **Types**: camelCase with '.types' suffix (e.g., `menu.types.ts`)
- **Utils**: camelCase with descriptive names (e.g., `formatPrice.ts`)

### Directories
- **Features**: Lowercase, singular (e.g., `/menu`, `/order`)
- **Components**: Lowercase, plural when grouped (e.g., `/components/menu`)
- **Routes**: Lowercase, kebab-case for multi-word (e.g., `/order-history`)

## 🔧 Configuration Files

### Environment Variables
```env
# .env.example
# Application
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME="Spice Garden Restaurant"

# Database
DATABASE_URL=postgresql://...
REDIS_URL=redis://...

# CMS
SANITY_PROJECT_ID=
SANITY_DATASET=production
SANITY_API_TOKEN=

# E-commerce
MEDUSA_BACKEND_URL=http://localhost:9000
MEDUSA_API_KEY=

# Payments
STRIPE_PUBLIC_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...

# Delivery
DELIVERY_API_KEY=
DELIVERY_WEBHOOK_SECRET=

# Communication
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
SENDGRID_API_KEY=

# Analytics
NEXT_PUBLIC_GA_ID=G-...
SENTRY_DSN=
```

### TypeScript Configuration
```json
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@components/*": ["./src/components/*"],
      "@features/*": ["./src/features/*"],
      "@services/*": ["./src/services/*"],
      "@hooks/*": ["./src/hooks/*"],
      "@types/*": ["./src/types/*"],
      "@lib/*": ["./src/lib/*"],
      "@utils/*": ["./src/lib/utils/*"]
    }
  }
}
```

## 📝 Import Order Convention

```typescript
// 1. External imports
import React from 'react';
import { useRouter } from 'next/navigation';
import { z } from 'zod';

// 2. Internal absolute imports
import { MenuService } from '@services/api/menu.service';
import { MenuItem } from '@types/menu.types';

// 3. Internal relative imports
import { SpiceLevelIndicator } from './SpiceLevelIndicator';
import { formatPrice } from '../utils/formatPrice';

// 4. Style imports
import styles from './MenuItem.module.css';
```

## 🚀 Build & Deployment

### Build Output Structure
```
.next/
├── cache/           # Build cache
├── server/          # Server-side code
├── static/          # Static assets
└── build-manifest.json

out/                 # Static export (if applicable)
├── _next/          # Next.js assets
├── menu/           # Static pages
└── index.html      # Entry point
```

### Deployment Targets
- **Production**: Vercel (primary)
- **Staging**: Vercel Preview
- **Development**: Local Docker
- **CI/CD**: GitHub Actions

## 🔄 Git Workflow

### Branch Structure
```
main                 # Production-ready code
├── develop         # Integration branch
│   ├── feature/*   # New features
│   ├── bugfix/*    # Bug fixes
│   ├── hotfix/*    # Emergency fixes
│   └── refactor/*  # Code improvements
```

### Commit Message Format
```
type(scope): subject

[optional body]

[optional footer]

# Examples:
feat(menu): add dietary filter component
fix(cart): resolve quantity update issue
docs(api): update order endpoint documentation
style(ui): improve mobile responsiveness
refactor(order): simplify checkout logic
```

## 📊 Code Metrics Goals

### Quality Metrics
- **Test Coverage**: >80% for critical paths
- **Type Coverage**: 100% (strict TypeScript)
- **Bundle Size**: <200KB initial JS
- **Lighthouse Score**: >90 for all categories
- **Accessibility**: WCAG 2.1 AA compliance