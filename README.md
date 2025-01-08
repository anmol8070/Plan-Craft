# Plan-Craft

This web application enables users to manage, sort, and track event guests.

Plan-Craft is a web application built with the MERN stack that allows users to add, sort, and manage guest lists. It includes features to filter, search, and track attendance status while protecting all routes to ensure only registered users can access the app.

---

## Features

- **User Authentication**
  - Register and login using email.
  - All routes are protected for authenticated users only.
- **Guest Management**
  - Track confirmed and unconfirmed guests.
  - Toggle guest attendance status.
  - Filter and search guests for efficient management.
- **Future Features (TODO)**
  - Register and login with Gmail.
  - Integrated expense tracker for event planning.

---

## Installation and Usage

### Prerequisites
Ensure you have the following installed:
- Node.js
- MongoDB

### Running Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/anmol8070/Plan-Craft.git
   cd Plan-Craft
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development environment:
   ```bash
   npm run dev
   ```
   This will start the **client** on `http://localhost:3000` and the **server** on `http://localhost:5000`.

---

## Tech Stack

- **Frontend:** React, CSS, Bootstrap
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JSON Web Tokens (JWT)

---

## Project Structure

```
Plan-Craft/
│
├── client/          # React app for frontend
├── server/          # Express app for backend
├── models/          # MongoDB schemas
├── routes/          # API routes
├── package.json     # Dependencies and scripts
└── README.md        # Project documentation
```

---

## Contribution

Feel free to submit issues or pull requests. Contributions are welcome!





