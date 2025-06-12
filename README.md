# 🎥 YouTube Clone (MERN Stack)

A full-stack video-sharing platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and Tailwind CSS. This clone replicates key features of YouTube, including video uploads, channel customization, comments, and JWT-based authentication.

---

## 🚀 Features

* 🔐 User Registration and Login (JWT Authentication)
* 📤 Video Upload (Cloudinary integration)
* 🎬 Video Feed with Categories
* 👤 Channel Pages with Avatar, Handle & Subscriber Info
* ✏️ Update/Delete Videos (Custom Channel Dashboard)
* 💬 Comment System (CRUD)
* 📱 Responsive UI with Tailwind CSS
* 🌐 Protected Routes via Redux and React Router

---

## 🧑‍💻 Tech Stack

**Frontend:**

* React + Vite
* Tailwind CSS
* Redux Toolkit
* React Router DOM
* Axios

**Backend:**

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT for Authentication
* Cloudinary for Video/Image Storage
* Multer for File Uploads

---

## 📁 Project Structure

```
client/             # React frontend
  ├── components/   # Reusable components (VideoCard, CommentCard, etc.)
  ├── pages/        # Pages like Home, Login, CustomizeContent
  ├── redux/        # Redux slices and store
  └── utils/        # API calls, validation, helpers

server/             # Express backend
  ├── routes/       # Auth, Videos, Comments
  ├── controllers/  # Business logic
  ├── models/       # Mongoose schemas
  └── middleware/   # Auth middleware, error handling
```

---

## 🔧 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/youtube-clone.git
cd youtube-clone
```

### 2. Setup the Backend

```bash
cd server
npm install
```

Create a `.env` file inside `/server`:

```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Run backend server:

```bash
npm run dev
```

### 3. Setup the Frontend

```bash
cd ../client
npm install
npm run dev
```

---

## 🔒 Authentication

* Uses **JWT tokens** stored in `localStorage`
* Protected routes use a combination of `useSelector` and `useEffect`
* Token is sent via `Authorization` header

---

## 📹 Video Upload

* Videos are uploaded to **Cloudinary**
* Validates file types (MP4, WebM, etc.)
* Displays preview thumbnails

---

## 🗑️ Deletion & Update Logic

* Update/Delete operations reflect instantly in the UI using optimistic state updates
* Data also synced to MongoDB via API

---

## 🌍 Future Improvements

* Like/Dislike functionality
* Subscribe to Channels
* Search and Filter
* Live Streaming & Shorts
* Admin Dashboard

---

## 🧑‍🎓 Author

**Rohit Varma Datla**
Full-Stack Developer | Passionate about building real-world web apps
📧 \[[your-email@example.com](mailto:your-email@example.com)]
🔗 [LinkedIn](https://linkedin.com/in/your-profile) | [Portfolio](https://your-portfolio.com)

---

## 📜 License

This project is licensed under the MIT License.

---
