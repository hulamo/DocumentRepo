const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const FriendSchema = new Schema({
    friendname: {
        type: String,
        required: true
    },
    friendemail: {
        type: String,
        required: true
    },
    id1: {
        type: String

    },
    id2: {
        type: String

    },
    isuser: {
        type: Boolean

    },
    isaccepted: {
        type: Boolean,
        default: true,
        required: true
    },

    iscurrent: {
        type: Boolean

    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Friend = mongoose.model("friends", FriendSchema);