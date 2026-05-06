# GoaShore

GoaShore is a full-stack beach cleanup coordination platform built using React, Node.js, Express, and MongoDB. The application helps volunteers discover beaches, organize cleanup events, upload cleanup progress photos, and track environmental impact through a centralized dashboard.

---

## Features

- User authentication with JWT-based login and registration
- Create and manage beach cleanup events
- Interactive dashboard with cleanup statistics and leaderboard
- Upload cleanup images using Cloudinary
- Track volunteers and trash collection progress
- Secure REST API with rate limiting and CORS protection
- Pre-seeded Goa beach locations for quick setup

---

## Tech Stack

### Frontend
- React.js
- React Router
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

### Services
- Cloudinary (Image Uploads)

---

## Project Structure

```bash
GoaShore/
│
├── backend/
│   ├── package.json
│   ├── server.js
│   └── uploads/
│
├── frontend/
│   ├── package.json
│   └── src/
│       ├── components/
│       ├── pages/
│       └── App.js
│
├── package.json
└── README.md
```

---

## Installation and Setup

### Clone Repository

```bash
git clone https://github.com/your-username/GoaShore.git
cd GoaShore
```

---

## Backend Setup

Navigate to backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside `backend/`:

```env
MONGODB_URI=mongodb://localhost:27017/goashore
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

FRONTEND_URL=http://localhost:3000
```

Start backend server:

```bash
npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

---

## Frontend Setup

Open a new terminal and navigate to frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start frontend:

```bash
npm start
```

Frontend runs on:

```bash
http://localhost:3000
```

---

## Environment Variables

### Backend Variables

| Variable | Description |
|---|---|
| `MONGODB_URI` | MongoDB connection string |
| `JWT_SECRET` | JWT secret key |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name |
| `CLOUDINARY_API_KEY` | Cloudinary API key |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret |
| `FRONTEND_URL` | Frontend URL for CORS |

### Frontend Variable (Optional)

| Variable | Description |
|---|---|
| `REACT_APP_API_URL` | Custom backend API URL |

---

## Core Functionalities

- Secure user authentication
- Beach cleanup event creation and management
- Cleanup image uploads through Cloudinary
- Volunteer and cleanup tracking
- Dashboard with cleanup statistics and leaderboard
- Automatic seeding of Goa beach data

---

## Running the Project Locally

Start backend:

```bash
cd backend
npm run dev
```

Start frontend:

```bash
cd frontend
npm start
```

Open the application in browser:

```bash
http://localhost:3000
```

---

## Future Improvements

- Volunteer RSVP system
- Advanced filtering and search
- Multiple image uploads
- Admin dashboard
- Deployment support

---

## License

This project is licensed under the MIT License.

---

## Author

Harsh Solanki and Team
