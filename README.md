# Digital Voting Frontend

This is the frontend web application for Digital Voting System built with Next.js 13 and TypeScript.
# Website link: https://digital-voting-frontend.vercel.app/
# 🔖 Author
# **Abhishek Singh**  
# Vellore Institute of Technology, Chennai

## 🛠 Technologies Used

- Next.js 13
- TypeScript
- Tailwind CSS
- Zustand (State Management)
- React Query (Tanstack Query)
- Axios
- Cloudinary (Image Upload)

## 🚀 Features

- Voter Registration with document upload
- Admin Registration
- Secure Login for both Voters and Admins
- Responsive Design with Tailwind CSS
- Secure API calls with JWT authentication
- Persistent Login state management
- Protected routes with conditional rendering
- Clean UI design

---

## 🔧 Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/abhishek-7-singh/digital-voting-frontend.git
cd digital-voting-frontend
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Environment Variables
Create a `.env.local` file in root directory:

```env
NEXT_PUBLIC_BASE_API_URL=https://digital-voting-backend.onrender.com
```
*This is your backend URL hosted on Render.*

### 4️⃣ Run Locally
```bash
npm run dev
```

Frontend runs on: **http://localhost:3000/**

## 🏗 Deployment
Frontend deployed on **Vercel**.

## 📁 Project Structure
```
.
├── components/     # Reusable React components
│   ├── forms/     # Form components
│   └── layout/    # Layout components
├── hooks/         # Custom React hooks
│   └── queries/   # React Query hooks
├── pages/         # Next.js pages
├── public/        # Static assets
├── store/         # Zustand store
├── styles/        # Global styles
├── utils/         # Utility functions
└── .env.local     # Environment variables
```

## ⚠ Important Notes
- Make sure backend server is running and accessible
- All API requests use `NEXT_PUBLIC_BASE_API_URL` as base URL
- JWT tokens are stored securely for authentication
