const mongoose = require('mongoose');

const dbUri = `mongodb+srv://sangeethakamaraj6:Y7U79vhps7MUjXWy@cluster0.1ghkuqs.mongodb.net/`

const connectDb = async () => {
    if (mongoose.connection.readyState === 1) return;
    await mongoose.connect(dbUri);
    console.log(mongoose.connection.readyState);
}

module.exports = { connectDb, mongoose };