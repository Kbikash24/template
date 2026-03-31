# Pepperazy

AI Ads that win - Next.js Version

## Getting Started

**⚠️ IMPORTANT: Get Your Free API Key First!**

The video carousel requires a FREE Pixabay API key:

1. 📖 **See [API_SETUP_GUIDE.md](API_SETUP_GUIDE.md) for step-by-step instructions** (takes 2 minutes!)
2. Or quickly: Visit https://pixabay.com/api/docs/ → Sign up → Copy your API key
3. Add to `.env.local`: `NEXT_PUBLIC_PIXABAY_API_KEY=your_key_here`

Then install and run:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/` - Next.js App Router directory
  - `layout.tsx` - Root layout component
  - `page.tsx` - Home page with all sections
  - `globals.css` - Global styles (all CSS from original HTML)
- `components/` - React components
  - `Hero.tsx` - Hero section with animated background
  - `Navbar.tsx` - Navigation bar
  - `VideoCards.tsx` - Video carousel with Pixabay API integration
  - `BrandsAndStats.tsx` - Brand logos and statistics
  - `Platform.tsx` - Platform showcase with ad grid
  - `FeatureRows.tsx` - Create/Launch/Optimize sections
  - `Toolkit.tsx` - Toolkit showcase
  - `ResultsAndTeams.tsx` - Results metrics and team case studies
  - `Blog.tsx` - Blog articles section
  - `TrustCompliance.tsx` - Trust badges and compliance info
  - `Footer.tsx` - Footer with links
- `public/` - Static assets

## Features

- ✅ Next.js 14 with App Router
- ✅ TypeScript support
- ✅ Google Sans font integration
- ✅ Responsive design
- ✅ Modern CSS with CSS variables
- ✅ **Pixabay API integration** for real video content (20K requests/hour)
- ✅ Animated hero background
- ✅ Interactive video carousel
- ✅ Complete landing page with all sections

## API Integration

The VideoCards component uses the **Pixabay API** (completely free) to fetch video content:

**Why Pixabay?**

- ✅ Completely free, no credit card required
- ✅ 20,000 requests per hour
- ✅ High-quality video content
- ✅ No attribution required
- ✅ Commercial use allowed

**Setup:**

1. Sign up for a free API key at [pixabay.com/api/docs](https://pixabay.com/api/docs/)
2. Add your API key to `.env.local`:
   ```
   NEXT_PUBLIC_PIXABAY_API_KEY=your_api_key_here
   ```
3. The component will automatically load 6 video thumbnails

**Alternative APIs:**
You can also use:

- **Pexels API** - Free, 200 requests/hour
- **Unsplash API** - Free, images primarily
- **Videvo API** - Free video clips

## Technologies

- Next.js 14
- React 18
- TypeScript
- CSS Variables
- Google Sans Font
- Pixabay API (free tier - 20K requests/hour)
