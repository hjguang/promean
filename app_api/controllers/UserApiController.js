const mongoose = require('mongoose')

const User = mongoose.model('UserModel',null,'user')

const userCreate =(req,res) => {
    User.create({
        userName: req.body.userName,
        birthday: req.body.birthday
    },(err, location) => {
        if (err) {
            res
                .status(400)
                .json(err);
        } else {
            res
                .status(201)
                .json(location);
        }
    });
}

const userList = (req, res) => {
    res.send("ddd")
}

module.exports = {
    userCreate,
    userList
}