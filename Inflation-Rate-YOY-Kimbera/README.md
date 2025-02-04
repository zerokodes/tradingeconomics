# 📈 Economic Event Calendar & Market Data Dashboard

## 🚀 Project Overview

The Dashboard is a web application that provides **real-time market data**(Kimbera:MM), **economic event calendars**(Inflation Rate YOY), and **financial metrics**. The platform fetches data from **Trading Economics**, processes it efficiently, and displays it in an interactive format.

To optimize performance, we **store API responses in MongoDB**, reducing redundant requests and significantly **improving page load speeds**. The project follows the **MVC architecture** and utilizes **Node.js, Express, MongoDB, and Fetch API** for seamless data management.

---

## 🛠 Technologies Used

### **Frontend**

- **HTML, CSS, JavaScript** – For building the UI.
- **Bootstrap & Custom CSS** – For responsive design.
- **Fetch API** – To interact with backend APIs.

### **Backend**

- **Node.js & Express.js** – For server-side logic.
- **MongoDB & Mongoose** – For storing API responses and improving performance.
- **Trading Economics API** – To fetch financial data.

### **Deployment**

- **Backend:** [Render](https://backend-vqnv.onrender.com) (Auto-Deploy on Git Push)
- **Frontend:** [Render](https://frontend-pnqw.onrender.com) (Replace with the actual link)

### **API Documentation**

- 📚 **Metrics API Documentation:** [View Here](#) (Replace with the actual API doc link)

---

## 🔧 Setup & Installation

### **1️⃣ Clone the Repository**

```sh
git clone https://github.com/zerokodes/tradingeconomics.git
cd Inflation-Rate-YOY-Kimbera
```

### **2️⃣ Install Dependencies**

```sh
npm install
```

### **3️⃣ Setup Environment Variables**

Create a `.env` file in the root directory and add the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
TRADING_ECONOMICS_API_KEY=your_api_key
```

### **4️⃣ Start the Server**

```sh
npm start
```

- The server will run at **`http://localhost:5000`**.

### **5️⃣ Start the Frontend**

Simply open `index.html` in a browser or use **Live Server Extension** in VS Code.

---

## ⚡️ Performance Optimization (Challenges & Solutions)

### 🚧 **Challenge 1: API Request Limits & Performance Issues**

**Problem:**

- The page was making frequent API requests, exceeding the **Trading Economics API** limit.
- Page load speed was slow due to real-time fetching.

**💡 Solution:**

- Implemented a **MongoDB caching mechanism**:
  - API data is **stored in the database** when first fetched.
  - Subsequent requests fetch data **from MongoDB instead of the API**.
  - Database updates occur at **scheduled intervals** instead of on every request.

**🚀 Results:**  
👉 Reduced API request count by **80%**.  
👉 Boosted page loading speed from **120s → 1.5s**.

---

### 🚧 **Challenge 2: Efficient Pagination for Market Data**

**Problem:**

- Initially, we had a "See More" button, leading to **slow navigation** when loading large datasets.

**💡 Solution:**

- Implemented **Next & Previous buttons** for **paginated data rendering**.
- Optimized JavaScript to show only **15 records per page**.

**🚀 Results:**  
👉 Faster navigation between records.  
👉 Smooth user experience.

---

## 📌 Features

✅ **Real-time market data with caching**  
✅ **Pagination for efficient data rendering**  
✅ **Economic event calendar integration**  
✅ **Interactive financial metrics dashboard**

---

## 🚀 Deployment

### **🌐 Backend (Hosted on Render)**

- URL: **[https://your-backend-url.render.com](#)** (Replace with actual backend link)

### **🌍 Frontend (Live Server)**

- URL: **[https://your-frontend-url.com](#)** (Replace with actual frontend link)

---

## 🛠 Contributors

👨‍💻 **zerokodes** - Developer

---

## 📩 Contact

For questions or issues, please contact:  
📎 Email: **nduka.henrychisom@gmail.com**  
📌 GitHub Issues: **[Create an Issue](https://github.com/zerokodes/tradingeconomics/issues)**

---
