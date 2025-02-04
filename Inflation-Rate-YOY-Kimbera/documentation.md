## **Metrics API Documentation**

### **Base URL**
```
https://backend-vqnv.onrender.com/api/v1
```


---

## **Endpoints**

### 1️⃣ **Get All Metrics**
**Endpoint:**  
```http
GET /metrics/getAllMetrics
```
**Description:**  
Fetches all available metrics from the database.

**Response Example:**
```json
{
  "success": true,
  "message": "Metrics retrieved successfully",
  "data": [
    {
      "_id": "65a4efdb7d3b2f001f3b5bcd",
      "metricName": "GDP Growth",
      "value": 3.2,
      "unit": "%",
      "updatedAt": "2024-06-10T12:45:00Z"
    },
    {
      "_id": "65a4eff07d3b2f001f3b5bce",
      "metricName": "Inflation Rate",
      "value": 4.5,
      "unit": "%",
      "updatedAt": "2024-06-10T12:45:00Z"
    }
  ]
}
```
**Possible Errors:**
- `500 Internal Server Error` (if something goes wrong)

---

### 2️⃣ **GET
AverageDailyHighRange**
**Endpoint:**  
```http
GET metrics/getAverageDailyHighRange
```
**Description:**  
Fetches Daily Average High Range.

**Request Example:**  
```http
GET /metrics/getAverageDailyHighRange
```
**Response Example:**
```json
{
  
    "success": true,
    "message": "Fetch successful & metric saved",
    "data": 0.3826229508196724,
    "code": 200

}
```
**Possible Errors:**
- `404 Not Found` (if AverageDailyHighRange does not exist)
- `500 Internal Server Error`

---

### 3️⃣ **GET
AverageDailyHighRange**
**Endpoint:**  
```http
GET metrics/getAverageDaily linkowRange
```
**Description:**  
Fetches Daily Average Low Range.

**Request Example:**  
```http
GET /metrics/getAverageDailyLowRange
```
**Response Example:**
```json
{
  
    "success": true,
    "message": "Fetch successful & metric saved",
    "data": 0.3826229508196724,
    "code": 200

}
```
**Possible Errors:**
- `404 Not Found` (if AverageDailyLowRange does not exist)
- `500 Internal Server Error`

```


---

### 4️⃣ **GET
AverageDailyTotalRange**
**Endpoint:**  
```http
GET metrics/getAverageDailyTotalRange
```
**Description:**  
Fetches Daily Average Total Range.

**Request Example:**  
```http
GET /metrics/getAverageDailyTotalRange
```
**Response Example:**
```json
{
  
    "success": true,
    "message": "Fetch successful & metric saved",
    "data": 0.3826229508196724,
    "code": 200

}
```
**Possible Errors:**
- `404 Not Found` (if AverageDailyTotalRange does not exist)
- `500 Internal Server Error`

---


### 5️⃣ **GET
AverageDailyVolumeRange**
**Endpoint:**  
```http
GET metrics/getAverageDailyVolumeRange
```
**Description:**  
Fetches Daily Average Volume Range.

**Request Example:**  
```http
GET /metrics/getAverageDailyVolumeRange
```
**Response Example:**
```json
{
  
    "success": true,
    "message": "Fetch successful & metric saved",
    "data": 0.3826229508196724,
    "code": 200

}
```
**Possible Errors:**
- `404 Not Found` (if AverageDailyVolumeRange does not exist)
- `500 Internal Server Error`


---

### 6️⃣ **Get All Event Calendar**
**Endpoint:**  
```http
GET /eventCalendars/getAlEventCalendar
```
**Description:**  
Fetches all available event calendar from the database.

**Response Example:**
```json
{
  "success": true,
  "message": " Event Calendar retrieved successfully",
  "data": [
    {
            "_id": "67a0abbcf8aa1bb5201da7c9",
            "date": "2025-01-09",
            "__v": 0,
            "actual": "4.21%",
            "event": "Inflation Rate YoY",
            "forecast": "4.28%",
            "previous": "4.55%"
    },
    {
            "_id": "67a0abbcf8aa1bb5201da7c9",
            "date": "2025-01-09",
            "__v": 0,
            "actual": "4.21%",
            "event": "Inflation Rate YoY",
            "forecast": "4.28%",
            "previous": "4.55%"
    },
  ]
}
```
**Possible Errors:**
- `500 Internal Server Error` (if something goes wrong)

---

### 7️⃣ **Get All Kimbera Market Data**
**Endpoint:**  
```http
GET /marketData/getAllKimberaData
```
**Description:**  
Fetches all available Market Datafrom the database.

**Response Example:**
```json
{
  "success": true,
  "message": "Market Data retrieved successfully",
  "data": [
    {
            "_id": "67a0b3e4f8aa1bb5201da7f0",
            "date": "31/12/2024",
            "__v": 0,
            "closePrice": "29.4",
            "highestPrice": "29.98",
            "lowestPrice": "28.71",
            "openPrice": "28.91",
            "symbol": "KIMBERA:MM"
    },
    {
            "_id": "67a0b3e4f8aa1bb5201da7f0",
            "date": "31/12/2024",
            "__v": 0,
            "closePrice": "29.4",
            "highestPrice": "29.98",
            "lowestPrice": "28.71",
            "openPrice": "28.91",
            "symbol": "KIMBERA:MM"

    },
  ]
}
```
**Possible Errors:**
- `500 Internal Server Error` (if something goes wrong)

---

## **🛠️ Technologies Used**
- **Node.js** – Backend runtime
- **Express.js** – Web framework
- **MongoDB** – Database for storing metrics
- **Mongoose** – ODM for MongoDB
- **Render** – Backend deployment
- **Postman** – API testing

---

## **🚀 Live API Documentation**
For more details and testing, visit the live API docs:  
🔗 **[Metrics API Documentation](https://documenter.getpostman.com/view/19194645/2sAYX5KhRQ)**

