# YBY CineReviews

A modern, responsive website for movie, series, and anime reviews with Google AdSense integration.

## 🎬 Features

- **Modern Design**: Netflix-inspired dark theme with smooth animations
- **Responsive Layout**: Optimized for all devices (mobile, tablet, desktop)
- **Search & Filter**: Find reviews by title, genre, or category
- **Star Rating System**: Visual 5-star rating display
- **Google AdSense Ready**: Pre-configured ad spaces for monetization
- **Easy Content Management**: Simple JavaScript-based review system

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## 📝 Adding New Reviews

To add new reviews, edit `src/data/reviews.js` and add new review objects:

```javascript
{
  id: 9, // Unique ID
  title: "Your Movie/Series/Anime Title",
  type: "movie", // "movie", "series", or "anime"
  genre: "Action, Drama",
  rating: 4.5, // 0-5 scale
  year: 2024,
  image: "https://your-image-url.jpg",
  excerpt: "Your review excerpt...",
  director: "Director Name",
  date: "2024-01-15" // YYYY-MM-DD format
}
```

## 💰 Google AdSense Setup

1. **Get AdSense Approval**
   - Apply for Google AdSense account
   - Get your publisher ID (ca-pub-XXXXXXXXXXXXXXXXX)

2. **Update Ad Configuration**
   - Edit `src/components/ads.js`
   - Replace `ca-pub-XXXXXXXXXXXXXXXXX` with your publisher ID
   - Replace ad slot IDs with your actual slot IDs

3. **Ad Placements**
   - Top banner ad (below hero section)
   - Middle content ad (between reviews)
   - Sidebar ads (can be added as needed)

## 🎨 Customization

### Colors & Theme
Edit CSS variables in `src/style.css`:
```css
:root {
  --primary-color: #e50914; /* Main brand color */
  --secondary-color: #221f1f; /* Secondary color */
  --dark-bg: #141414; /* Background color */
  /* ... more variables */
}
```

### Layout & Components
- Header: `src/components/header.js`
- Hero Section: `src/components/hero.js`
- Review Grid: `src/components/reviewGrid.js`
- Footer: `src/components/footer.js`

## 📱 Responsive Breakpoints

- Mobile: < 480px
- Tablet: 481px - 768px
- Desktop: > 768px

## 🔧 Technical Stack

- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Build Tool**: Vite
- **Fonts**: Google Fonts (Inter)
- **Images**: Pexels (placeholder images)
- **Monetization**: Google AdSense

## 📊 SEO Features

- Semantic HTML structure
- Meta tags for social sharing
- Optimized images with lazy loading
- Clean URLs and navigation
- Fast loading performance

## 🚀 Deployment

The site can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting

## 📄 License

This project is open source and available under the MIT License.

---

**Happy Reviewing! 🎬✨**