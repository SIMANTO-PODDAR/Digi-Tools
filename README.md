# 🚀 Digitools — Premium Digital Tools Marketplace

A modern, premium single-page web application built with **React 19** and **Vite**, showcasing a curated catalog of digital tools. Features a stunning glassmorphism UI, a fully functional cart system, and smooth micro-animations throughout.

---

## 📸 Preview

> **Live at:** [https://digitools-by-simanto.netlify.app](https://digitools-by-simanto.netlify.app)

The app features:

- A hero banner with animated floating graphic and live social statistics
- A products catalog with filterable tool cards
- A shopping cart with order summary and checkout
- A 3-step onboarding section
- A tiered pricing section with an animated featured Pro card
- A call-to-action (CTA) section
- A full dark-themed footer with newsletter subscription

---

## 🛠️ Tech Stack

| Category        | Technology                                   |
|-----------------|----------------------------------------------|
| Framework       | [React 19](https://react.dev/)               |
| Build Tool      | [Vite 8](https://vitejs.dev/)                |
| Styling         | [Tailwind CSS v4](https://tailwindcss.com/)  |
| UI Components   | [DaisyUI v5](https://daisyui.com/)           |
| Icons           | [React Icons v5](https://react-icons.github.io/react-icons/) |
| Notifications   | [React Toastify v11](https://fkhadra.github.io/react-toastify/) |

---

## 🧩 Components Overview

### `Navbar`

- Sticky top, glassmorphism background
- Logo, navigation links (Products, Features, Pricing, Testimonials, FAQ)
- Shopping cart button with animated item count badge
- Login + "Get Started" CTA button
- Fully responsive — collapses gracefully on mobile

### `Banner`

- Full hero with gradient headline: *"Supercharge Your Digital Workflow"*
- Animated floating product image with glow effect
- CTA buttons: **Explore Products** & **Watch Demo**
- Stats strip: **50K+ Active Users**, **200+ Premium Tools**, **4.9 User Rating**

### `Cards` *(React Suspense)*

- Fetches product data from `/data.json` using React 19's `use()` hook
- Renders a responsive 3-column grid of product cards
- Each card shows: icon, badge (New / Popular / Sale), name, description, price/period, features list, and **Buy Now** button
- "Added to Cart" state changes button to green with a cart icon

### `Cart`

- Displays when the Cart tab is active
- Lists all added items with product icon, name, price, and a remove button
- **Order Summary** sidebar: subtotal, taxes, and total
- **Checkout** button clears cart and shows a success toast
- Empty cart state with illustrated placeholder and "Browse Products" link

### `StepsSection`

- Three-step onboarding: **Create Account → Choose Products → Start Creating**
- Glass cards with step numbers, icon images, and hover lift animation

### `PricingSection`

- **Starter** ($0/mo), **Pro** ($29/mo — featured), **Enterprise** ($99/mo)
- Pro card uses an animated gradient glowing border (`glow-border` class)
- Each card lists included features with emerald checkmarks

### `Explore` *(CTA Section)*

- Full-width gradient banner (indigo → purple → pink)
- Call-to-action: **Explore Products** and **View Pricing** buttons
- "14-day free trial • No credit card required • Cancel anytime"

### `Footer`

- Dark background with brand logo, description, and social links
- Navigation columns: **Product** and **Company**
- Newsletter subscription form with email input and toast confirmation
- Copyright and legal links (Privacy Policy, Terms, Cookies)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm v9 or later

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/SIMANTO-PODDAR/Digi-Tools.git
cd Digi-Tools

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be available at **<http://localhost:5173>**

### Available Scripts

| Command         | Description                              |
|-----------------|------------------------------------------|
| `npm run dev`   | Start Vite dev server with HMR           |
| `npm run build` | Build for production (outputs to `dist/`)|
| `npm run preview` | Preview the production build locally  |
| `npm run lint`  | Run ESLint across the project            |

---

## 📦 Product Data

Product cards are loaded from `public/data.json`. Each product object follows this shape:

```json
{
  "id": 1,
  "name": "AI Writing Pro",
  "description": "...",
  "price": 19,
  "period": "month",
  "tag": "Popular",
  "features": ["Feature A", "Feature B", "..."]
}
```

To add or modify products, edit `public/data.json`. Icons are matched by name using the `localIcons` map in `Cards.jsx` and `Cart.jsx`.

---

## 📋 Key Features Summary

- ✅ React 19 with `use()` hook for data fetching inside `Suspense`
- ✅ Glassmorphism UI (navbar + cards)
- ✅ Shopping cart with add, remove, and checkout
- ✅ Toast notifications for all user actions
- ✅ Responsive layout (mobile-first)
- ✅ Smooth micro-animations and hover effects
- ✅ Animated gradient border on featured pricing card
- ✅ Newsletter subscription form in footer

---

## 👤 Author

**Simanto Poddar**  
GitHub: [@SIMANTO-PODDAR](https://github.com/SIMANTO-PODDAR)
