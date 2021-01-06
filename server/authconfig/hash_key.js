const crypto = require("crypto");
const hash = crypto.createHash('sha256');

    const write = (rand) =>{
        hash.write(rand);
        return hash.digest("hex")
    }

module.exports = write