/* ============================================
   NXLO CLOTHING BRAND - STYLESHEET
   ============================================
   Modern, dark streetwear aesthetic
   Perfect for a youth-focused athletic brand
   ============================================ */

/* ============================================
   ROOT VARIABLES - Easy to customize colors
   ============================================ */
:root {
  /* Color Palette */
  --primary-color: #000000;      /* Black - main brand color */
  --secondary-color: #ffffff;    /* White - contrast */
  --accent-color: #ff6b35;       /* Orange - highlights and CTAs */
  --accent-color-2: #004e89;     /* Blue - secondary accent */
  --dark-bg: #0a0e27;            /* Very dark blue-black */
  --light-bg: #f5f5f5;           /* Light gray for sections */
  --text-primary: #ffffff;       /* Primary text color */
  --text-secondary: #cccccc;     /* Secondary text color */
  --border-color: #333333;       /* Border color */
  
  /* Spacing */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
  --spacing-2xl: 4rem;
  
  /* Typography */
  --font-primary: 'Arial', 'Helvetica', sans-serif;
  --font-size-base: 16px;
  --font-size-sm: 14px;
  --font-size-lg: 20px;
  --font-size-xl: 28px;
  --font-size-2xl: 36px;
  --font-size-3xl: 48px;
  
  /* Transitions */
  --transition: all 0.3s ease;
}

/* ============================================
   GLOBAL STYLES
   ============================================ */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-primary);
  background-color: var(--dark-bg);
  color: var(--text-primary);
  line-height: 1.6;
  font-size: var(--font-size-base);
}

/* ============================================
   TYPOGRAPHY
   ============================================ */

h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  margin-bottom: var(--spacing-md);
}

h1 {
  font-size: var(--font-size-3xl);
}

h2 {
  font-size: var(--font-size-2xl);
}

h3 {
  font-size: var(--font-size-xl);
}

p {
  margin-bottom: var(--spacing-md);
  color: var(--text-secondary);
}

a {
  color: var(--accent-color);
  text-decoration: none;
  transition: var(--transition);
}

a:hover {
  color: var(--secondary-color);
}

/* ============================================
   NAVIGATION BAR
   ============================================ */

.navbar {
  background-color: var(--primary-color);
  padding: var(--spacing-md) 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 2px solid var(--accent-color);
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-brand a {
  font-size: var(--font-size-2xl);
  font-weight: 900;
  color: var(--accent-color);
  text-transform: uppercase;
  letter-spacing: 3px;
}

.navbar-menu {
  display: flex;
  list-style: none;
  gap: var(--spacing-lg);
}

.nav-link {
  color: var(--text-primary);
  font-weight: 600;
  text-transform: uppercase;
  font-size: var(--font-size-sm);
  letter-spacing: 1px;
}

.nav-link:hover {
  color: var(--accent-color);
}

.cart-button {
  background-color: var(--accent-color);
  color: var(--primary-color);
  border: none;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: 4px;
  font-weight: 700;
  cursor: pointer;
  transition: var(--transition);
  text-transform: uppercase;
  font-size: var(--font-size-sm);
}

.cart-button:hover {
  background-color: var(--secondary-color);
  transform: scale(1.05);
}

/* ============================================
   HERO SECTION
   ============================================ */

.hero {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color-2) 100%);
  z-index: -1;
}

.hero-content {
  text-align: center;
  z-index: 1;
  animation: fadeInUp 1s ease-out;
}

