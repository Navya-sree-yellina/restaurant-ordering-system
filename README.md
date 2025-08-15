# 🍛 Spice Garden - Indian Restaurant E-commerce Platform

A modern, full-featured e-commerce platform for an authentic Indian restaurant, built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

```bash
# Navigate to the project
cd restaurant-app

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## 📁 Project Structure

```
Restaurent/
├── .claude/                    # Claude Code workflow configuration
│   ├── steering/              # Product, tech, and structure documentation
│   ├── templates/             # Spec and bug templates
│   ├── commands/              # Workflow commands
│   └── specs/                 # Feature specifications
│
├── restaurant-app/            # Main application
│   ├── app/                   # Next.js app router pages
│   ├── components/            # React components
│   ├── styles/                # Global styles
│   ├── public/                # Static assets
│   └── types/                 # TypeScript types
│
└── context.md                 # Comprehensive project context
```

## 🎨 Design System

### Color Palette
- **Chocolate Brown** (#8B4513) - Primary brand color
- **Forest Green** (#228B22) - Fresh ingredients
- **Mustard Yellow** (#FFDB58) - Warmth and spices
- **Saffron** (#F4A460) - Premium dishes
- **Chili Red** (#C21807) - Spice indicators

## ✨ Features Implemented

### Current Features
- ✅ Responsive homepage with hero section
- ✅ Featured dishes showcase with filters
- ✅ Service offerings (Delivery, Takeaway, Dine-in, Catering)
- ✅ Customer testimonials
- ✅ About section with restaurant story
- ✅ Call-to-action sections
- ✅ Mobile-responsive navigation
- ✅ Footer with contact information

### Upcoming Features (Using Workflow)
- [ ] Complete menu system with categories
- [ ] Shopping cart functionality
- [ ] User authentication
- [ ] Order management
- [ ] Payment integration
- [ ] Admin dashboard
- [ ] Real-time order tracking
- [ ] Customer reviews system

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **State Management**: (To be added: Zustand/Redux Toolkit)
- **API**: Next.js API Routes
- **Database**: (To be added: Supabase/PostgreSQL)
- **CMS**: (To be added: Sanity.io)
- **E-commerce**: (To be added: Medusa.js)

## 📋 Development Workflow

This project follows the Claude Code Spec Workflow:

### Creating New Features
```bash
# Use the spec-create command to generate specifications
/spec-create menu-system "Complete menu management with categories and filters"

# Execute specific tasks
/spec-execute 1 menu-system
```

### Reporting Bugs
```bash
# Document bugs using the bug workflow
/bug-create cart-calculation "Cart total not updating correctly"
```

## 🧪 Testing

```bash
# Run type checking
npm run type-check

# Run linting
npm run lint

# Run tests (to be added)
npm run test
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Check TypeScript types

## 🌟 Key Components

### Layout Components
- **Header** - Navigation with cart and user actions
- **Footer** - Contact info, hours, and links

### Home Page Components
- **Hero** - Landing section with CTA
- **FeaturedDishes** - Menu highlights with filters
- **AboutSection** - Restaurant story
- **Services** - Service offerings grid
- **Testimonials** - Customer reviews
- **CTA** - Call-to-action sections

## 🔄 Next Steps

1. **Menu System**: Implement full menu with categories, search, and filters
2. **Cart & Checkout**: Add shopping cart and order processing
3. **User System**: Authentication and user profiles
4. **Admin Panel**: Restaurant management dashboard
5. **Integrations**: Payment gateway, SMS notifications, delivery tracking

## 📄 Documentation

- **Product Vision**: `.claude/steering/product.md`
- **Technical Architecture**: `.claude/steering/tech.md`
- **Project Structure**: `.claude/steering/structure.md`
- **Full Context**: `context.md`

## 🤝 Contributing

Follow the established workflow patterns documented in `.claude/commands/` for consistent development practices.

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

The application is configured for deployment on:
- Vercel (recommended)
- AWS/Google Cloud
- Any Node.js hosting platform

## 📞 Support

For questions about the codebase, refer to the comprehensive documentation in the `.claude/` directory or the main `context.md` file.

---

Built with ❤️ following the Claude Code Spec Workflow