# User-Data

This project demonstrates how to send user data to a JSON Server using fetch() and handle the response dynamically.

📌 Features

Users can submit their name and email through a form.

The data is stored in db.json using a POST request.

The server responds with a unique id, which is displayed on the webpage.

Errors are handled and displayed in the UI.

🚀 Setup Instructions

1️⃣ Install JSON Server (If Not Installed)

npm install -g json-server

2️⃣ Start JSON Server

json-server --watch db.json --port 3000

3️⃣ Open index.html in a Browser

4️⃣ Submit Data via the Form

Enter your name and email, then submit.

The response will be displayed with a unique ID.

🛠 Project Structure

user-data/
│── index.html       # Main HTML file
│── styles.css       # CSS styles
│── script.js        # JavaScript logic
│── db.json          # JSON Server mock database
│── README.md        # Project documentation

🔧 Technologies Used

HTML, CSS, JavaScript

JSON Server (for mock API)


