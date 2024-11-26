# URL Shortener Application

A simple URL shortener service built with Node.js, Express, and MongoDB. This application allows users to shorten long URLs and track the number of clicks on shortened URLs and last accessed timestamp.

---

## 🚀 Deployed Application

Visit the live application: **[URL Shortener](https://your-deployed-url.com)**

---

## 📋 Features

- Generate a short URL for a given original URL.
- Redirect users to the original URL when accessing the short URL.
- Track the number of times a short URL is accessed and last accessed timestamp of short URL.

---

## 🛠️ Installation and Running Locally

### Prerequisites
- [Node.js](https://nodejs.org/) installed (v14 or later).
- [MongoDB](https://www.mongodb.com/) installed and running locally or access to a MongoDB Atlas cluster.
- [Docker](https://www.docker.com/) (optional, for containerized setup).

### Steps to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/kartik-chausali/url-shortner.git
   cd url-shortener
2. Install dependencies:
   ```bash
   npm install
3. Start the application:
   ```bash
   npm start

### 🛠️ Using Docker

1. Build the Docker image:
   ```bash
   docker build -t url-shortener .
2. Run the container:
   ```bash
   docker run -p 4000:4000 --env-file .env url-shortener

---

## 🔗 API Endpoints

1. Create a Short URL
   
   Endpoint:
   ```bash
   POST http://localhost:4000/url
   ```
   Request Body:
   ```bash
   {"url": "https://www.youtube.com"}
   ```
   Response:
   ```bash
   {"id" : "xYgh"}
   ```
#### Note: above response id is important to access other routes.

2. Redirect to Original URL

   Endpoint:
   ```bash
   GET http://localhost:4000/:id
   ```
   Response: Redirects to the original URL (https://www.youtube.com).

3. Retrieve Short URL Details
   
   Endpoint:
   ```bash
   GET http://localhost:4000/url/stats/:id
   ```
   Response:
   ```bash
   {
    "totalClicks": 1,
    "lastAccessed": 1732622832689}
   ```
   


