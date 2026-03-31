# Video Types & Categories

The VideoCards component now fetches **6 different types of videos** to showcase various content styles:

## 📹 Video Categories

### 1. **REEL** - Fashion/Lifestyle Content

- **Search:** "fashion model"
- **Style:** Short-form, trending content
- **Best for:** Instagram Reels, TikTok style videos
- **Example:** Fashion looks, lifestyle shots, quick tips

### 2. **PRODUCT** - Product Showcases

- **Search:** "product showcase"
- **Style:** Clean product demonstrations
- **Best for:** E-commerce, dropshipping ads
- **Example:** 360° product views, feature highlights

### 3. **TESTIMONIAL** - Customer Reviews

- **Search:** "people talking"
- **Style:** Authentic, person-to-camera
- **Best for:** Social proof, trust building
- **Example:** User testimonials, success stories

### 4. **BLOG** - Vlog/Daily Content

- **Search:** "vlog daily"
- **Style:** Personal, documentary-style
- **Best for:** Behind-the-scenes, day-in-life content
- **Example:** Daily vlogs, process videos, tours

### 5. **REVIEW** - Detailed Reviews

- **Search:** "review unboxing"
- **Style:** In-depth product analysis
- **Best for:** Detailed product reviews, comparisons
- **Example:** Unboxing videos, feature breakdowns

### 6. **SOCIAL** - Social Media Content

- **Search:** "social media"
- **Style:** Trendy, shareable moments
- **Best for:** Viral content, engagement posts
- **Example:** Behind-the-scenes, team moments, events

---

## 🎨 Customization

Want different video types? Edit `VideoCards.tsx`:

```typescript
const videoQueries = [
  "your search term 1", // Replace with your needs
  "your search term 2",
  // ... add more
];
```

### Popular Search Terms:

- **E-commerce:** "shopping", "sale", "discount", "fashion"
- **Tech:** "technology", "gadget", "app", "software"
- **Fitness:** "workout", "yoga", "gym", "health"
- **Food:** "cooking", "recipe", "restaurant", "food"
- **Beauty:** "makeup", "skincare", "beauty", "tutorial"
- **Business:** "office", "meeting", "presentation", "team"
- **Travel:** "travel", "vacation", "adventure", "explore"

---

## 🔄 How It Works

1. **6 Parallel API Calls** - Each searches for a specific video type
2. **1 Video Per Category** - Takes the best match for each search
3. **Fallback Support** - Shows gradient placeholders if API fails
4. **Unique Content** - Each card shows a different video style

---

## 💡 Pro Tips

### Get More Videos Per Category:

```typescript
// Change per_page=1 to per_page=3
per_page=3&video_type=film
```

### Filter by Video Quality:

```typescript
// Add min_width and min_height
&min_width=1280&min_height=720
```

### Filter by Orientation:

```typescript
// horizontal, vertical, or all
&orientation=vertical  // Perfect for Reels/Stories
```

### Add Category Filters:

```typescript
// Pixabay categories: backgrounds, fashion, nature, science, etc.
&category=fashion
```

---

## 🎯 Video Type Use Cases

| Type            | Best For         | Platform          | Style             |
| --------------- | ---------------- | ----------------- | ----------------- |
| **REEL**        | Quick engagement | Instagram, TikTok | Vertical, trendy  |
| **PRODUCT**     | E-commerce ads   | Facebook, Google  | Clean, focused    |
| **TESTIMONIAL** | Trust building   | Landing pages     | Authentic, candid |
| **BLOG**        | Story telling    | YouTube, Blog     | Narrative, longer |
| **REVIEW**      | Product launch   | YouTube, Amazon   | Detailed, honest  |
| **SOCIAL**      | Brand awareness  | All platforms     | Fun, shareable    |

---

## 🔧 Advanced Configuration

### Fetch Videos by Duration:

```typescript
const response = await fetch(
  `https://pixabay.com/api/videos/?key=${apiKey}&q=${query}&min_duration=5&max_duration=30`,
);
```

### Search with Multiple Terms:

```typescript
const videoQueries = [
  "fashion model style", // More specific
  "product demo showcase", // Combined terms
  "customer review testimonial", // Better matches
];
```

### Fallback to Popular Videos:

```typescript
// If specific search fails, fetch popular videos
const fallbackResponse = await fetch(
  `https://pixabay.com/api/videos/?key=${apiKey}&order=popular&per_page=6`,
);
```

---

## 📊 API Limits

- **20,000 requests/hour** on free tier
- **6 searches per page load** = only 6 requests
- **Plenty of headroom** for high traffic sites
- **Cache videos** in localStorage to reduce API calls

---

## 🚀 Next Steps

1. **Test different search terms** to find videos that match your brand
2. **Adjust badges** to match your video categories
3. **Update captions** to match your marketing style
4. **Consider caching** to improve load times
5. **Add video playback** on hover for better engagement
