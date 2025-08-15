# 🍽️ Savory - Modern Restaurant E-commerce Platform

A modern, full-featured restaurant e-commerce platform built with Next.js 14, TypeScript, and Tailwind CSS. Perfect for restaurants looking to establish a strong online presence with ordering capabilities.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-14.2.5-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38B2AC)

## ✨ Features

### Current Features
- 🏠 **Modern Homepage** - Eye-catching hero section with service highlights
- 🍔 **Featured Menu** - Interactive menu preview with category filters
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🎨 **Modern Design System** - Clean, professional aesthetic with emerald and slate color scheme
- 🛒 **Shopping Cart Ready** - Cart icon with item counter (implementation ready)
- 📍 **Location Info** - Restaurant details and operating hours
- ⭐ **Customer Reviews** - Testimonials section
- 🚀 **Performance Optimized** - Fast loading with Next.js optimization

### Planned Features
- 🔐 User authentication and profiles
- 🛍️ Complete shopping cart functionality
- 💳 Payment integration (Stripe/PayPal)
- 📦 Order management system
- 🚚 Delivery tracking
- 👨‍💼 Admin dashboard
- 📊 Analytics and reporting
- 📧 Email notifications
- 🔔 SMS order updates

## 🚀 Quick Start

### Prerequisites
- Node.js 16.0 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/restaurant-ecommerce.git
cd restaurant-ecommerce
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:
```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME="Savory Restaurant"
# Add other environment variables as needed
```

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
restaurant-app/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── home/             # Homepage components
│   └── layout/           # Layout components
├── styles/               # Global styles
├── public/               # Static assets
├── types/                # TypeScript types
└── lib/                  # Utility functions
```

## 🎨 Customization

### Changing Restaurant Details

1. **Update metadata** in `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: 'Your Restaurant Name',
  description: 'Your restaurant description',
}
```

2. **Update branding** in `components/layout/Header.tsx`:
- Restaurant name
- Logo
- Contact information

3. **Customize colors** in `tailwind.config.ts`:
- Modify the color palette to match your brand
- Update primary and secondary colors

### Adding Menu Items

Edit the `dishes` array in `components/home/FeaturedDishes.tsx`:

```typescript
const dishes = [
  {
    id: 1,
    name: 'Your Dish Name',
    subtitle: 'Dish Subtitle',
    description: 'Dish description',
    price: 19.99,
    category: 'Mains',
    isVegetarian: false,
    isPopular: true,
    isChefSpecial: true,
  },
  // Add more dishes...
]
```

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: Vercel / Netlify / Any Node.js host

## 📝 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Check TypeScript types
```

## 🚢 Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/restaurant-ecommerce)

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/restaurant-ecommerce)

### Manual Deployment

1. Build the application:
```bash
npm run build
```

2. The build output will be in the `.next` folder
3. Deploy to any Node.js hosting platform

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide](https://lucide.dev/)

## 📞 Support

For support, email support@yourrestaurant.com or open an issue on GitHub.

## 🔮 Roadmap

- [ ] Phase 1: Core Features (Current)
  - [x] Homepage
  - [x] Menu display
  - [ ] Shopping cart
  - [ ] User authentication

- [ ] Phase 2: Ordering System
  - [ ] Checkout process
  - [ ] Payment integration
  - [ ] Order tracking
  - [ ] Email notifications

- [ ] Phase 3: Management
  - [ ] Admin dashboard
  - [ ] Inventory management
  - [ ] Analytics
  - [ ] Customer management

- [ ] Phase 4: Advanced Features
  - [ ] Loyalty program
  - [ ] Table reservations
  - [ ] Catering orders
  - [ ] Mobile app

---

Made with ❤️ for the restaurant industry. Perfect for restaurants, cafes, food trucks, and catering services looking for a modern online presence.