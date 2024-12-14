const Player = require('../models/Player');

// Save player data
exports.savePlayer = async (req, res) => {
    try {
        const {
            firstName, lastName, areaCode, primaryPhone, streetAddress, dob, city, state,
            aadhaarCardNumber, utrNumber, jerseySize, jerseyNumber, playerStyle, bowlingStyle, jerseyName
        } = req.body;

        const profileImg = req.files['profileImg'] ? req.files['profileImg'][0].path : null;
        const aadhaarCardImg = req.files['aadhaarCardImg'] ? req.files['aadhaarCardImg'][0].path : null;
        const certificateImg = req.files['certificateImg'] ? req.files['certificateImg'][0].path : null;

        const player = new Player({
            profileImg, firstName, lastName, areaCode, primaryPhone, streetAddress, dob,
            city, state, aadhaarCardImg, aadhaarCardNumber, certificateImg, utrNumber,
            jerseySize, jerseyNumber, playerStyle, bowlingStyle, jerseyName
        });

        await player.save();
        res.send('Player data saved successfully!');
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while saving player data.');
    }
};
