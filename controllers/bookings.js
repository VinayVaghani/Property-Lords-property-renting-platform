const Booking = require("../models/booking.js");
const Listing = require("../models/listing.js");

module.exports.createBooking = async (req, res) => {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
        req.flash("error", "Listing not found!");
        return res.redirect("/listings");
    }

    const { checkIn, checkOut, guests } = req.body.booking;
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    if (checkOutDate <= checkInDate) {
        req.flash("error", "Check-out date must be after check-in date.");
        return res.redirect(`/listings/${listing._id}`);
    }

    const diffTime = Math.abs(checkOutDate - checkInDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const totalPrice = diffDays * listing.price;

    const booking = new Booking({
        listing: listing._id,
        guest: req.user._id,
        checkIn: checkInDate,
        checkOut: checkOutDate,
        guests: parseInt(guests),
        totalPrice,
    });

    await booking.save();
    req.flash("success", "Property booked successfully!");
    res.redirect("/bookings");
};

module.exports.listBookings = async (req, res) => {
    const bookings = await Booking.find({ guest: req.user._id })
        .populate("listing")
        .sort({ createdAt: -1 });
    res.render("bookings/index.ejs", { bookings });
};

module.exports.cancelBooking = async (req, res) => {
    const { id } = req.params;
    const booking = await Booking.findById(id);

    if (!booking) {
        req.flash("error", "Booking not found!");
        return res.redirect("/bookings");
    }

    if (!booking.guest.equals(req.user._id)) {
        req.flash("error", "You are not authorized to cancel this booking.");
        return res.redirect("/bookings");
    }

    booking.status = "cancelled";
    await booking.save();
    req.flash("success", "Booking cancelled.");
    res.redirect("/bookings");
};
