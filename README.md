# 📚 MyLibrary – Personal Book Library Web App

Welcome to **MyLibrary**, a simple and useful web app designed to help you manage your personal book collection with ease. Whether you're an avid reader or just want to keep track of books you own, borrow, or lend — this tool has you covered!

---

## ✨ What You Can Do

- 🔍 **Search** for books by title or author  
- 📂 **Organize** books into categories like Fiction, Non-fiction, Sci-Fi, and more  
- ➕ **Add**, edit, or remove books from your library  
- 📅 Track **borrowing status** (available or borrowed)  
- 📜 View detailed **borrowing history** — who borrowed it, when, and whether it's returned

---

## 🛠️ Built With

This is a full-stack project made using:

### Frontend
- HTML, CSS, and Vanilla JavaScript (no frameworks — keeping it simple!)
- Fetch API to connect with the backend

### Backend
- Node.js with Express for the server
- MongoDB for storing all your book data
- Mongoose for managing database models

---

## 📁 Project Structure

my-library-app/
├── backend/
│ ├── server.js # Main server file
│ ├── routes/
│ │ └── books.js # API routes for books
│ └── models/
│ └── Book.js # Mongoose model
├── frontend/
│ ├── index.html # Main UI page
│ ├── style.css # Styling
│ └── app.js # JS for dynamic interactions
├── README.md
└── package.json



---

## 🚀 Getting Started

Want to try it out on your own system? Here’s how:

### 1. Clone the repo
```bash
git clone https://github.com/your-username/personal-book-library.git
cd personal-book-library

2. Set up the backend
cd backend
npm install
3. Configure the database
MONGODB_URI=your_mongodb_connection_string
PORT=5000
4. Start the backend
npm start
5. Run the frontend
Open frontend/index.html in your browser — or use VSCode’s Live Server for best results.

