# 🛒 React Redux Cart App

This is a simple React.js application that implements an **Add to Cart** feature using **Redux Toolkit** for state management.  

The app fetches products from the DummyJSON API, allows local search filtering, and updates the cart globally.

---

## 📌 Features
✅ Fetch products from API (`https://dummyjson.com/products`)  
✅ Display products in a responsive grid layout  
✅ Search products locally by title  
✅ Add items to cart with global cart count  
✅ Redux Toolkit for state management  

---

## 🛠 Tech Stack
- React.js (Vite )
- Redux Toolkit (`@reduxjs/toolkit`)
- React Redux (`react-redux`)
- Axios (for API calls)
- Tailwind CSS (or any CSS framework)
- Shadcn UI (for UI components)

---

## 📂 Project Structure
src/
├── components/
│ ├── ProductCard.jsx
│ ├── Cart.jsx
│ └── SearchBar.jsx
├── pages/
│ └── ProductListPage.jsx
├── redux/
│ ├── store.js
│ ├── cartSlice.js
│ └── productSlice.js
├── App.jsx
└── main.jsx

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/react-cart-app.git
cd react-cart-app