# week4

# 💱 Real-Time Currency Converter

A React-based web application that converts currencies in real-time using a public exchange rate API. The app allows users to select currencies, input an amount, and instantly view the converted value along with the current exchange rate.

---

## 🚀 Features

* 💱 Real-time currency conversion
* 🌐 Fetch exchange rates using API
* 🔁 Swap currencies with a single click
* 🔢 Input amount dynamically
* 📊 Display converted result instantly
* 📈 Show current exchange rate
* ⚡ Optimized calculations using useMemo
* ❌ Error handling for API failures
* 🎨 Clean UI with external CSS

---

## 🛠️ Tech Stack

* **React.js**
* **JavaScript (ES6)**
* **CSS (External Styling)**
* **Fetch API**
* **Frankfurter API**

---

## 📂 Project Structure

```id="vx3zfp"
src/
 ├── components/
 │    └── Converter.js
 │
 ├── styles/
 │    └── style.css
 │
 ├── App.js
 ├── index.js
```

---

## ⚙️ Installation & Setup

1. Clone the repository:

```id="ndwn3o"
git clone <your-repo-link>
```

2. Navigate to project folder:

```id="5o7r45"
cd currency-converter
```

3. Install dependencies:

```id="mrj7a7"
npm install
```

4. Run the application:

```id="7z0m8s"
npm start
```

---

## 🌐 API Used

* Frankfurter Exchange Rate API

Example endpoint:

```id="56zhu3"
https://api.frankfurter.dev/v1/latest?amount=1&from=USD&to=INR
```

---

## 📸 Functionality

### 🔢 Input Amount

* Users enter the amount to convert

### 🌍 Currency Selection

* Dropdowns for selecting source and target currencies

### 🔁 Swap Feature

* Swap button to quickly interchange currencies

### 📊 Conversion Output

* Displays converted amount in real-time

### 📈 Exchange Rate

* Shows current rate between selected currencies

### ❌ Error Handling

* Displays error message if API fails

---

## ✨ Enhancements Implemented

* Swap button for better UX
* useMemo for optimized calculations
* Conditional rendering for result and error
* Component-based architecture
* External CSS styling

---

## 🎯 Learning Outcomes

* API integration using fetch
* State management using useState
* Side effects handling using useEffect
* Performance optimization using useMemo
* Error handling in React
* Building reusable components

---

## 👨‍💻 Author

**Sagar Kumar Sha**

---

## 📌 Notes

This project was developed as part of a React assignment to demonstrate real-time API integration, state management, and UI development.

---

## ⭐ Future Improvements

* 🌍 Add dynamic currency list from API
* 🌙 Add dark mode
* 📱 Improve responsiveness
* 🔄 Auto-refresh exchange rates
* 🚀 Deploy on Netlify / Vercel

---
