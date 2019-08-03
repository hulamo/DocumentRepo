const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FileSchema = new mongoose.Schema({

    folder: {
        type: Schema.Types.ObjectId,
        ref: 'folders'
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },

    filename: {
        type: String,
        required: true
    },

    filelink: {
        type: String,
        required: false
    },

    fileglink: {
        type: String,
        required: false
    },
    filedescription: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = File = mongoose.model('file', FileSchema);