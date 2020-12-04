const mongoose = require('mongoose');

const UserModel = new mongoose.Schema({
    userName: String,
    birthday: Date
})

mongoose.model('UserModel', UserModel)