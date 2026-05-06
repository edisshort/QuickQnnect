# QuickQnnect

QuickQnnect is a full-stack social media platform built using React, Node.js, Express, and MongoDB.  
The application enables users to create accounts, share posts, interact with content, and explore location-based features through an interactive and responsive interface.

---

# Features

- Secure user authentication system
- Create, update, and manage posts
- Interactive social feed
- Location and map integration using Leaflet
- Responsive modern UI design
- Smooth animations with GSAP
- RESTful API integration
- Dynamic frontend rendering with React
- Client-side routing using React Router

---

# Tech Stack

## Frontend
- React 19
- Vite
- Tailwind CSS
- GSAP
- Leaflet
- React Router DOM

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS

---

# Project Structure

```bash
Quick-final/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── package.json
│   └── server.js
│
├── frontend-new/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# System Architecture

## Frontend

The frontend is developed using React and Vite for fast rendering and modular component-based architecture.

### Main Functionalities
- User authentication pages
- Social feed rendering
- Interactive UI components
- Map integration using Leaflet
- API communication with backend services
- Responsive layouts with Tailwind CSS

---

## Backend

The backend is built with Express.js and MongoDB.

### Core Responsibilities
- Authentication handling
- REST API endpoints
- Database operations
- Post management
- Request validation
- Cross-origin request handling

---

# Installation & Setup

## Prerequisites

Ensure the following are installed:

- Node.js (v16+ recommended)
- MongoDB
- npm or yarn

---

# Backend Setup

## 1. Navigate to Backend Directory

```bash
cd backend
```

## 2. Install Dependencies

```bash
npm install
```

## 3. Configure Environment Variables

Create a `.env` file inside `backend/`

```env
MONGO_URI=mongodb://localhost:27017/quickqnnect
```

## 4. Start Backend Server

```bash
node server.js
```

Backend runs on:

```bash
http://localhost:5000
```

---

# Frontend Setup

## 1. Navigate to Frontend Directory

```bash
cd frontend-new
```

## 2. Install Dependencies

```bash
npm install
```

## 3. Start Development Server

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# API Endpoints

## Authentication

### Register User

```http
POST /api/auth/register
```

### Login User

```http
POST /api/auth/login
```

---

## Posts

### Get All Posts

```http
GET /api/posts
```

### Create Post

```http
POST /api/posts
```

### Get Single Post

```http
GET /api/posts/:id
```

### Update Post

```http
PUT /api/posts/:id
```

### Delete Post

```http
DELETE /api/posts/:id
```

---

# Frontend Scripts

## Development Server

```bash
npm run dev
```

## Production Build

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Run ESLint

```bash
npm run lint
```

---

# Backend Scripts

## Start Server

```bash
node server.js
```

---

# Usage

1. Start MongoDB
2. Run backend server
3. Run frontend development server
4. Open browser at:

```bash
http://localhost:5173
```

5. Register or login to start using the platform

---

# Future Improvements

- Real-time chat functionality
- Notifications system
- Image uploads and media storage
- Friend/follow system
- Post likes and comments
- JWT authentication enhancement
- Deployment with Docker
- Mobile responsiveness optimization

---

# Troubleshooting

## MongoDB Connection Error

Ensure:
- MongoDB service is running
- `MONGO_URI` is configured correctly

---

## Port Already in Use

Change ports in:
- `server.js`
- `vite.config.js`

---

## CORS Issues

Currently configured for development:

```js
origin: "*"
```

Restrict allowed origins in production.

---

# Contributing

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit changes

```bash
git commit -m "Added new feature"
```

4. Push changes

```bash
git push origin feature-name
```

5. Open a Pull Request

---

# License

This project is licensed under the ISC License.

---

# Author

Developed as a full-stack social media platform using React, Node.js, Express, and MongoDB.
