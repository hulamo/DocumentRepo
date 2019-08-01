const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//   type: Schema.Types.ObjectId,
// ref: 'users'
const FolderSchema = new mongoose.Schema({

    user: {
        type: String,

    },

    foldername: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Folder = mongoose.model('folder', FolderSchema);