# Next.js Migration Guide

## What's Been Converted

Your HTML landing page has been fully converted to a modern Next.js application with:

### ✅ All Sections Converted

- Header with promo bar
- Sticky navigation with dropdown menus
- Hero section with teacher card and live classes sidebar
- Overview (Why Us) section with stats
- Popular batches with course filtering
- Live classes sidebar (sticky)
- Toppers wall with success stories
- Resources section
- FAQ accordion
- Footer with links
- Modal lead capture form

### ✅ Interactivity

- Course filtering by exam type (GATE, UPSC, SSC, Banking)
- FAQ accordion with smooth animations
- Responsive mobile menu
- Smooth scroll navigation
- Intersection Observer for reveal animations
- Modal open/close functionality
- Form handling with validation

### ✅ Responsive Design

- Mobile-first approach
- Tablets (720px+)
- Desktop (920px+)
- Large screens (1180px+)

## Project Structure

```
onlinekaksha-nextjs/
├── app/
│   ├── globals.css              # CSS variables & base styles
│   ├── layout.tsx               # HTML structure & fonts
│   └── page.tsx                 # Main page (all sections)
├── components/
│   ├── PromoBar.tsx             # Promo banner
│   ├── Navbar.tsx               # Navigation (dropdown, mobile menu)
│   ├── Hero.tsx                 # Hero + teacher card + live sidebar
│   ├── Overview.tsx             # Why Us stats
│   ├── CoursesSection.tsx       # Course grid + filtering
│   ├── ToppersSection.tsx       # Student testimonials
│   ├── ResourcesSection.tsx     # Study materials
│   ├── FAQSection.tsx           # FAQ accordion
│   ├── Footer.tsx               # Footer links
│   └── Modal.tsx                # Lead capture form
├── styles/
│   └── navbar.module.css        # Navbar styles
└── Configuration files
    ├── package.json             # Dependencies
    ├── next.config.js           # Next.js config
    ├── tsconfig.json            # TypeScript config
    └── .gitignore
```

## Key Differences from Original HTML

### 1. **Component Architecture**

- Each section is now a reusable React component
- State management with React hooks (useState, useEffect)
- Better code organization and maintainability

### 2. **Styling**

- CSS variables from globals.css maintained
- Inline styles for component-specific styling
- CSS modules for navbar (scalable)
- No external CSS framework needed

### 3. **Interactivity**

- Course filtering now uses React state
- FAQ items toggle via React state
- Modal open/close via React state
- Form state management with useState

### 4. **Performance**

- Server-side rendering (SSR) ready
- Next.js Image component support
- Optimized font loading
- Static generation possible

### 5. **Development Experience**

- TypeScript for type safety
- HMR (Hot Module Reloading) during dev
- ESLint ready
- Easy to extend with new features

## How to Run

### Development

```bash
cd onlinekaksha-nextjs
npm install
npm run dev
# Visit http://localhost:3000
```

### Production Build

```bash
npm run build
npm start
```

## Next Steps

1. **Customize Content**: Edit component files to change text, images, and links
2. **Update Images**: Replace placeholder images with your own
3. **Connect Backend**: Add actual form submission to your backend
4. **Deploy**: Deploy to Vercel, AWS, or your preferred host
5. **Analytics**: Add Google Analytics or Vercel Analytics
6. **SEO**: Optimize meta tags and add structured data

## If You Have Profile Image

To use your existing `../profile.JPG` image:

1. Save it in the `public/` folder as `profile.jpg`
2. Update the img src in Hero.tsx from the placeholder to `/profile.jpg`

## Feature Requests/Customizations

The code is fully customizable. Common additions:

- Blog section with grid
- Testimonials carousel
- Pricing comparison table
- Video gallery
- Calendar for live classes
- Payment integration
- Admin dashboard

## Need Help?

Each component is self-contained and can be modified independently. All styling is either inline (easy to tweak) or in globals.css (for global variables).
