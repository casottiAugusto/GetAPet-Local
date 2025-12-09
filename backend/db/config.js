// config.js
const mongoose = require('mongoose');
async function main() {
    await mongoose.connect('mongodb://admin:secret@localhost:27017/getapet?authSource=admin');
    console.log("Connected to MongoDB");
}
main().catch(err => console.log(err));


module.exports = mongoose;
