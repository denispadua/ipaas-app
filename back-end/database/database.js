const mongoose = require('mongoose');

const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.CONNECTION_STRING);
    }
    catch (e) {
        console.log(e);
    }
}

module.exports = connectDatabase;