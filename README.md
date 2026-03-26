[README.md](https://github.com/user-attachments/files/26277439/README.md)
# NXLO Clothing Brand Website

Welcome to the NXLO website source code! This is a complete, beginner-friendly e-commerce website for a student-athlete clothing brand. Everything is well-commented so you can understand and modify it easily.

## 📋 Table of Contents

1. [Project Structure](#project-structure)
2. [Getting Started](#getting-started)
3. [How to Run Locally](#how-to-run-locally)
4. [How to Edit Products](#how-to-edit-products)
5. [Deployment Recommendations](#deployment-recommendations)
6. [File Explanations](#file-explanations)
7. [Troubleshooting](#troubleshooting)

---

## 📁 Project Structure

```
nxlo_website/
├── package.json          # Node.js dependencies
├── server.js             # Back-end server (Express)
├── products.json         # Product data (edit this to change products!)
├── README.md             # This file
└── public/
    ├── index.html        # Main website (HTML)
    ├── style.css         # Website styling (CSS)
    └── script.js         # Website interactivity (JavaScript)
```

---

## 🚀 Getting Started

### Prerequisites

Before you start, make sure you have:

1. **Node.js** installed on your computer
   - Download from: https://nodejs.org/
   - Choose the LTS (Long Term Support) version
   - Verify installation: Open terminal and type `node --version`

2. **A text editor** to edit files
   - VS Code (recommended): https://code.visualstudio.com/
   - Or any other text editor you prefer

### Installation

1. **Open terminal/command prompt** in the `nxlo_website` folder

2. **Install dependencies** by typing:
   ```bash
   npm install
   ```
   This downloads the required packages (Express, CORS, etc.)

---

## 💻 How to Run Locally

### Step 1: Start the Server

In the terminal, type:
```bash
npm start
```

You should see:
```
╔════════════════════════════════════════╗
║   🚀 NXLO CLOTHING BRAND - SERVER 🚀   ║
╚════════════════════════════════════════╝

Server is running at: http://localhost:3000
```

### Step 2: Open in Browser

1. Open your web browser (Chrome, Firefox, Safari, etc.)
2. Go to: `http://localhost:3000`
3. You should see the NXLO website!

### Step 3: Stop the Server

To stop the server, press `Ctrl+C` in the terminal.

---

## 📦 How to Edit Products

### Option 1: Edit products.json Directly (Easiest)

1. Open `products.json` in your text editor
2. You'll see a list of products in JSON format
3. Edit the products:

```json
{
  "id": 1,
  "name": "NXLO Classic Tee",
  "price": 599,
  "description": "Premium quality t-shirt...",
  "image": "https://via.placeholder.com/300x300?text=NXLO+Classic+Tee",
  "category": "tshirts",
  "sizes": ["XS", "S", "M", "L", "XL", "2XL"],
  "color": "Black"
}
```

**What each field means:**
- `id`: Unique number for the product (must be different for each product)
- `name`: Product name (what customers see)
- `price`: Price in Philippine Pesos (₱)
- `description`: Short description of the product
- `image`: URL to the product image
- `category`: Type of product (tshirts, hoodies, accessories, etc.)
- `sizes`: Available sizes
- `color`: Color of the product

**Example: Changing a Price**
```json
"price": 599,  // Change to 799
```

**Example: Adding a New Product**
```json
{
  "id": 7,
  "name": "NXLO Joggers",
  "price": 1499,
  "description": "Comfortable joggers perfect for training",
  "image": "https://via.placeholder.com/300x300?text=NXLO+Joggers",
  "category": "bottoms",
  "sizes": ["XS", "S", "M", "L", "XL", "2XL"],
  "color": "Black"
}
```

4. **Save the file** (Ctrl+S or Cmd+S)
5. **Refresh your browser** (F5 or Cmd+R)
6. The changes will appear on the website!

### Option 2: Use the API (For Advanced Users)

You can also use the API endpoints to manage products:

**Add a new product:**
```bash
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "New Product",
    "price": 999,
    "description": "Product description",
    "image": "image_url",
    "category": "tshirts",
    "sizes": ["S", "M", "L"],
    "color": "Black"
  }'
```

**Update a product:**
```bash
curl -X PUT http://localhost:3000/api/products/1 \
  -H "Content-Type: application/json" \
  -d '{"price": 799}'
```

**Delete a product:**
```bash
curl -X DELETE http://localhost:3000/api/products/1
```

---

## 🌐 Deployment Recommendations

### Best Platforms for a 14-Year-Old Entrepreneur

Here are the **best hosting options** that fit your needs:

| Platform | Cost | Node.js Support | Easy Product Editing | Best For |
|----------|------|-----------------|----------------------|----------|
| **Render** | Free tier + $7/month | ✅ Yes | ✅ Yes (via API) | Best overall choice |
| **Railway** | $5/month minimum | ✅ Yes | ✅ Yes | Simple & affordable |
| **Heroku** | Free tier ended | ✅ Yes | ✅ Yes | Was best, now paid |
| **Vercel** | Free tier | ❌ Limited | ⚠️ Front-end only | Front-end only |
| **Netlify** | Free tier | ❌ No | ⚠️ Front-end only | Front-end only |

### 🏆 **RECOMMENDED: Render.com**

**Why Render?**
- Free tier available (perfect to start)
- Supports Node.js/Express
- Easy deployment from GitHub
- Can upgrade to paid plan (~$7/month) when you need reliability
- Perfect for a student-athlete's budget

**How to Deploy on Render:**

1. **Create a GitHub account** (free at github.com)

2. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial NXLO website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/nxlo-website.git
   git push -u origin main
   ```

3. **Sign up on Render.com** (free)

4. **Connect your GitHub repository:**
   - Click "New +" → "Web Service"
   - Connect your GitHub account
   - Select your `nxlo-website` repository
   - Set Runtime to "Node"
   - Set Build Command: `npm install`
   - Set Start Command: `npm start`
   - Click "Create Web Service"

5. **Your website is live!** 🎉
   - Render will give you a URL like: `https://nxlo-website.onrender.com`

### 💰 Cost Comparison

| Option | Monthly Cost | Annual Cost | Notes |
|--------|-------------|------------|-------|
| Render (Free) | $0 | $0 | Good for testing, may sleep after inactivity |
| Render (Paid) | $7 | $84 | Recommended for serious business |
| Railway | $5+ | $60+ | Good alternative |
| Self-hosting | $5-10 | $60-120 | More control, more technical |

### 🎯 My Recommendation for You

**Start with Render's free tier** to test your website. Once you have consistent sales and need reliability, upgrade to their paid plan (~$7/month). This is much cheaper than traditional hosting and perfect for a student-athlete's budget.

---

## 📄 File Explanations

### `server.js` - The Back-End

This is the Node.js/Express server that:
- Serves the website files (HTML, CSS, JS)
- Provides the API for managing products
- Reads and writes to `products.json`

**Key API Endpoints:**
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get a specific product
- `POST /api/products` - Add a new product
- `PUT /api/products/:id` - Update a product
- `DELETE /api/products/:id` - Delete a product

### `products.json` - The Product Database

This file stores all your product information. Edit this file to:
- Change prices
- Update descriptions
- Add new products
- Remove products

### `public/index.html` - The Website Structure

This is the HTML file that defines the structure of your website:
- Navigation bar
- Hero section (banner)
- About section
- Story/Roadmap section
- Shop section
- Shopping cart modal
- Footer

### `public/style.css` - The Website Styling

This file controls how the website looks:
- Colors (dark/streetwear aesthetic)
- Fonts and text sizes
- Layout and spacing
- Animations and hover effects

**Easy customizations:**
- Change colors: Look for color codes like `#ff6b35`
- Change fonts: Modify `--font-primary`
- Adjust spacing: Modify `--spacing-*` variables

### `public/script.js` - The Website Interactivity

This file handles all the interactive features:
- Loading products from the server
- Displaying products in the shop
- Shopping cart functionality
- Modal interactions

**Well-commented for beginners!**

---

## 🐛 Troubleshooting

### Problem: "npm: command not found"

**Solution:** Node.js is not installed. Download and install from https://nodejs.org/

### Problem: "Port 3000 is already in use"

**Solution:** Another program is using port 3000. Either:
- Close the other program
- Change the port in `server.js`: `const PORT = process.env.PORT || 3001;`

### Problem: Products don't appear on the website

**Solution:**
1. Check if the server is running (`npm start`)
2. Check if `products.json` is valid JSON (use https://jsonlint.com/)
3. Refresh the browser (Ctrl+F5)
4. Check browser console for errors (F12)

### Problem: Images don't load

**Solution:**
- Make sure the image URL is correct and accessible
- Use placeholder images: `https://via.placeholder.com/300x300?text=Product+Name`
- Or upload images to a service like Imgur and use their URLs

### Problem: Changes to products.json don't appear

**Solution:**
1. Save the file (Ctrl+S)
2. Refresh the browser (Ctrl+F5 or Cmd+Shift+R)
3. If still not working, restart the server:
   - Press Ctrl+C in terminal
   - Type `npm start` again

---

## 📚 Learning Resources

Want to learn more about web development?

- **HTML/CSS/JavaScript:** https://www.codecademy.com/
- **Node.js/Express:** https://nodejs.org/docs/
- **Web Development:** https://www.freecodecamp.org/
- **Deployment:** https://render.com/docs

---

## 🎯 Next Steps

1. **Customize the website:**
   - Change colors in `style.css`
   - Update text in `index.html`
   - Add your own product images

2. **Add more products:**
   - Edit `products.json`
   - Add new product objects

3. **Deploy to the internet:**
   - Follow the Render.com deployment guide above
   - Share your website with friends!

4. **Integrate GCash payment:**
   - Research GCash API
   - Modify the checkout button in `script.js`
   - Connect to your GCash merchant account

---

## 💡 Tips for Success

1. **Keep products.json valid:** Use https://jsonlint.com/ to validate
2. **Use high-quality images:** Product images are crucial for sales
3. **Update regularly:** Keep your products and prices current
4. **Mobile-friendly:** The website is responsive (works on phones)
5. **Test before deploying:** Always test locally first

---

## 🤝 Support & Questions

If you have questions:
1. Check the comments in the code
2. Look at the troubleshooting section
3. Search online for specific errors
4. Ask a developer friend or mentor

---

## 📝 License

This code is open source and free to use for your NXLO brand!

---

**Good luck with NXLO! You've got this, champion! 🚀⚽**

Built with ❤️ for a young entrepreneur pursuing excellence.
