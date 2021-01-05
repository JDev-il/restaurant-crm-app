// Call the the details from front end and parse them below

var User = require("../models/User");

const guest = new User({
    first_name: String(),
    last_name: String(),
    email: String()
});


module.exports = guest