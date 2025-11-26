# 🛋️ Furniture E-Commerce Website  
A modern and fully responsive furniture e-commerce web application built with **Next.js**, **Tailwind CSS**, and optimized UI components.

🌐 **Live Site URL:** [https://mega-mart-client-gilt.vercel.app/]  
💻 **Client Repository:** [HomeNest Client](https://github.com/MD-ELIUS/mega-mart-client)  
🖥️ **Server Repository:** [HomeNest Server](https://github.com/MD-ELIUS/mega-mart-server)

## 🚀 Features

### Public Pages
- Modern landing page with 7 fully-designed sections
- Responsive Navbar with sticky behavior
- Products listing page (6+ cards)
- Product details page
- Login & Register with Firebase + Google Login
- Search & Category UI filters (UI-only)

### Protected Pages
- Accessible only after login:
- Add Product (form + validation + MongoDB insertion)- 
- Manage Products (table + View + Delete Actions)

### Authentication (Firebase + Context API)

**Email/Password login:**
- Google OAuth login
- User dropdown with:
   - Profile info
   - Add Product
   - Manage Products
   - Signout

### 💻 Tech Stack

  #### Frontend
  - Next.js (App Router)
  - React + Tailwind CSS
  - Firebase Authentication
  - Context API
  - Next/Image Optimization 

  #### Backend
  - Express.js
  - MongoDB & Mongoose
  - CORS enabled

  #### Tools
  - vercel(deployment)

## 📂 Project Structure

* `/components`

  * `/home`

    * `BlogSection.jsx`

    * `FeaturedProduct.jsx`

    * `HeroBanner.jsx`

    * `ReviewSection.jsx`

    * `WhyChooseUs.jsx`

  * `/shared`

    * `Navbar.jsx`

    * `Footer.jsx`

    * `ProductCard.jsx`

* `/app`

  * `page.jsx` (Home page)

  * `layout.jsx`

  * `/products`

    * `page.jsx` (All Products List)

    * `[slug]/page.jsx` (Single Product Page)

  * `/(auth)`

    * `/login`

      * `page.jsx`

    * `/register`

      * `page.jsx`

  * `/manage-product`

    * `page.jsx`

  * `/add-product`

    * `page.jsx`

  * `/contact`

    * `page.jsx`

  * `/about`

    * `page.jsx`

* `/public`

  * `/images`



## 📦 Installation & Setup

### 1️⃣ Clone the repository
git clone https://github.com/MD-ELIUS/mega-mart-client.git

### 2️⃣ Install dependencies
npm install

### 3️⃣ Start development server
npm run dev

Project URL: http://localhost:3000


## 📱 Responsive Design
Optimized for:
- Desktop  
- Tablet  
- Mobile  

## 📜 License
This project is open-source and free to use.

## 🙌 Author
Developed by **[MD. ELIUS](https://github.com/MD-ELIUS)**  

