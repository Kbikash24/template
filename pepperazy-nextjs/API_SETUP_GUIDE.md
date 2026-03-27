# 🚀 Quick Setup - Get Your Free Pixabay API Key (Takes 2 Minutes!)

## Step 1: Get Your FREE API Key

1. **Visit:** https://pixabay.com/api/docs/
2. **Click:** "Get Started" or "Sign Up"
3. **Fill in:**
   - Username
   - Email
   - Password
4. **Verify** your email (check inbox)
5. **Done!** Your API key will be shown immediately

---

## Step 2: Add API Key to Your Project

1. **Open** `.env.local` file in your project root
2. **Replace** `your_api_key_here` with your actual API key:
   ```
   NEXT_PUBLIC_PIXABAY_API_KEY=12345678-abcdefgh1234567890abcdef
   ```
3. **Save** the file

---

## Step 3: Restart Dev Server

```bash
# Stop the current server (Ctrl+C in terminal)
# Then restart:
npm run dev
```

---

## ✅ That's It!

Your videos should now load! Open http://localhost:3000 (or 3001/3002)

---

## 🐛 Troubleshooting

### Still seeing error?

1. **Check** your API key is correct (no extra spaces)
2. **Verify** `.env.local` file is in the project root (same folder as package.json)
3. **Ensure** the file is named exactly `.env.local` (not .env.local.txt)
4. **Restart** the dev server after changing .env.local
5. **Check** browser console (F12) for detailed error messages

### Videos not showing?

- Open browser console (F12)
- Look for messages like:
  - ✅ "Received videos: 6" = Working!
  - ⚠️ "No Pixabay API key found!" = Add your key
  - ❌ "Invalid API key!" = Check your key is correct

---

## 📊 What You Get FREE:

- ✅ 20,000 API requests per hour
- ✅ High-quality HD/4K videos
- ✅ No attribution required
- ✅ Commercial use allowed
- ✅ No credit card needed

---

## 🎯 Alternative: Use Different API

If you prefer, you can use Pexels instead:

1. Get key from: https://www.pexels.com/api/
2. Add to `.env.local`:
   ```
   NEXT_PUBLIC_PEXELS_API_KEY=your_pexels_key
   ```
3. Update `VideoCards.tsx` to use Pexels API

See `VIDEO_API_GUIDE.md` for more options!

---

## 💡 Pro Tips

- **Keep API key private** - Never commit .env.local to git
- **The key is in your Pixabay account** - You can find it again anytime at pixabay.com → API
- **Rate limit:** 20,000 requests/hour is very generous!
