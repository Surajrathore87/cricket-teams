const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    profileImg: String,
    firstName: String,
    lastName: String,
    areaCode: Number,
    primaryPhone: Number,
    streetAddress: String,
    dob: Date,
    city: String,
    state: String,
    aadhaarCardImg: String,
    aadhaarCardNumber: Number,
    certificateImg: String,
    utrNumber: Number,
    jerseySize: String,
    jerseyNumber: Number,
    playerStyle: String,
    bowlingStyle: String,
    jerseyName: String
});

module.exports = mongoose.model('Player', PlayerSchema);
