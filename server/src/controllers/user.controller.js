const db = require("../models");
const User = db.user;

var bcrypt = require("bcryptjs");

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

exports.updateUser = (req, res) => {
  User.findById("63fbe2e92fab1eef20ca5f70", (err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    user.username = req.body.username;
    user.email = req.body.email;
    user.password = bcrypt.hashSync(req.body.password, 8);

    user.save((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      res.send({ message: "User was updated successfully!" });
    });
  });
};