.hero-title {
  font-size: clamp(3rem, 10vw, 6rem);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 5px;
  color: var(--accent-color);
  margin-bottom: var(--spacing-md);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.hero-subtitle {
  font-size: var(--font-size-xl);
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
  font-weight: 300;
}

.hero-description {
  font-size: var(--font-size-lg);
  color: var(--text-secondary);
  margin-bottom: var(--spacing-2xl);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-button {
  display: inline-block;
  background-color: var(--accent-color);
  color: var(--primary-color);
  padding: var(--spacing-md) var(--spacing-2xl);
  border-radius: 4px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: var(--transition);
  border: 2px solid var(--accent-color);
  cursor: pointer;
  font-size: var(--font-size-base);
}

.cta-button:hover {
  background-color: transparent;
  color: var(--accent-color);
}

/* ============================================
   SECTION STYLES
   ============================================ */

section {
  padding: var(--spacing-2xl) var(--spacing-lg);
}

.section-title {
  font-size: var(--font-size-2xl);
  text-align: center;
  margin-bottom: var(--spacing-lg);
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--accent-color);
}

.section-subtitle {
  text-align: center;
  font-size: var(--font-size-lg);
  color: var(--text-secondary);
  margin-bottom: var(--spacing-2xl);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

/* ============================================
   ABOUT SECTION
   ============================================ */

.about {
  background-color: var(--primary-color);
  border-top: 2px solid var(--accent-color);
}

.about-container {
  max-width: 1200px;
  margin: 0 auto;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-2xl);
  align-items: center;
}

.about-text p {
  margin-bottom: var(--spacing-md);
  line-height: 1.8;
}

.about-text h3 {
  color: var(--accent-color);
  margin-top: var(--spacing-lg);
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
}

.stat {
  text-align: center;
  padding: var(--spacing-lg);
  background-color: rgba(255, 107, 53, 0.1);
  border-radius: 4px;
  border: 1px solid var(--accent-color);
}

.stat h3 {
  color: var(--accent-color);
  font-size: var(--font-size-2xl);
  margin-bottom: var(--spacing-sm);
}

.stat p {
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
  margin: 0;
}

/* ============================================
   STORY / ROADMAP SECTION
   ============================================ */

.story {
  background-color: var(--dark-bg);
}

.story-container {
  max-width: 1200px;
  margin: 0 auto;
}

.roadmap {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-2xl);
}

.roadmap-item {
  display: flex;
  gap: var(--spacing-lg);
  padding: var(--spacing-lg);
  background-color: rgba(255, 107, 53, 0.05);
  border-left: 4px solid var(--accent-color);
  border-radius: 4px;
  transition: var(--transition);
}

.roadmap-item:hover {
  background-color: rgba(255, 107, 53, 0.1);
  transform: translateX(10px);
}

.roadmap-number {
  font-size: var(--font-size-2xl);
  font-weight: 900;
  color: var(--accent-color);
  min-width: 60px;
}

.roadmap-content h3 {
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
}

.roadmap-content p {
  margin: 0;
  font-size: var(--font-size-sm);
}

/* ============================================
   SHOP SECTION
   ============================================ */

.shop {
  background-color: var(--primary-color);
  border-top: 2px solid var(--accent-color);
}

.shop-container {
  max-width: 1200px;
  margin: 0 auto;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--spacing-lg);
  margin-top: var(--spacing-2xl);
}

.product-card {
  background-color: rgba(255, 107, 53, 0.05);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  overflow: hidden;
  transition: var(--transition);
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  border-color: var(--accent-color);
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(255, 107, 53, 0.2);
}

.product-image {
  width: 100%;
  height: 280px;
  object-fit: cover;
  background-color: var(--border-color);
}

.product-info {
  padding: var(--spacing-lg);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.product-category {
  color: var(--accent-color);
  font-size: var(--font-size-sm);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: var(--spacing-sm);
}

.product-name {
  color: var(--text-primary);
  font-size: var(--font-size-lg);
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
}

.product-description {
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-md);
  flex-grow: 1;
}

.product-price {
  color: var(--accent-color);
  font-size: var(--font-size-xl);
  font-weight: 900;
  margin-bottom: var(--spacing-md);
}

.product-sizes {
  display: flex;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
  flex-wrap: wrap;
}

.size-option {
  padding: var(--spacing-xs) var(--spacing-sm);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  cursor: pointer;
  transition: var(--transition);
  font-size: var(--font-size-sm);
}

.size-option:hover {
  border-color: var(--accent-color);
  color: var(--accent-color);
}

.size-option.selected {
  background-color: var(--accent-color);
  color: var(--primary-color);
  border-color: var(--accent-color);
}

.add-to-cart-btn {
  background-color: var(--accent-color);
  color: var(--primary-color);
  border: none;
  padding: var(--spacing-md);
  border-radius: 4px;
  font-weight: 700;
  cursor: pointer;
  transition: var(--transition);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.add-to-cart-btn:hover {
  background-color: var(--secondary-color);
  transform: scale(1.05);
}

.loading {
  text-align: center;
  padding: var(--spacing-2xl);
  color: var(--text-secondary);
  font-size: var(--font-size-lg);
}

/* ============================================
   MODAL / SHOPPING CART
   ============================================ */

.modal {
  display: none;
  position: fixed;
  z-index: 2000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  animation: fadeIn 0.3s ease;
}

.modal.show {
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background-color: var(--primary-color);
  border: 2px solid var(--accent-color);
  border-radius: 4px;
  width: 90%;
  max-width: 600px;
  max-height: 80vh;
  overflow-y: auto;
  animation: slideUp 0.3s ease;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-lg);
  border-bottom: 1px solid var(--border-color);
}

