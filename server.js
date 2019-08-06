const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const folders = require("./routes/api/folders");
const files = require("./routes/api/files");

const friends = require("./routes/api/friends");

const app = express();



// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
    .connect(
        db, { useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes

app.use("/api/friends", friends);
app.use("/api/users", users);

app.use("/api/folders", folders);
app.use("/api/files", files);

const port = process.env.PORT || 5000;


app.use(express.static(__dirname + "/public"));


app.listen(port, () => console.log(`Server up and running on port ${port} !`));