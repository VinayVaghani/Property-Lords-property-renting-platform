# Property Lords 🏡

[![Node.js Version](https://img.shields.io/badge/node-%3E%3D22.14.0-blue.svg)](https://nodejs.org/)
[![Express.js Version](https://img.shields.io/badge/express-v5.x-green.svg)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/database-MongoDB-brightgreen.svg)](https://www.mongodb.com/)
[![License](https://img.shields.io/badge/license-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![CSS](https://img.shields.io/badge/styling-Bootstrap%20%26%20CSS-purple.svg)](#)

Property Lords is a full-featured property listing and booking web application built using the classic **MVC (Model-View-Controller)** architecture. Taking inspiration from rental platforms like Airbnb, it allows users to list, explore, book, and review properties worldwide. 

---

## 🌟 Features

- 🏠 **Property Listings (CRUD)**: Authorized users can create, read, update, and delete their own property listings.
- 🏷️ **Smart Categorization**: Listings are sorted into categories such as *Trending, Rooms, Iconic Cities, Mountains, Castles, Amazing Pools, Camping, Farms, Domes, and Boats*.
- 🔍 **Dynamic Search**: Filter properties dynamically by search terms or categories.
- 📅 **Seamless Bookings**: Users can select check-in/check-out dates, specify the number of guests, view real-time price calculations, and book properties.
- 📝 **Interactive Reviews & Ratings**: Users can leave 1-to-5-star ratings and comments on properties.
- 🔐 **Secure Authentication**: User signup, login, and session persistence powered by **Passport.js** (Local Strategy).
- 🛡️ **Role-Based Authorization**: Route protection and ownership checks ensure users can only modify their own listings and bookings.
- ☁️ **Cloud Image Uploads**: Seamless image uploads handled by **Multer** and stored securely in the cloud with **Cloudinary**.
- 🚦 **Robust Validation & Error Handling**: Server-side schema validation using **Joi** and comprehensive custom error handling middlewares.

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose ODM
- **Templating Engine**: EJS (Embedded JavaScript) with `ejs-mate` for layouts
- **Styling**: Bootstrap 5, Custom CSS
- **File Uploads**: Multer, Multer-Storage-Cloudinary, Cloudinary SDK
- **Authentication**: Passport.js, Passport-Local, Passport-Local-Mongoose
- **Validation**: Joi (Javascript Object Schema Validator)

---

## 📁 Project Structure

```text
Property Lords/
│
├── controllers/          # Request handlers (Listings, Reviews, Bookings, Users)
├── init/                 # Database initialization and sample data seeding
├── models/               # Mongoose Schemas (Listing, Review, Booking, User)
├── public/               # Static assets (CSS, JS, Images, Icons)
│   ├── css/
│   └── js/
├── routes/               # Express Routers mapping endpoints to controllers
├── utils/                # Utility classes (ExpressError, wrapAsync helper)
├── views/                # EJS templates (Layouts, Includes, Pages)
│   ├── bookings/
│   ├── includes/         # Navbar, Footer, Flash alerts
│   ├── layouts/          # Boilerplate HTML layout
│   ├── listings/         # Listing views (index, show, new, edit)
│   └── users/            # Auth views (signup, login)
│
├── .env                  # Local environment variables (Cloudinary API keys)
├── .env.example          # Sample environment variables template
├── .gitignore            # Git ignore rules
├── app.js                # Main application entry point
├── cloudConfig.js        # Cloudinary storage configuration
├── middleware.js         # Custom middlewares (isLoggedIn, isOwner, validators)
├── package.json          # Dependencies and scripts
└── schema.js             # Joi validation schemas
```

---

## 🚀 Getting Started

Follow these steps to set up the project locally.

### 1. Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v22.14.0 or higher recommended)
- [MongoDB](https://www.mongodb.com/try/download/community) (Local community server running on port `27017`)

### 2. Clone the Repository

```bash
git clone https://github.com/your-username/property-lords.git
cd property-lords
```

### 3. Install Dependencies

Install all the required package dependencies:

```bash
npm install
```

### 4. Setup Environment Variables

Create a `.env` file in the root directory and configure your Cloudinary credentials (you can copy from `.env.example`):

```env
# Cloudinary Credentials
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

# Optional Settings
PORT=4040
NODE_ENV=development
```

### 5. Seed the Database

Initialize your MongoDB database with sample listings:

```bash
node init/index.js
```

### 6. Run the Application

Start the server using `node` or `nodemon` (if installed globally):

```bash
# Run with Node
node app.js

# Or run with Nodemon for auto-reloading
nodemon app.js
```

The application will start running on port **`4040`**. Open your browser and navigate to:

```text
http://localhost:4040/listings
```

---

## 🔒 Security & Validations

- **Input Validation**: Joi schemas are defined in `schema.js` to validate listing and review models before they hit MongoDB, guarding against database pollution.
- **Authentication**: Route protection checks (`isLoggedIn`) prevent unauthorized users from booking, posting listings, or leaving reviews.
- **Authorization**: Ownership checks (`isOwner`) ensure listing edits and deletions are only performed by the user who created them.

---

## 📝 License

This project is licensed under the [ISC License](LICENSE). Feel free to customize and build upon it!

---

Developed with ❤️ by [Vinay Vaghani](https://github.com/your-username).
