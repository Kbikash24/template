# Pepperazy Next.js Setup Guide

## Quick Start

### 1. Install Dependencies

Open a terminal in the `pepperazy-nextjs` directory and run:

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

The site will be available at: http://localhost:3000

### 3. Project Structure

```
pepperazy-nextjs/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Home page (currently a placeholder)
│   └── globals.css     # Global styles
├── components/
│   └── Hero.tsx        # Sample Hero component
├── public/             # Static assets (images, etc.)
├── package.json        # Dependencies and scripts
├── next.config.js      # Next.js configuration
├── tsconfig.json       # TypeScript configuration
└── README.md           # Project documentation
```

### 4. Next Steps

1. **Copy CSS Styles**:
   - Open your `create/index.html` file
   - Copy all the CSS from the `<style>` tags
   - Paste it into `app/globals.css`

2. **Create Components**:
   - Break down your HTML into reusable components
   - Place them in the `components/` directory
   - Examples: Navbar, Hero, Footer, etc.

3. **Update page.tsx**:
   - Import your components
   - Build your page layout
   - Example:

   ```tsx
   import Hero from "@/components/Hero";

   export default function Home() {
     return (
       <main>
         <Hero />
         {/* Add more components */}
       </main>
     );
   }
   ```

4. **Add Images**:
   - Place images in the `public/` directory
   - Import using Next.js Image component:

   ```tsx
   import Image from "next/image";

   <Image src="/your-image.jpg" alt="Description" width={500} height={300} />;
   ```

### 5. Build for Production

```bash
npm run build
npm start
```

### 6. Deploy

Deploy to Vercel (recommended):

1. Push code to GitHub
2. Import project on vercel.com
3. Deploy automatically

## Features Included

- ✅ Next.js 14 with App Router
- ✅ TypeScript for type safety
- ✅ Google Sans font ready
- ✅ Responsive design system
- ✅ CSS variables for theming
- ✅ SEO friendly metadata

## Need Help?

- Next.js Docs: https://nextjs.org/docs
- React Docs: https://react.dev
- TypeScript Docs: https://www.typescriptlang.org/docs
