# 🍽️ Leftovers Recipe Generator

**Turn nothing into something** - Transform your fridge leftovers into delicious, restaurant-quality meals with our intelligent recipe generator.

## ✨ Features

- 🥬 **Smart Ingredient Selection** - Select what's in your fridge and get personalized recipe suggestions
- 📖 **50+ Delicious Recipes** - From quick meals to gourmet dishes
- 💾 **Save Favorites** - Create an account to save your favorite recipes
- 🔗 **Shareable Links** - Share your ingredient combos with friends
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- ✨ **Beautiful UI** - Pinterest-style aesthetic with cute animations


## 🎨 Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| Tea Rose (Light) | `#FFB7C5` | Primary background, buttons |
| Tea Rose (Medium) | `#FF91A4` | Hover states |
| Tea Rose (Dark) | `#FF69B4` | Text accents |
| Tea Rose (Pale) | `#FFF0F5` | Card backgrounds |

## 🚀 Tech Stack

### Frontend
- **React 18** - UI library
- **React Router** - Navigation
- **Framer Motion** - Animations
- **Axios** - API calls
- **Lucide React** - Icons
- **CSS3** - Styling

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB Atlas** - Database
- **JWT** - Authentication
- **Bcryptjs** - Password hashing
- **Nodemailer** - Email services

## 📁 Project Structure
leftovers-recipe-generator/
├── backend/
│ ├── models/
│ │ ├── User.js
│ │ └── SavedRecipe.js
│ ├── routes/
│ │ ├── auth.js
│ │ ├── recipes.js
│ │ └── savedRecipes.js
│ ├── middleware/
│ │ └── auth.js
│ ├── services/
│ │ └── emailService.js
│ ├── data/
│ │ └── ingredients.js
│ ├── server.js
│ └── package.json
├── frontend/
│ ├── public/
│ │ └── index.html
│ ├── src/
│ │ ├── components/
│ │ │ ├── Navbar.jsx
│ │ │ ├── IngredientChecklist.jsx
│ │ │ ├── RecipeCard.jsx
│ │ │ └── ShareModal.jsx
│ │ ├── pages/
│ │ │ ├── Home.jsx
│ │ │ ├── Login.jsx
│ │ │ ├── Signup.jsx
│ │ │ ├── Dashboard.jsx
│ │ │ ├── SavedRecipes.jsx
│ │ │ ├── ForgotPassword.jsx
│ │ │ ├── ResetPassword.jsx
│ │ │ └── VerifyEmail.jsx
│ │ ├── App.jsx
│ │ ├── index.js
│ │ └── index.css
│ └── package.json
└── README.md


## 🛠️ Installation

### Prerequisites
- Node.js (v18 or higher)
- MongoDB Atlas account (free tier)
- npm or yarn

### Backend Setup

```bash
# Clone the repository
git clone https://github.com/Dusica77/Leftovers-recipe-generator.git
cd leftovers-recipe-generator

# Navigate to backend
cd backend

# Install dependencies
npm install

# Start backend server
npm run dev


### Frontend Setup
# Open a new terminal
cd frontend

# Install dependencies
npm install

# Start React app
npm start
