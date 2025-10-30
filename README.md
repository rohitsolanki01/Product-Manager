# 🤖  Product Manager - MERN Stack Application

<div align="center">

![Project Banner](https://img.shields.io/badge/MERN-Stack-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

**A modern, full-stack product management application built with MERN stack featuring JWT authentication, responsive design, and real-time statistics.**

[Live Demo](https://your-app.onrender.com) · [Report Bug](https://github.com/yourusername/your-repo/issues) · [Request Feature](https://github.com/yourusername/your-repo/issues)

</div>

---

## 📋 Table of Contents

- [About The Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

---

## 🎯 About The Project

**AI Product Manager** is a comprehensive full-stack web application designed to help businesses and entrepreneurs manage their product inventory efficiently. Built as an internship project to demonstrate proficiency in modern web development technologies.

### Why This Project?

- ✅ **Production-Ready**: Fully deployed and functional application
- ✅ **Modern Stack**: Built with latest MERN technologies
- ✅ **Secure**: JWT-based authentication with bcrypt password hashing
- ✅ **Responsive**: Mobile-first design that works on all devices
- ✅ **Clean Code**: Well-documented, maintainable codebase
- ✅ **Best Practices**: Follows industry standards and conventions

---

## ✨ Features

### 🔐 Authentication & Authorization
- User registration with email validation
- Secure login with JWT tokens
- Password strength indicator
- Protected routes and API endpoints
- Persistent sessions with localStorage

### 📦 Product Management
- **Create**: Add new products with name, description, and price
- **Read**: View all products in grid or list layout
- **Update**: Edit product details in real-time
- **Delete**: Remove products with confirmation dialog
- Real-time validation and error handling

### 📊 Dashboard & Analytics
- Live statistics cards showing:
  - Total products count
  - Total inventory value
  - Average product price
  - Highest priced product
- Search functionality across products
- Sort by: Newest, Oldest, Price (High/Low)
- Toggle between grid and list views

### 🎨 User Experience
- Beautiful gradient designs
- Smooth animations and transitions
- Toast notifications for user actions
- Loading states and skeletons
- Empty states with helpful CTAs
- Form validation with inline feedback
- Character counters for input fields

### 📱 Responsive Design
- Mobile-first approach
- Works on devices from 375px to 1920px+
- Touch-friendly buttons and interactions
- Hamburger menu for mobile navigation
- Adaptive layouts for all screen sizes

---

## 🛠️ Tech Stack

### Frontend
- **React 18.2** - UI library
- **Vite** - Build tool and dev server
- **React Router v6** - Client-side routing
- **Axios** - HTTP client
- **Tailwind CSS** - Utility-first CSS framework
- **React Hot Toast** - Toast notifications

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication tokens
- **Bcrypt.js** - Password hashing

### DevOps & Deployment
- **Git & GitHub** - Version control
- **Render** - Hosting platform
- **MongoDB Atlas** - Cloud database
- **Environment Variables** - Configuration management

---

## 📸 Screenshots

### Landing Page
![Landing Page](screenshots/landing.png)
*Modern landing page with feature highlights*

### Dashboard
![Dashboard](screenshots/dashboard.png)
*Clean dashboard with statistics and product grid*

### Product Management
![Product Form](screenshots/product-form.png)
*Intuitive product creation form with validation*

### Mobile View
![Mobile View](screenshots/mobile.png)
*Fully responsive mobile experience*

---

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB Atlas account (free tier)
- Git

### Installation

1. **Clone the repository**
  https://github.com/rohitsolanki01/Product-Manager
cd your-repo-name

3. **Install backend dependencies**
   cd backend
   npm  install

3. **Install frontend dependencies**
  cd frontend
  npm install

c..
cd backend


### Environment Variables

#### Backend (.env in `server` folder)
MongoDB Connection
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/productDB?retryWrites=true&w=majority

JWT Secret
JWT_SECRET=your_super_secret_jwt_key_change_in_production

Server Configuration
PORT=5000
NODE_ENV=development



#### Frontend (.env in `client` folder)
VITE_API_URL=http://localhost:8080


---

## 💻 Usage

### Development Mode

1. **Start Backend Server**
nodemon index.js

Server runs on `http://localhost:8080`

2. **Start Frontend Dev Server**
  npm run dev

App runs on `http://localhost:5173`

3. **Access the Application**
- Open browser and go to `http://localhost:5173`
- Register a new account
- Start managing products!

### Production Mode

Build frontend
cd client
npm run build

Start backend
cd ../server
npm start



---

## 📡 API Documentation

### Authentication Endpoints

#### Register User
POST /api/auth/register
Content-Type: application/json

{
"name": "John Doe",
"email": "john@example.com",
"password": "password123"
}



#### Login User
POST /api/auth/login
Content-Type: application/json

{
"email": "john@example.com",
"password": "password123"
}



#### Get User Profile
GET /api/auth/profile
Authorization: Bearer {token}



### Product Endpoints

#### Get All Products
GET /api/products
Authorization: Bearer {token}


#### Get Single Product
GET /api/products/:id
Authorization: Bearer {token}



#### Create Product
POST /api/products
Authorization: Bearer {token}
Content-Type: application/json

{
"name": "Product Name",
"description": "Product Description",
"price": 999
}



#### Update Product
PUT /api/products/:id
Authorization: Bearer {token}
Content-Type: application/json

{
"name": "Updated Name",
"description": "Updated Description",
"price": 1299
}



#### Delete Product
DELETE /api/products/:id
Authorization: Bearer {token}



---

## 🌐 Deployment

### Deploy to Render

**Backend Deployment:**
1. Push code to GitHub
2. Create new Web Service on Render
3. Connect GitHub repository
4. Set root directory to `server`
5. Add environment variables
6. Deploy!

**Frontend Deployment:**
1. Create new Static Site on Render
2. Connect same repository
3. Set root directory to `client`
4. Build command: `npm install && npm run build`
5. Publish directory: `dist`
6. Add `VITE_API_URL` environment variable
7. Deploy!

**Detailed guide:** [See DEPLOYMENT.md](DEPLOYMENT.md)

---

## 📁 Project Structure

ai-product-manager/
├── client/ # Frontend React application

│ ├── public/ # Static assets

│ ├── src/

│ │ ├── components/ # Reusable components

│ │ │ ├── Navbar.jsx

│ │ │ ├── ProductCard.jsx

│ │ │ └── ProtectedRoute.jsx

│ │ ├── pages/ # Page components

│ │ │ ├── Landing.jsx

│ │ │ ├── Login.jsx

│ │ │ ├── Register.jsx

│ │ │ ├── Dashboard.jsx

│ │ │ └── ProductForm.jsx

│ │ ├── context/ # React Context

│ │ │ └── AuthContext.jsx

│ │ ├── utils/ # Utility functions

│ │ │ └── api.js

│ │ ├── App.jsx # Main App component

│ │ └── main.jsx # Entry point

│ ├── package.json

│ └── vite.config.js

│
├── backend/ # Backend Node.js application

│ ├── config/ # Configuration files

│ │ └── db.js

│ ├── models/ # Mongoose models

│ │ ├── User.js

│ │ └── Product.js

│ ├── controllers/ # Route controllers

│ │ ├── authController.js

│ │ └── productController.js

│ ├── routes/ # API routes

│ │ ├── auth.js

│ │ └── product.js

│ ├── middleware/ # Custom middleware

│ │ └── auth.js

│ ├── index.js # Server entry point

│ ├── package.json

│ └── vercel.json # Deployment config

│
├── screenshots/ # Project screenshots

├── .gitignore

├── LICENSE

└── README.md




---

## 🤝 Contributing

Contributions are what make the open source community amazing! Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 👨‍💻 Contact

**Your Name** - [@yourtwitter](https://x.com/Rohit_01_tech) - rohitsolanki0473@example.com

**Project Link:** [https://github.com/yourusername/your-repo-name](https://github.com/rohitsolanki01/Product-Manager)

**Live Demo:** [https://your-app.onrender.com](https://product-manage-three.vercel.app/)

**LinkedIn:** [Your LinkedIn](https://www.linkedin.com/in/rohit-solanki-495860348/)

---

## 🙏 Acknowledgments

- [React Documentation](https://react.dev/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Tailwind CSS](https://tailwindcss.com/)
- [Render](https://render.com/)
- [Font Awesome](https://fontawesome.com/) for icons
- [Shields.io](https://shields.io/) for badges
- Inspired by modern SaaS applications

---

## 🔮 Future Enhancements

- [ ] Product categories and tags
- [ ] Image upload for products
- [ ] Export data to CSV/PDF
- [ ] Dark mode toggle
- [ ] Email verification
- [ ] Password reset functionality
- [ ] Product search with filters
- [ ] Pagination for large datasets
- [ ] User roles (Admin/User)
- [ ] Product analytics dashboard

---

<div align="center">

**⭐ Star this repo if you found it helpful!**

Made with ❤️ by [Rohit Soalnki](https://github.com/rohitsolanki01/)

</div>

