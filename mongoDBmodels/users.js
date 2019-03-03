const mongoose = require('mongoose')
const { Schema } = mongoose;

let googleUserSchema = new Schema({
    googleUserID: String
});

mongoose.model('google_user', googleUserSchema);