.modal-header h2 {
  margin: 0;
  color: var(--accent-color);
}

.close-btn {
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: var(--font-size-2xl);
  cursor: pointer;
  transition: var(--transition);
}

.close-btn:hover {
  color: var(--accent-color);
}

.modal-body {
  padding: var(--spacing-lg);
  min-height: 200px;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md);
  border-bottom: 1px solid var(--border-color);
}

.cart-item-info h4 {
  margin: 0 0 var(--spacing-xs) 0;
  color: var(--text-primary);
}

.cart-item-info p {
  margin: 0;
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
}

.cart-item-price {
  color: var(--accent-color);
  font-weight: 700;
  font-size: var(--font-size-lg);
}

.empty-cart {
  text-align: center;
  padding: var(--spacing-2xl);
  color: var(--text-secondary);
}

.modal-footer {
  padding: var(--spacing-lg);
  border-top: 1px solid var(--border-color);
  text-align: center;
}

.cart-total {
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-lg);
  color: var(--accent-color);
}

.checkout-btn {
  background-color: var(--accent-color);
  color: var(--primary-color);
  border: none;
  padding: var(--spacing-md) var(--spacing-2xl);
  border-radius: 4px;
  font-weight: 700;
  cursor: pointer;
  transition: var(--transition);
  text-transform: uppercase;
  width: 100%;
  margin-bottom: var(--spacing-md);
}

.checkout-btn:hover {
  background-color: var(--secondary-color);
}

.checkout-note {
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
  margin: 0;
}

/* ============================================
   FOOTER
   ============================================ */

.footer {
  background-color: var(--primary-color);
  border-top: 2px solid var(--accent-color);
  padding: var(--spacing-2xl) var(--spacing-lg);
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-2xl);
  margin-bottom: var(--spacing-2xl);
}

.footer-content h3 {
  color: var(--accent-color);
  margin-bottom: var(--spacing-md);
}

.footer-content p {
  color: var(--text-secondary);
  margin-bottom: var(--spacing-sm);
}

.footer-contact {
  font-size: var(--font-size-sm);
}

.footer-links h4,
.footer-social h4 {
  color: var(--accent-color);
  margin-bottom: var(--spacing-md);
}

.footer-links ul {
  list-style: none;
}

.footer-links li {
  margin-bottom: var(--spacing-sm);
}

.footer-links a {
  color: var(--text-secondary);
}

.social-links {
  display: flex;
  gap: var(--spacing-md);
}

.social-links a {
  color: var(--text-secondary);
}

.footer-bottom {
  text-align: center;
  padding-top: var(--spacing-lg);
  border-top: 1px solid var(--border-color);
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
}

/* ============================================
   ANIMATIONS
   ============================================ */

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* ============================================
   RESPONSIVE DESIGN
   ============================================ */

@media (max-width: 768px) {
  /* Navigation */
  .navbar-menu {
    gap: var(--spacing-md);
  }

  .nav-link {
    font-size: 12px;
  }

  /* Hero */
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: var(--font-size-lg);
  }

  /* About */
  .about-content {
    grid-template-columns: 1fr;
  }

  .about-stats {
    grid-template-columns: 1fr;
  }

  /* Roadmap */
  .roadmap {
    grid-template-columns: 1fr;
  }

  /* Products */
  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: var(--spacing-md);
  }

  /* Modal */
  .modal-content {
    width: 95%;
  }

  /* Footer */
  .footer-container {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  /* Spacing */
  section {
    padding: var(--spacing-lg) var(--spacing-md);
  }

  /* Navigation */
  .navbar-container {
    padding: 0 var(--spacing-md);
  }

  .navbar-menu {
    display: none;
  }

  /* Hero */
  .hero-title {
    font-size: 2rem;
  }

  .cta-button {
    padding: var(--spacing-md) var(--spacing-lg);
  }

  /* Products */
  .products-grid {
    grid-template-columns: 1fr;
  }
}
