const userModel = require("../models/UserModel");
const emailUtil = require("../util/EmailUtil");

const addUser = async (req, res) => {
  const user = new userModel(req.body);
  user
    .save()
    .then((data) => {
      emailUtil.genMail(data.email);
      
      res.status(201).json({
        message: "User added successfully",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Something went wrong",
        error: err,
      });
    });
};
const getUsers = async (req, res) => {
  userModel
    .find()
    .populate("role")
    .then((data) => {
      res.status(200).json({
        message: "Users fetched successfully",
        user: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Something went wrong",
        error: err,
      });
    });
};
const updateUser = async (req, res) => {
  var id = req.params.id;
  userModel
    .findOneAndUpdate({ _id: id }, req.body)
    .then((data) => {
      res.status(200).json({
        message: "User updated successfully",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Something went wrong",
        error: err,
      });
    });
};
const deleteUser = async (req, res) => {
  var id = req.params.id;
  userModel
    .findOneAndDelete({ _id: id })
    .then((data) => {
      res.status(200).json({
        message: "User deleted successfully",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Something went wrong",
        error: err,
      });
    });
};
const getUserById = async (req, res) => {
  var id = req.params.id;
  userModel
    .findOne({ _id: id })
    .populate("role")
    .then((data) => {
      res.status(200).json({
        message: "User fetched successfully",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Something went wrong",
        error: err,
      });
    });
};
const loginUser = async (req, res) => {
  var email = req.body.email;
  var password = req.body.password;
  userModel
    .findOne({ email: email, password: password })
    .populate("role")
    .then((data) => {
      res.status(200).json({
        message: "User fetched successfully",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Something went wrong",
        error: err,
      });
    });
};
module.exports = {
  addUser,
  getUsers,
  updateUser,
  deleteUser,
  getUserById,
  loginUser
};
