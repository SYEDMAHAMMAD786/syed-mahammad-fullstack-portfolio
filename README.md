# Syed Mahammad — Portfolio
### Full Stack .NET Developer | ASP.NET Core | Blazor | C# | SQL Server

---

## 📁 Folder Structure

```
portfolio/
├── index.html              ← Main portfolio page (open this in browser)
├── README.md               ← This file
├── css/
│   └── style.css           ← All styles (dark/light theme, animations, layout)
├── js/
│   └── main.js             ← jQuery + JS logic (scroll, form, animations)
└── assets/
    └── Syed_Mahammad_DotNet_3years.pdf  ← PUT YOUR RESUME HERE
```

---

## ⚡ Getting Started

1. **Place your resume PDF** inside the `assets/` folder:
   - Rename it to: `Syed_Mahammad_DotNet_3years.pdf`
   - Or update the `href` in `index.html` to match your filename

2. **Open in browser:**
   - Simply double-click `index.html` — no server needed for local preview

3. **Deploy** (see options below)

---

## 🌐 Deployment Options

### ✅ Option 1: Netlify (Recommended — Free & Instant)
1. Go to [netlify.com](https://netlify.com) → Sign up free
2. Drag and drop the entire `portfolio/` folder onto the Netlify dashboard
3. Get a live URL instantly (e.g. `syedmahammad.netlify.app`)
4. Optional: Connect a custom domain

### ✅ Option 2: GitHub Pages (Free, Permanent URL)
```bash
# Create repo: syedmahammad786.github.io
git init
git add .
git commit -m "Portfolio v1"
git remote add origin https://github.com/syedmahammad786/syedmahammad786.github.io.git
git push -u origin main

# Then: Settings → Pages → Source: main branch → /root
# Live at: https://syedmahammad786.github.io
```

### ✅ Option 3: Vercel
1. Go to [vercel.com](https://vercel.com)
2. Import GitHub repo OR use CLI: `npx vercel`
3. No build config needed — static HTML deploys instantly

### ✅ Option 4: Azure Static Web Apps
1. Azure Portal → Create Resource → Static Web App
2. Connect GitHub repo
3. Build config: App location `/`, Output location `/`

---

## 🎨 Customisation

### Change Accent Colors
Edit `css/style.css` — find `:root { }` at the top:
```css
--accent:  #4f8ef7;   /* Primary blue */
--accent2: #00d4aa;   /* Teal green */
--accent3: #a855f7;   /* Purple */
```

### Update Your Details
Edit `index.html` — all content is plain HTML, easy to find and change.

### Add Real Contact Form
Replace the fake submit in `js/main.js` with Formspree:
```javascript
// In main.js, replace the setTimeout block with:
$.ajax({
  url: 'https://formspree.io/f/YOUR_FORM_ID',
  method: 'POST',
  data: { name: name, email: email, message: message },
  success: function() { /* show success */ }
});
```
Sign up free at [formspree.io](https://formspree.io)

---

## ✅ Features Checklist
- [x] Dark / Light mode toggle
- [x] Scroll reveal animations
- [x] Typed text effect (hero role)
- [x] Smooth scrolling navigation
- [x] Active nav link highlighting
- [x] Back-to-top button
- [x] Fully responsive (mobile + desktop)
- [x] Contact form with validation
- [x] Resume download button
- [x] Live project links
- [x] SEO meta tags
- [x] No build step required
- [x] jQuery + Vanilla JS only

---

**mahammad.syed@outlook.com** | +91 9989815278 | Bangalore, India
