const mongoose = require('mongoose');

// Define movie schema
let entrySchema = new mongoose.Schema({
    hash: {
        type: String,
        unique: true,
    },
    pic: Object,
    name: String,
    role: String,
});

// Export Mongoose model
module.exports = mongoose.model('entry', entrySchema);