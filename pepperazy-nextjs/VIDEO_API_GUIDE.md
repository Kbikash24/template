# Free Video/Reels API Alternatives

## Currently Using: Pixabay API ✅

**Why Pixabay?**

- ✅ Completely FREE - no credit card required
- ✅ 20,000 requests per hour (very generous)
- ✅ High-quality video content (HD/4K available)
- ✅ No attribution required
- ✅ Commercial use allowed
- ✅ Easy to get API key

**Get Your Key:**

1. Visit https://pixabay.com/api/docs/
2. Sign up for free account
3. Get instant API key
4. Add to `.env.local`: `NEXT_PUBLIC_PIXABAY_API_KEY=your_key`

---

## Alternative Free Video APIs

### 1. **Pexels API**

- **Free tier:** 200 requests/hour
- **Quality:** Excellent HD videos
- **Sign up:** https://www.pexels.com/api/
- **Best for:** Popular/trending videos
- **Rate limit:** Lower than Pixabay

### 2. **Unsplash API**

- **Free tier:** 50 requests/hour
- **Quality:** Premium photos (limited video)
- **Sign up:** https://unsplash.com/developers
- **Best for:** High-quality images
- **Note:** Primarily images, limited video content

### 3. **Coverr API**

- **Free tier:** 100 videos available
- **Quality:** HD video clips
- **Sign up:** https://coverr.co/
- **Best for:** Website background videos
- **Note:** No official API, manual download

### 4. **Mixkit**

- **Free tier:** Completely free
- **Quality:** HD/4K videos
- **Sign up:** https://mixkit.co/
- **Best for:** Stock footage
- **Note:** No official API, but videos are free to use

### 5. **Videvo**

- **Free tier:** Thousands of free videos
- **Quality:** Various (SD to 4K)
- **Sign up:** https://www.videvo.net/
- **Best for:** Variety of content
- **Note:** Attribution may be required for some

---

## How to Switch APIs

### Switch to Pexels:

```typescript
// In VideoCards.tsx, replace the fetch URL:
const response = await fetch(
  "https://api.pexels.com/videos/popular?per_page=6",
  {
    headers: {
      Authorization: process.env.NEXT_PUBLIC_PEXELS_API_KEY,
    },
  },
);
```

### Switch to YouTube Data API (for real reels):

```typescript
// Get free key: https://console.cloud.google.com/
const response = await fetch(
  `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=6&key=${apiKey}&videoDuration=short`,
);
```

---

## Recommendation: Stick with Pixabay

**Pixabay offers the best balance:**

- Highest request limit (20K/hour)
- No attribution required
- Commercial use allowed
- High-quality content
- Easy setup
- Stable API

---

## Rate Limit Comparison

| API         | Free Requests | Quality    | Attribution  | Commercial Use |
| ----------- | ------------- | ---------- | ------------ | -------------- |
| **Pixabay** | 20K/hour      | ⭐⭐⭐⭐⭐ | Not required | ✅ Yes         |
| Pexels      | 200/hour      | ⭐⭐⭐⭐⭐ | Not required | ✅ Yes         |
| Unsplash    | 50/hour       | ⭐⭐⭐⭐⭐ | Required     | ✅ Yes         |
| Coverr      | Manual        | ⭐⭐⭐⭐   | Not required | ✅ Yes         |
| Mixkit      | Unlimited     | ⭐⭐⭐⭐   | Not required | ✅ Yes         |

---

## Need More Videos?

If you need more than 6 videos or want to implement pagination:

```typescript
// Pixabay supports pagination
const page = 1;
const perPage = 20; // max 200
const response = await fetch(
  `https://pixabay.com/api/videos/?key=${apiKey}&per_page=${perPage}&page=${page}`,
);
```

**Pro Tip:** Cache videos in localStorage to reduce API calls!
