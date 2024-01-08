const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        uname: {
            type: String,
            required: true
        },
        uemail: {
            type: String,
            required: true
        },
        upassword: {
            type: String,
            required: true
        }
    },
    { timestamps: true }

);
module.exports = mongoose.model("users", UserSchema)