const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn } = require("../middleware.js");
const bookingController = require("../controllers/bookings.js");

// Create a booking for a listing
router.post("/:id", isLoggedIn, wrapAsync(bookingController.createBooking));

// View all bookings for the logged-in user
router.get("/", isLoggedIn, wrapAsync(bookingController.listBookings));

// Cancel a booking
router.post("/:id/cancel", isLoggedIn, wrapAsync(bookingController.cancelBooking));

module.exports = router;
